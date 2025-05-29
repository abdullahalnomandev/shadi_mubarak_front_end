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
      {label && (
        <p className="text-gray-900 dark:text-slate-200 mb-0.5">{label}</p>
      )}
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
              className={`
                ${className}
                dark:!bg-slate-800 
                dark:!text-white 
                dark:!placeholder-slate-500 
                dark:!border-slate-700
                dark:focus:!border-blue-500 
                dark:!focus:border-blue-900
              `}
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
              className={`
                ${className}
                dark:!bg-slate-800 
                dark:!text-white 
                dark:!placeholder-slate-500 
                dark:!border-slate-700
                dark:focus:!border-blue-500 
                dark:!focus:border-blue-900
              `}
              disabled={disabled}
            />
          )
        }
      />
      <small className="text-red-500 dark:!text-amber-600">
        {typeof errorMessage === "string"
          ? errorMessage
          : typeof errors[name]?.message === "string"
          ? errors[name]?.message
          : ""}
      </small>
    </>
  );
};

export default FormInput;
