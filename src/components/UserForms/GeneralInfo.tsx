"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormDatePicker from "../Forms/FormDatePicker";
import FormSelectField from "../Forms/FormSelectField";
import useGetUserFromField from "@/hooks/useGetUserFromField";

const GeneralInfo = () => {
  const { general_information } = useGetUserFromField();

  console.log("general_information", general_information);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">General Information</h1>
      <Row gutter={[16, 16]}>
        {general_information.map(
          ({ name, type, placeholder, label, options }) => (
            <Col key={name} xs={24} sm={12}>
              {(type === "text" && (
                <FormInput
                  id={name}
                  name={name}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                />
              )) ||
                (type === "number" && (
                  <FormInput
                    id={name}
                    name={name}
                    label={label}
                    type={type}
                    placeholder={placeholder}
                  />
                )) ||
                (type === "select" && (
                  <FormSelectField
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    options={options}
                  />
                )) ||
                (type === "date" && (
                  <FormDatePicker
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                ))}
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default GeneralInfo;
