"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  label?: string;
  size?: "large" | "small" | "middle";
  type?: string;
  value?: string | string[] | undefined;
  placeholder?: string;
  validation?: object;
  disabled?: boolean;
  prefixSelector?: ReactNode;
  className?: string;
}
const FormInput = ({
  name,
  type,
  size = "large",
  value,
  placeholder,
  label,
  prefixSelector,
  disabled = false,
  className = "!py-2",
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageBuPropertyName(errors, name);
  return (
    <>
      {label && <p className="text-gray-900 mb-0.5">{label}</p>}
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
              className={className}
            />
          ) : (
            <Input
              type={type}
              {...field}
              size={size}
              placeholder={placeholder}
              value={value ? value : field.value}
              addonBefore={prefixSelector ?? null}
              autoComplete="off"
              className={className}
              disabled={disabled}
            />
          )
        }
      />
      {errors && <small className="text-red-500">{errorMessage}</small>}
    </>
  );
};

export default FormInput;
