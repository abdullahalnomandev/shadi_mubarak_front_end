"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { Slider as AntdSlider, SliderSingleProps } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { TooltipPlacement } from "antd/es/tooltip";

interface ITextArea {
  name: string;
  label?: string;
  id: string;
  value?: string | string[] | undefined;
  placeholder?: string;
  defaultValue?: number[];
  min?: number;
  max?: number;
  validation?: object;
  formatter?: string;
}

const FormSlider = ({
  name,
  id,
  defaultValue = [18, 40],
  label,
  min = 1,
  max = 100,
  formatter,
}: ITextArea) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [showTooltip, setShowTooltip] = useState(true);

  const errorMessage = getErrorMessageBuPropertyName(errors, name);

  const marks: SliderSingleProps['marks'] = {
    [min]: {
      style: {
        color: 'blue',
      },
      label: <b >{`${min}`}</b>,
    },
    [max]: {
      style: {
        color: 'blue',
      },
      label: <b>{`${max}`}</b>,
    },
  };


  useEffect(() => {
      setTimeout(() => {
        setShowTooltip(false);
      }, 3000);
  },[])

  const tooltipConfig = {
    placement: "top" as TooltipPlacement,
    color: "blue",
    formatter: (value: any) => {
        return `${value} ${formatter}`;
    },
    ...(showTooltip && { open: true })
  };

  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <AntdSlider
            {...field}
            id={id}
            range
            min={min}
            max={max}
            marks={marks}
            defaultValue={defaultValue}
            tooltip={tooltipConfig}
          />          
        )}
      />
      {errors && <small className="text-red-500">{errorMessage}</small>}
    </>
  );
};

export default FormSlider;
