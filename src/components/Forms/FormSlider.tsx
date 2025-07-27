"use client";

import { Slider, SliderSingleProps } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IFormSliderProps {
  name: string;
  id: string;
  label?: string;
  min?: number;
  max?: number;
  formatter?: string;
  defaultValue?: [number, number];
}

const FormSlider = ({
  name,
  id,
  label,
  min = 1,
  max = 100,
  formatter,
  defaultValue = [20, 30],
}: IFormSliderProps) => {
  const { control } = useFormContext();

  const parseStoredValue = (val: unknown): [number, number] => {
    if (typeof val === "string" && val.includes("-")) {
      const parts = val.split("-").map(Number);
      if (parts.length === 2 && parts.every((n) => !isNaN(n))) {
        return [parts[0], parts[1]];
      }
    }
    return defaultValue;
  };

  const [tooltipVisible, setTooltipVisible] = useState(false);

  const marks: SliderSingleProps["marks"] = {
    [min]: {
      style: { color: "#2563EB", fontWeight: "600" },
      label: <b>{min}</b>,
    },
    [max]: {
      style: { color: "#2563EB", fontWeight: "600" },
      label: <b>{max}</b>,
    },
  };

  const tooltipPlacement: TooltipPlacement = "top";

  return (
    <div className='space-y-2'>
      {label && (
        <label
          htmlFor={id}
          className='block font-semibold text-gray-700 text-sm'>
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue.join("-")}
        render={({ field }) => {
          const currentRange = parseStoredValue(field.value);

          return (
            <>
              <Slider
                id={id}
                range
                min={min}
                max={max}
                marks={marks}
                value={currentRange}
                tooltip={{
                  open: tooltipVisible,
                  placement: tooltipPlacement,
                  formatter: (val: number) =>
                    `${val}${formatter ? ` ${formatter}` : ""}`,
                  color: "#3B82F6",
                }}
                trackStyle={[{ backgroundColor: "#3B82F6" }]}
                handleStyle={[
                  { borderColor: "#3B82F6", backgroundColor: "#3B82F6" },
                  { borderColor: "#3B82F6", backgroundColor: "#3B82F6" },
                ]}
                onChange={(val) => {
                  if (Array.isArray(val)) {
                    field.onChange(val.join("-"));
                  }
                }}
                onBeforeChange={() => setTooltipVisible(true)}
                onChangeComplete={() => setTooltipVisible(false)}
                onBlur={field.onBlur}
                ref={field.ref}
              />

              <div className='text-center -mt-4 text-xs font-medium text-gray-600 select-none'>
                Selected : {currentRange[0]}
                {formatter ? ` ${formatter}` : ""} — {currentRange[1]}
                {formatter ? ` ${formatter}` : ""}
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default FormSlider;
