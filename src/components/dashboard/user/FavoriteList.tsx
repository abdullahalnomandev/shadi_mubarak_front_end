"use client";
import React, { useState } from "react";
import DataTable from "@/components/UI/DataTable";
import { Button, message } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { useDebounce } from "@/redux/hooks";
import ActionBar from "../../UI/ActionBar";
import {
  useDeleteFavoriteListMutation,
  useGetFavoriteListQuery,
} from "@/redux/api/favoriteList";
import Link from "next/link";
import PopConfirm from "../../UI/PopConfirm";

const FavoriteList = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounce({
    searchQuery: search,
    deley: 600,
  });

  if (debouncedTerm) query["searchTerm"] = debouncedTerm;
  const { data, isLoading } = useGetFavoriteListQuery({ ...query });
  const [deleteFavoriteList] = useDeleteFavoriteListMutation();

  const { meta, favorites } = data || {};

  const handleDelete = async (id: string) => {
    try {
      await deleteFavoriteList(id);
      message.success("Deleted Successfully");
    } catch (error: any) {
      message.error(
        (error as any)?.data || "Something went wrong please try again later."
      );
    }
  };

  const columns = [
    {
      title: "BioData No",
      dataIndex: "likedPerson",
      key: "likedPerson",
      sorter: (a: any, b: any) => a.name?.length - b.name?.length,
      render: (data: any) => {
        return data?.bioDataNo;
      },
    },
    {
      title: "Address",
      dataIndex: "likedPerson",
      key: "address",
      sorter: (a: any, b: any) => a.name?.length - b.name?.length,
      render: (data: any) => {
        return data?.address;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (data: any) => (
        <div className='flex items-center gap-2'>
          <Link href={`/biodata/${data?.likedPerson?.bioDataNo}`}>
            <Button
              type='primary'
              onClick={() => {
                console.log({ data });
              }}
              className='w-4'>
              <EyeOutlined />
            </Button>
          </Link>
          <PopConfirm
            handleCancel={() => console.log("cencel")}
            handleConfirm={() => handleDelete(data?._id)}
            title='Delete from Favorites!'>
            <Button
              type='primary'
              danger
              className='w-4'
              onClick={() => {
                console.log({ data });
              }}>
              {" "}
              <DeleteOutlined />{" "}
            </Button>
          </PopConfirm>
        </div>
      ),
    },
  ];

  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    const { order, field } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const onPageSizeChange = (page: number, pageSize: number) => {
    setSize(pageSize);
    setPage(page);
  };

  const handleReset = () => {
    setSortBy("");
    setSortOrder("desc");
    setSearch("");
  };

  console.log({ meta, favorites });
  return (
    <>
      <ActionBar
        title='Favorites List'
        search={search}
        sortBy={sortBy}
        handleReset={handleReset}
        setSearch={setSearch}
        isCreate={false}
        handleCreate={() => {
          console.log("create");
        }}
      />
      <DataTable
        loading={isLoading}
        columns={columns}
        dataSource={favorites}
        pageSize={size}
        total={Number(meta?.total)}
        showSizeChanger={true}
        onChange={onTableChange}
        onPageSizeChange={onPageSizeChange}
        showPagination={!!(Number(meta?.total) > 10)}
        rowKey='id'
      />
    </>
  );
};

export default FavoriteList;
