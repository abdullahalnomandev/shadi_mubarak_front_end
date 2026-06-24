"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { Input } from "antd";
import { ReactNode } from "react";
import { Controller, useFormContext } from "react-hook-form";
import FieldRequireLabel from "../UI/FieldRequireLabel";

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
  required?: boolean;
  helperText?: string;
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
  required = false,
  className = "py-2!",
  helperText,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageBuPropertyName(errors, name);
  console.log("Type", type);
  return (
    <>
      <FieldRequireLabel label={label} required={required} />

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
                dark:bg-slate-800! 
                dark:text-white! 
                dark:placeholder-slate-500! 
                dark:border-slate-700!
                dark:focus:border-blue-900!
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
              autoComplete='off'
              className={`
                ${className}
                dark:bg-slate-800! 
                dark:text-white! 
                dark:!placeholder-slate-500! 
                dark:border-slate-700!
                dark:focus:border-blue-900!
              `}
              disabled={disabled}
            />
          )
        }
      />
      {helperText && (
        <small className='text-gray-500 dark:text-gray-400! block mt-1'>
          {helperText}
        </small>
      )}
      <small className='text-red-500 dark:text-amber-600!'>
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
