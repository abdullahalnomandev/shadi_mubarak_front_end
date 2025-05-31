"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../FormInput";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import FormTextArea from "../FormTextArea";

const Contact = () => {
  const { contact } = useGetUserFromField();

  console.log("contact", contact);
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>Contact</h1>
      <Row gutter={[16, 16]}>
        {contact.map(({ name, type, placeholder, label }) => (
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

export default Contact;
