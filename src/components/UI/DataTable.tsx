import { Table } from "antd";
import type { TablePaginationConfig } from "antd/es/table";
import React from "react";

interface IDataTableProps {
  pageSize: number;
  total: number;
  showSizeChanger?: boolean;
  showPagination?: boolean;
  onPageSizeChange?: (page: number, pageSize: number) => void;
  [key: string]: any;
}

const DataTable: React.FC<IDataTableProps> = ({
  pageSize,
  total,
  showSizeChanger = true,
  showPagination = true,
  onPageSizeChange,
  ...props
}) => {
  const paginationConfig: TablePaginationConfig = {
    pageSize,
    total,
    pageSizeOptions: ["5", "10", "20"],
    showSizeChanger,
    onChange: onPageSizeChange,
    responsive: true,
  };

  return (
    <Table {...props} pagination={showPagination ? paginationConfig : false} />
  );
};

export default DataTable;
