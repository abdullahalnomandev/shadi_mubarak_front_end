"use client";

import { Cascader } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import FieldRequireLabel from "../UI/FieldRequireLabel";

type CascaderOption = {
  value: string | number;
  label: string;
  children?: CascaderOption[];
};

type FromCascaderItemProps = {
  name: string;
  label?: string;
  size?: "large" | "small" | "middle";
  options?: CascaderOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  allowClear?: boolean;
  showSearch?: boolean;
  changeOnSelect?: boolean;
  displayRender?: (labels: string[]) => string;
  defaultValue?: string; // string from DB
  separator?: string; // string separator, default ","
};

const FromCaseCaderItem = ({
  name,
  label,
  size = "large",
  options = [],
  placeholder,
  required = false,
  disabled = false,
  allowClear = true,
  showSearch = true,
  changeOnSelect = false,
  displayRender,
  defaultValue = "",
  separator = ",",
}: FromCascaderItemProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  // Convert string to array for Cascader
  const valueToArray = (val?: string) =>
    val && val.length ? val.split(separator) : [];

  return (
    <div className="w-full">
      <FieldRequireLabel label={label} required={required} />

      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <Cascader
            style={{ width: "100%" }}
            size={size}
            options={options}
            placeholder={placeholder}
            disabled={disabled}
            allowClear={allowClear}
            showSearch={showSearch}
            changeOnSelect={changeOnSelect}
            displayRender={displayRender}
            className="!w-full"
            value={valueToArray(value)} // convert string to array
            onChange={(val) => onChange(val.join(separator))} // convert array back to string
          />
        )}
      />

      {errorMessage && (
        <small className="text-red-500 dark:!text-amber-600">
          {errorMessage}
        </small>
      )}
    </div>
  );
};

export default FromCaseCaderItem;
