"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import FormTextArea from "../Forms/FormTextArea";
import FormSelectField from "../Forms/FormSelectField";

const Education = () => {
  const { educationalQualifications } = useGetUserFromField();

  console.log("educationalQualifications", educationalQualifications);


  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6"> Educational Qualifications</h1>
      <Row gutter={[16, 16]}>
        {educationalQualifications.map( ({ name, type, placeholder, label , options }) => (
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
              (type === "select" && (
                <FormSelectField
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  options={options}
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
                ))}
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default Education;
