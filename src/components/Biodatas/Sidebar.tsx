import {  Select, Slider } from "antd";
import React from "react";
import {
  DownOutlined,
} from "@ant-design/icons";
import Sider from "antd/es/layout/Sider";

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "none",
  scrollbarGutter: "stable"
};

const Sidebar = () => {
  return (
    <>
      <Sider width={250} style={siderStyle} className=" hidden md:block">
        <div className="p-4 bg-white min-h-screen w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-purple-700 font-medium text-lg">Filters</h2>
            <p className="text-gray-500">Biodata No</p>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-purple-700 font-medium">General</h3>
              <DownOutlined  className="text-gray-400" />
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-2">Im looking for</p>
                <Select
                  defaultValue="All"
                  style={{ width: "100%" }}
                  options={[
                    { value: "all", label: "All" },
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
              </div>

              <div>
                <p className="text-gray-600 mb-2">Marital Status</p>
                <Select
                  defaultValue="Married"
                  style={{ width: "100%" }}
                  options={[
                    { value: "married", label: "Married" },
                    { value: "unmarried", label: "Unmarried" },
                    { value: "divorced", label: "Divorced" },
                    { value: "widowed", label: "Widowed" },
                  ]}
                />
              </div>

              <div>
                <p className="text-gray-600 mb-2">Age</p>
                <Slider range defaultValue={[18, 60]} min={18} max={60} />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-purple-700 font-medium">Address</h3>
              <DownOutlined className="text-gray-400" />
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-purple-700 font-medium">Education</h3>
              <DownOutlined className="text-gray-400" />
            </div>
          </div>
        </div>
      </Sider>
    </>
  );
};

export default Sidebar;
