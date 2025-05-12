"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";
import FormSelectField from "../Forms/FormSelectField";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import FormSlider from "../Forms/FormSlider";

const ExpectedPartner = () => {
  const { expected_partner } = useGetUserFromField();

  console.log("expected_partner", expected_partner);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Expected Partner </h1>
      <Row gutter={[16, 16]}>
        {expected_partner.map(
          ({
            name,
            type,
            placeholder,
            label,
            options,
            tipFormatter,
            min,
            max,
            defaultValue,
            mode,
          }) => (
            <Col key={name} xs={24} sm={12}>
              {(type === "text" && (
                <FormInput
                  name={name}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                />
              )) ||
                (type === "number" && (
                  <FormInput
                    name={name}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                  />
                )) ||
                (type === "slider" && (
                  <FormSlider
                    id={name}
                    min={min}
                    max={max}
                    name={name}
                    label={label}
                    formatter={tipFormatter}
                    defaultValue={defaultValue}
                  />
                )) ||
                (type === "textArea" && (
                  <FormTextArea
                    id={name}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                )) ||
                ((type === "multiSelect" || type === "select") && (
                  <FormSelectField
                    name={name}
                    {...(type === "multiSelect" ? { mode: "tags" } : {})}
                    label={label}
                    placeholder={placeholder}
                    options={options}
                    mode={mode as "multiple" | "tags"}
                  />
                ))}
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default ExpectedPartner;
