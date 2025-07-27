"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
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
  mode?: "multiple" | "tags";
  filterOption?: (input: string, option: any) => boolean;
};
const FormSelectField = ({
  name,
  label,
  options,
  defaultValue,
  size = "large",
  mode,
  placeholder,
  required,
  showSearch = false,
}: ISelectFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageBuPropertyName(errors, name);
  console.log({ fromSelectField: errorMessage });
  return (
    <div className='w-full'>
      {label && (
        <label className='block text-sm font-medium text-black mb-1'>
          {label}
          {required && <span className='text-red-500'> *</span>}
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
            {...(!!mode ? { mode } : {})}
            defaultValue={defaultValue}
            value={value}
            placeholder={placeholder}
            showSearch={showSearch}
            className={`
              w-full
              dark:bg-slate-800 
              dark:text-white 
              dark:placeholder-slate-500 
              dark:border-slate-700
              dark:focus:!border-blue-500 
            `}
          />
        )}
      />
      <small className='text-red-500 dark:!text-amber-600'>
        {typeof errorMessage === "string"
          ? errorMessage
          : typeof errors[name]?.message === "string"
          ? errors[name]?.message
          : ""}
      </small>
    </div>
  );
};

export default FormSelectField;
