"use client";
import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

interface IDatePickerProps {
  name: string;
  label?: string;
  value?: Dayjs;
  onChange?: (date: Dayjs | null, dateString: string) => void;
  size?: "large" | "small" | "middle";
  placeholder?: string;
  format?: string;
  disabled?: boolean;
}

const FormDatePicker = ({
  name,
  label = "Date of Birth",
  onChange,
  size = "large",
  placeholder = "Select your date of birth",
  format = "YYYY-MM-DD",
}: IDatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const todayMinus18Years = dayjs().subtract(18, "years").endOf("day");
  const errorMessage = getErrorMessageBuPropertyName(errors, name);

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    if (onChange) {
      onChange(date, dateString as string);
    }
  };

  return (
    <div className='w-full'>
      {label && (
        <label className='block text-sm font-medium mb-1'>{label}</label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange: fieldOnChange, value, ...field } }) => (
          <DatePicker
            {...field}
            className='w-full'
            onChange={(date, dateString) => {
              fieldOnChange(dateString as string);
              handleOnChange(date, dateString);
            }}
            value={value ? dayjs(value as string) : null}
            size={size}
            placeholder={placeholder}
            format={format}
            showToday={false}
            // 👇 Only allow dates before today - 18 years
            disabledDate={(current) => current && current > todayMinus18Years}
            // 👇 Optional: Start calendar from 18 years ago
            defaultPickerValue={todayMinus18Years}
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

export default FormDatePicker;
