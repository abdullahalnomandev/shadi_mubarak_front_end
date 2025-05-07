"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import TextArea from "antd/es/input/TextArea";
import { Controller, useFormContext } from "react-hook-form";

interface ITextArea {
  name: string;
  label?: string;
  id: string;
  size?: "large" | "small" | "middle";
  value?: string | string[] | undefined;
  placeholder?: string;
  validation?: object;
}
const FormTextArea = ({
  name,
  size = "large",
  value,
  id,
  placeholder,
  label,
}: ITextArea) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageBuPropertyName(errors, name);
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextArea
            size={size}
            autoComplete="off"
            {...field}
            value={value ? value : field.value}
            placeholder={placeholder}
            allowClear
          />
        )}
      />
      {errors && <small className="text-red-500">{errorMessage}</small>}
    </>
  );
};

export default FormTextArea;
