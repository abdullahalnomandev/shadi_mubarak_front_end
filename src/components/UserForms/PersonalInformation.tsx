"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";
import FormSelectField from "../Forms/FormSelectField";
import useGetUserFromField from "@/hooks/useGetUserFromField";

const PersonalInformation = () => {
  const { personal_information } = useGetUserFromField();

  console.log("occupation", personal_information);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Personal Information</h1>
      <Row gutter={[16, 16]}>
        {personal_information.map(
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
                  />
                ))}
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default PersonalInformation;
