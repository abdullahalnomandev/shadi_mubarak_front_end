"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../FormInput";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import FormTextArea from "../FormTextArea";

const Occupation = () => {
  const { occupation } = useGetUserFromField();

  console.log("occupation", occupation);
  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-6'>Occupation</h1>
      <Row gutter={[16, 16]}>
        {occupation.map(({ name, type, placeholder, label }) => (
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
              ))}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Occupation;
