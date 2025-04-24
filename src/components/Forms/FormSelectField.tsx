"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type ISelectFieldProps = {
  name: string;
  label?: string;
  size?: "large" | "small" | "middle";
  value?: string | string[] | undefined;
  options?: { value: string; label: string }[];
  defaultValue?: string | string[] | undefined;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  showSearch?: boolean;
  filterOption?: (input: string, option: unknown) => boolean;
}
const FormSelectField = ({
  name,
  label,
  options,
  defaultValue,
  size = "large",
  placeholder,
  required,
  showSearch=false,
}: ISelectFieldProps) => {
  const { control } = useFormContext();
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1">
          {label}
          {required && <span className="text-red-500"> *</span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            size={size}
            onChange={onChange}
            options={options}
            defaultValue={defaultValue}
            value={value}
            placeholder={placeholder}
            showSearch={showSearch}
            className="w-full"
          />
        )}
      />
    </div>
  );
};

export default FormSelectField;
