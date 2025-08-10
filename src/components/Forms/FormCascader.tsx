"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { Cascader } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import FieldRequireLabel from "../UI/FieldRequireLabel";

type IFormCascaderProps = {
  name: string;
  label?: string;
  size?: "large" | "small" | "middle";
  options?: any[];
  defaultValue?: any;
  value?: string;
  placeholder?: string;
  required?: boolean;
  showSearch?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
  allowClear?: boolean;
  standalone?: boolean;
};

const FormCascader = ({
  name,
  label,
  options = [],
  defaultValue,
  value,
  size = "large",
  placeholder,
  required,
  showSearch = false,
  disabled = false,
  onChange: customOnChange,
  allowClear = true,
  standalone = false,
}: IFormCascaderProps) => {
  // Try to get form context, but don't fail if it doesn't exist
  let control, errors;
  try {
    const formContext = useFormContext();
    control = formContext?.control;
    errors = formContext?.formState?.errors;
  } catch {
    // No form context available, use standalone mode
    control = null;
    errors = {};
  }

  const errorMessage = control
    ? getErrorMessageBuPropertyName(errors, name)
    : null;

  // Helper function to check if text contains Bangla characters
  const isBanglaText = (text: string): boolean => {
    const banglaRegex = /[\u0980-\u09FF]/;
    return banglaRegex.test(text);
  };

  // Helper function to format English text only
  const formatEnglishText = (text: string): string => {
    const [first, second] = text.split("_");
    const formattedFirst =
      first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
    const formattedSecond = second?.toLowerCase() || "";
    return `${formattedFirst} ${formattedSecond}`.trim();
  };

  // Helper function to get labels from selected values
  const getLabelsFromValues = (values: string[], options: any[]): string[] => {
    if (!values || values.length === 0) return [];

    let currentOptions = options;
    const labels = [];

    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      const option = currentOptions.find((opt) => opt.value === value);

      if (option) {
        labels.push(option.label);
        currentOptions = option.children || [];
      } else {
        labels.push(value); // fallback to value if label not found
      }
    }

    return labels;
  };

  // Common cascader logic
  const handleCascaderChange = (
    val: any,
    selectedOptions?: any[],
    onChange?: (value: string) => void
  ) => {
    if (!val || val.length === 0) {
      if (onChange) onChange("");
      if (customOnChange) customOnChange("");
      return;
    }

    let stringValue = "";

    // Try to get labels from selectedOptions first (most reliable)
    if (selectedOptions && selectedOptions.length > 0) {
      const labels = selectedOptions.map((option) => option.label);
      // Remove "all" equivalent labels if there are other values
      if (labels.length > 1) {
        const filteredLabels = labels.filter((label) => {
          // Check if it's an "all" type label (you might need to adjust this logic)
          return (
            !label.toLowerCase().includes("all") &&
            !label.includes("সব") &&
            !label.includes("সমগ্র")
          );
        });
        stringValue =
          filteredLabels.length > 0
            ? filteredLabels.join(", ")
            : labels.join(", ");
      } else {
        stringValue = labels.join(", ");
      }
    } else {
      // Fallback: get labels from values using options
      const labels = getLabelsFromValues(val, options);
      // Remove "all" equivalent labels if there are other values
      if (labels.length > 1) {
        const filteredLabels = labels.filter((label) => {
          return (
            !label.toLowerCase().includes("all") &&
            !label.includes("সব") &&
            !label.includes("সমগ্র")
          );
        });
        stringValue =
          filteredLabels.length > 0
            ? filteredLabels.join(", ")
            : labels.join(", ");
      } else {
        stringValue = labels.join(", ");
      }
    }

    console.log({ stringValue });
    if (onChange) onChange(stringValue);
    if (customOnChange) customOnChange(stringValue);
  };

  const commonCascaderProps = {
    options,
    style: { width: "100%" },
    placeholder,
    showSearch,
    size,
    disabled,
    allowClear,
    displayRender: (labels: string[], selectedOptions: any[]) => {
      if (labels.length === 0) return "";

      // Get the actual label from the selected options
      // This ensures we get the translated label, not the value
      if (selectedOptions && selectedOptions.length > 0) {
        const lastOption = selectedOptions[selectedOptions.length - 1];
        if (lastOption && lastOption.label) {
          return lastOption.label;
        }
      }

      // Fallback to the labels array
      const lastLabel = labels[labels.length - 1];

      // If the text contains Bangla characters, return it as-is
      if (isBanglaText(lastLabel)) {
        return lastLabel;
      }

      // For English text, apply the formatting
      return formatEnglishText(lastLabel);
    },
  };

  // Standalone usage (without form context)
  if (standalone || !control) {
    return (
      <div className='w-full'>
        <FieldRequireLabel label={label} required={required} />
        <Cascader
          {...commonCascaderProps}
          value={value ? value.split(", ") : undefined}
          onChange={(val, selectedOptions) =>
            handleCascaderChange(val, selectedOptions, customOnChange)
          }
          className='!w-full'
        />
      </div>
    );
  }

  // Form usage (with form context)
  return (
    <div className='w-full'>
      <FieldRequireLabel label={label} required={required} />
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value: fieldValue } }) => {
          return (
            <Cascader
              {...commonCascaderProps}
              value={fieldValue ? fieldValue.split(", ") : undefined}
              onChange={(val, selectedOptions) =>
                handleCascaderChange(val, selectedOptions, onChange)
              }
              className='!w-full'
            />
          );
        }}
      />
      {errorMessage && (
        <small className='text-red-500 dark:!text-amber-600'>
          {errorMessage}
        </small>
      )}
    </div>
  );
};

export default FormCascader;
