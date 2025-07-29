// "use client";
// import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
// import { DatePicker, DatePickerProps } from "antd";
// import dayjs, { Dayjs } from "dayjs";
// import { Controller, useFormContext } from "react-hook-form";

// interface IDatePickerProps {
//   name: string;
//   label?: string;
//   value?: Dayjs;
//   onChange?: (date: Dayjs | null, dateString: string) => void;
//   size?: "large" | "small" | "middle";
//   placeholder?: string;
//   format?: string;
//   disabled?: boolean;
// }

// const FormDatePicker = ({
//   name,
//   label = "Date of Birth",
//   onChange,
//   size = "large",
//   placeholder = "Select your date of birth",
//   format = "YYYY-MM-DD",
// }: IDatePickerProps) => {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   const todayMinus18Years = dayjs().subtract(18, "years").endOf("day");
//   const errorMessage = getErrorMessageBuPropertyName(errors, name);

//   const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
//     if (onChange) {
//       onChange(date, dateString as string);
//     }
//   };

//   return (
//     <div className='w-full'>
//       {label && (
//         <label className='block text-sm font-medium mb-1'>{label}</label>
//       )}
//       <Controller
//         control={control}
//         name={name}
//         render={({ field: { onChange: fieldOnChange, value, ...field } }) => (
//           <DatePicker
//             {...field}
//             className='w-full'
//             onChange={(date, dateString) => {
//               fieldOnChange(dateString as string);
//               handleOnChange(date, dateString);
//             }}
//             value={value ? dayjs(value as string) : null}
//             size={size}
//             placeholder={placeholder}
//             format={format}
//             showToday={false}
//             // 👇 Only allow dates before today - 18 years
//             disabledDate={(current) => current && current > todayMinus18Years}
//             // 👇 Optional: Start calendar from 18 years ago
//             defaultPickerValue={todayMinus18Years}
//           />
//         )}
//       />
//       <small className='text-red-500 dark:!text-amber-600'>
//         {typeof errorMessage === "string"
//           ? errorMessage
//           : typeof errors[name]?.message === "string"
//           ? errors[name]?.message
//           : ""}
//       </small>
//     </div>
//   );
// };

// export default FormDatePicker;
"use client";
import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { Select } from "antd";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

interface IDatePickerProps {
  name: string;
  label?: string;
  size?: "large" | "small" | "middle";
  disabled?: boolean;
}

const generateDays = (year: number, month: number) => {
  const daysInMonth = dayjs(`${year}-${month}-01`).daysInMonth();
  return Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

const generateYears = (startYear: number, endYear: number) =>
  Array.from({ length: endYear - startYear + 1 }, (_, i) => endYear - i);

const FormDatePicker = ({
  name,
  label = "Date of Birth",
  size = "large",
  disabled = false,
}: IDatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageBuPropertyName(errors, name);
  const currentYear = dayjs().year();
  const minYear = currentYear - 45;
  const maxYear = currentYear - 17;

  return (
    <div className='w-full'>
      {label && (
        <label className='block text-sm font-medium mb-1'>{label}</label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => {
          const parsedDate = value ? dayjs(value) : null;

          const selectedYear = parsedDate?.year() || maxYear;
          const selectedMonth = parsedDate?.month() + 1 || 1;
          const selectedDay = parsedDate?.date() || 1;

          const handleChange = (
            part: "day" | "month" | "year",
            val: number
          ) => {
            const dateObj = {
              day: selectedDay,
              month: selectedMonth,
              year: selectedYear,
              [part]: val,
            };
            const newDate = dayjs(
              `${dateObj.year}-${dateObj.month}-${dateObj.day}`
            );
            onChange(newDate.format("YYYY-MM-DD"));
          };

          return (
            <div className='flex gap-2'>
              {/* Day */}
              <Select
                className='w-full'
                size={size}
                disabled={disabled}
                value={selectedDay}
                onChange={(val) => handleChange("day", val)}>
                {generateDays(selectedYear, selectedMonth).map((d) => (
                  <Select.Option key={d} value={d}>
                    {d}
                  </Select.Option>
                ))}
              </Select>

              {/* Month */}
              <Select
                className='w-full'
                size={size}
                disabled={disabled}
                value={selectedMonth}
                onChange={(val) => handleChange("month", val)}>
                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                  <Select.Option key={m} value={m}>
                    {dayjs()
                      .month(m - 1)
                      .format("MMMM")}
                  </Select.Option>
                ))}
              </Select>

              {/* Year */}
              <Select
                className='w-full'
                size={size}
                disabled={disabled}
                value={selectedYear}
                onChange={(val) => handleChange("year", val)}>
                {generateYears(minYear, maxYear).map((y) => (
                  <Select.Option key={y} value={y}>
                    {y}
                  </Select.Option>
                ))}
              </Select>
            </div>
          );
        }}
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
