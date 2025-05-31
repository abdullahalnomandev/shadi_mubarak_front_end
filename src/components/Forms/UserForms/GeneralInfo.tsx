"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../FormInput";
import FormDatePicker from "../FormDatePicker";
import FormSelectField from "../FormSelectField";
import useGetUserFromField from "@/hooks/useGetUserFromField";

const GeneralInfo = () => {
  const { general_information } = useGetUserFromField();

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>General Information</h1>
      <Row gutter={[16, 16]}>
        {general_information.map(
          ({ name, type, placeholder, label, options }) => (
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
