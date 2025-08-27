// "use client";

// import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
// import { Cascader } from "antd";
// import { Controller, useFormContext } from "react-hook-form";
// import FieldRequireLabel from "../UI/FieldRequireLabel";

// type ISelectFieldProps = {
//   name: string;
//   label?: string;
//   size?: "large" | "small" | "middle";
//   value?: (string | number)[] | (string | number)[][] | undefined;
//   options?: {
//     value: string | number;
//     label: string;
//     children?: ISelectFieldProps["options"];
//   }[];
//   defaultValue?: string[] | string[][] | undefined;
//   placeholder?: string;
//   disabled?: boolean;
//   required?: boolean;
//   showSearch?: boolean;
//   allowClear?: boolean;
//   changeOnSelect?: boolean;
//   displayRender?: (label: string[]) => string;
//   multiple?: boolean;
// };

// const FromCaseCaderItem = ({
//   name,
//   label,
//   options,
//   size = "large",
//   placeholder,
//   required,
//   disabled,
//   allowClear = true,
//   showSearch = true,
//   multiple,
//   changeOnSelect,
//   displayRender,
//   defaultValue
// }: ISelectFieldProps) => {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   const errorMessage = getErrorMessageBuPropertyName(errors, name);
  
//   return (
//     <div className="w-full">
//       <FieldRequireLabel label={label} required={required} />
//       <Controller
//         control={control}
//         name={name}
//         render={({ field: { value, onChange } }) => {
//           const reversedValue = Array.isArray(value)
//             ? [...value]
//             : value;

//           return (
//             // @ts-ignore
//             <Cascader
//               autoFocus
//               style={{ width: "100%", minWidth: "100%" }}
//               size={size}
//               allowClear={allowClear}
//               showSearch={showSearch}
//               options={options}
//               onChange={(val) => {
//                 if (!val) {
//                   onChange(""); // handle clear
//                   return;
//                 }

//                 let valueStr = "";

//                 if (multiple) {
//                   // multiple selection: array of arrays
//                   valueStr = (val as unknown as (string | number)[][])
//                     .map((v) => [...v].join(",")) // reverse each path
//                     .join("; "); // separate multiple selections if needed
//                 } else {
//                   // single selection: array of strings
//                   valueStr = [...(val as (string | number)[])]
//                     .join(","); // reverse
//                 }

//                 onChange(valueStr); // store as string
//               }}
//               value={
//                 reversedValue
//                   ? multiple
//                     ? (reversedValue as string)
//                         .split("; ")
//                         .map((v) => v.split(",")) // convert string back to reversed array
//                     : (reversedValue as string).split(",")
//                   : undefined
//               }
//               placeholder={placeholder}
//               disabled={disabled}
//               {...(multiple && { multiple: true })}
//               changeOnSelect={changeOnSelect}
//               displayRender={displayRender}
//               className="!w-full"
//               defaultValue={defaultValue}
//             />
//           );
//         }}
//       />
//       <small className="text-red-500 dark:!text-amber-600">
//         {typeof errorMessage === "string"
//           ? errorMessage
//           : typeof errors[name]?.message === "string"
//           ? errors[name]?.message
//           : ""}
//       </small>
//     </div>
//   );
// };

// export default FromCaseCaderItem;


"use client";

import { Cascader } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import FieldRequireLabel from "../UI/FieldRequireLabel";

type CascaderOption = {
  value: string | number;
  label: string;
  children?: CascaderOption[];
};

type FromCascaderItemProps = {
  name: string;
  label?: string;
  size?: "large" | "small" | "middle";
  options?: CascaderOption[];
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  allowClear?: boolean;
  showSearch?: boolean;
  changeOnSelect?: boolean;
  displayRender?: (labels: string[]) => string;
  defaultValue?: string; // string from DB
  separator?: string; // string separator, default ","
};

const FromCaseCaderItem = ({
  name,
  label,
  size = "large",
  options = [],
  placeholder,
  required = false,
  disabled = false,
  allowClear = true,
  showSearch = true,
  changeOnSelect = false,
  displayRender,
  defaultValue = "",
  separator = ",",
}: FromCascaderItemProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  // Convert string to array for Cascader
  const valueToArray = (val?: string) =>
    val && val.length ? val.split(separator) : [];

  return (
    <div className="w-full">
      <FieldRequireLabel label={label} required={required} />

      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange } }) => (
          <Cascader
            style={{ width: "100%" }}
            size={size}
            options={options}
            placeholder={placeholder}
            disabled={disabled}
            allowClear={allowClear}
            showSearch={showSearch}
            changeOnSelect={changeOnSelect}
            displayRender={displayRender}
            className="!w-full"
            value={valueToArray(value)} // convert string to array
            onChange={(val) => onChange(val.join(separator))} // convert array back to string
          />
        )}
      />

      {errorMessage && (
        <small className="text-red-500 dark:!text-amber-600">
          {errorMessage}
        </small>
      )}
    </div>
  );
};

export default FromCaseCaderItem;
