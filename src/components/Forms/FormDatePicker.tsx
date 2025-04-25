"use client";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker, DatePickerProps } from "antd";
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
  label,
  onChange,
  size = "large",
  placeholder,
  format = "YYYY-MM-DD",
}: IDatePickerProps) => {
  const { control } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    if (onChange) {
      onChange(date, dateString as string);
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-1">{label}</label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange: fieldOnChange, value, ...field } }) => (
          <DatePicker
            {...field}
            className="w-full"
            onChange={(date, dateString) => {
              fieldOnChange(dateString as string);
              handleOnChange(date, dateString);
            }}
            value={value ? dayjs(value as string) : null}
            size={size}
            placeholder={placeholder}
            format={format}
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;
