"use client";

import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import Link from "next/link";
import { useState } from "react";

import ActionBar from "@/components/UI/ActionBar";
import DataTable from "@/components/UI/DataTable";
import PopConfirm from "@/components/UI/PopConfirm";
import { useDebounce } from "@/redux/hooks";

import {
  useDeleteFavoriteListMutation,
  useGetFavoriteListQuery,
} from "@/redux/api/favoriteList";

const FavoriteList = () => {
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const debouncedTerm = useDebounce({ searchQuery: search, deley: 600 });

  const query: Record<string, any> = {
    limit: size,
    page,
    sortBy,
    sortOrder,
  };

  if (debouncedTerm) query["searchTerm"] = debouncedTerm;

  const { data, isLoading } = useGetFavoriteListQuery(query);
  const [deleteFavoriteList] = useDeleteFavoriteListMutation();

  const { meta, favorites } = data || {};

  const handleDelete = async (id: string) => {
    try {
      await deleteFavoriteList({ likedPersonBioNo: id });
      message.success("Deleted successfully.");
    } catch (error: any) {
      message.error(error?.data || "Something went wrong. Please try again.");
    }
  };

  const columns = [
    {
      title: "S/N",
      key: "serial",
      render: (_: any, __: any, index: number) => (page - 1) * size + index + 1,
    },
    {
      title: "BioData No",
      dataIndex: "likedPerson",
      key: "bioDataNo",
      render: (likedPerson: any) => likedPerson?.bioDataNo || "N/A",
    },
    {
      title: "Address",
      dataIndex: "likedPerson",
      key: "address",
      render: (likedPerson: any) => likedPerson?.address || "N/A",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <div className='flex items-center gap-2'>
          <Link href={`/biodata/${record?.likedPerson?.bioDataNo}`}>
            <Button type='primary' size='small' title='View'>
              <EyeOutlined />
            </Button>
          </Link>
          <PopConfirm
            title='Remove from favorites?'
            handleConfirm={() => handleDelete(record?._id)}
            handleCancel={() => {}}>
            <Button type='primary' danger size='small' title='Delete'>
              <DeleteOutlined />
            </Button>
          </PopConfirm>
        </div>
      ),
    },
  ];

  const onTableChange = (_pagination: any, _filters: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const onPageSizeChange = (page: number, pageSize: number) => {
    setSize(pageSize);
    setPage(page);
  };

  const handleReset = () => {
    setSearch("");
    setSortBy("");
    setSortOrder("desc");
  };

  return (
    <>
      <ActionBar
        title='Favorites List'
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        handleReset={handleReset}
        isCreate={false}
      />

      <DataTable
        loading={isLoading}
        columns={columns}
        dataSource={favorites?.map((item: any) => ({
          ...item,
          key: item?._id || item?.likedPerson?.bioDataNo,
        }))}
        rowKey='key'
        pageSize={size}
        total={Number(meta?.total || 0)}
        showSizeChanger
        showPagination={!!(Number(meta?.total) > 10)}
        onChange={onTableChange}
        onPageSizeChange={onPageSizeChange}
      />
    </>
  );
};

export default FavoriteList;
