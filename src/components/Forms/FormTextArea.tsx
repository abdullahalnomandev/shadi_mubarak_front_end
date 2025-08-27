"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import TextArea from "antd/es/input/TextArea";
import { Controller, useFormContext } from "react-hook-form";
import FieldRequireLabel from "../UI/FieldRequireLabel";

interface ITextArea {
  name: string;
  label?: string;
  id: string;
  size?: "large" | "small" | "middle";
  value?: string | string[] | undefined;
  placeholder?: string;
  validation?: object;
  required?:boolean;
}
const FormTextArea = ({
  name,
  size = "large",
  value,
  placeholder,
  label,
  required = false,
}: ITextArea) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageBuPropertyName(errors, name);
  return (
    <>
      <FieldRequireLabel label={label} required={required} />

      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextArea
            size={size}
            autoComplete='off'
            {...field}
            value={value ? value : field.value}
            placeholder={placeholder}
            allowClear
            className={`
              dark:!bg-slate-800 
              dark:!text-white 
              dark:!placeholder-slate-500 
              dark:!border-slate-700
              dark:focus:!border-blue-500 
              dark:!focus:border-blue-900
            `}
          />
        )}
      />
      {errors && <small className='text-red-500'>{errorMessage}</small>}
    </>
  );
};

export default FormTextArea;
