"use client";
import React, { useState } from "react";
import DataTable from "@/components/UI/DataTable";
import { Button, Input } from "antd";
import dayjs from "dayjs";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDebounce } from "@/redux/hooks";

const AdminPage = () => {
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
    deley: 600
  });
  
  if (debouncedTerm) query["searchTerm"] = debouncedTerm;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: true
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: true
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: true
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (data: any) => {
        return data && dayjs(data).format("MMM D, YYYY hh:mm a");
      },
      sorter: true
    },
    {
      title: "Action",
      key: "action",
      render: (data: any) => (
        <div className="flex items-center gap-2">
          <Button
            type="primary"
            onClick={() => {
              console.log({ data });
            }}
            className="w-4"
          >
            <EyeOutlined />
          </Button>
          <Button
            type="primary"
            onClick={() => {
              console.log({ data });
            }}
            className="w-4"
          >
            <EditOutlined />
          </Button>
          <Button
            type="primary"
            danger
            className="w-4"
            onClick={() => {
              console.log({ data });
            }}
          >
            <DeleteOutlined />
          </Button>
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

  return (
    <>
      <div>
        <h1 className="font-bold py-2 text-2xl">Admin Management</h1>
        <div className="flex justify-between items-center">
          <Input
            style={{ width: 300, marginBottom: "10px" }}
            size="large"
            placeholder="Search... "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-2 items-center">
            <Button type="primary">Create Admin</Button>
            {(!!sortBy || !!search) && (
              <Button type="primary" onClick={handleReset}>
                <ReloadOutlined />
              </Button>
            )}
          </div>
        </div>
      </div>
      <DataTable
        loading={false}
        columns={columns}
        dataSource={[]}
        pageSize={size}
        total={0}
        showSizeChanger={true}
        onChange={onTableChange}
        onPageSizeChange={onPageSizeChange}
        showPagination={true}
        rowKey="id"
      />
    </>
  );
};

export default AdminPage;