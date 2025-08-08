"use client";
import { Button, Input } from "antd";
import { GoPlus } from "react-icons/go";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";

interface ActionBarProps {
  title: string;
  search: string;
  sortBy: string;
  setSearch: (value: string) => void;
  handleReset: () => void;
  handleCreate: () => void;
  isCreate?: boolean;
}
const ActionBar = ({
  title,
  search,
  sortBy,
  handleReset,
  setSearch,
  isCreate = true,
  handleCreate,
}: ActionBarProps) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight leading-7 text-gray-900 dark:text-gray-100 py-3">
        {title}
      </h1>
      <div className="flex justify-between items-center">
        <Input
          style={{ width: 300, marginBottom: "10px" }}
          size="large"
          placeholder="Search... "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          addonBefore={<SearchOutlined />}
        />
        <div className="flex gap-3 items-center w-full sm:w-auto justify-end">
          {isCreate && (
            <Button
              onClick={handleCreate}
              type="primary"
              size="large"
              className="flex items-center gap-2 !bg-blue-600 hover:!bg-blue-700 
                transition-all duration-300 dark:!bg-blue-500 dark:hover:!bg-blue-600"
              icon={<GoPlus className="text-lg" />}
            >
              Create
            </Button>
          )}

          {(!!sortBy || !!search) && (
            <Button
              type="default"
              size="large"
              onClick={handleReset}
              className="flex items-center hover:!text-blue-600 hover:!border-blue-600 
                transition-all duration-300 dark:text-gray-300 dark:border-gray-600 
                dark:hover:!text-blue-400 dark:hover:!border-blue-400"
              icon={<ReloadOutlined />}
            >
              Reset
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActionBar;
