"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  label?: string;
  id: string;
  size?: "large" | "small" | "middle";
  type?: string;
  value?: string | string[] | undefined;
  placeholder?: string;
  validation?: object;
}
const FormInput = ({
  name,
  type,
  size = "large",
  value,
  id,
  placeholder,
  label,
}: IInput) => {
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
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              {...field}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
            />
          ) : (
            <Input
              type={type}
              {...field}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
              autoComplete="off"
            />
          )
        }
      />
      {errors && <small className="text-red-500">{errorMessage}</small>}
    </>
  );
};

export default FormInput;
