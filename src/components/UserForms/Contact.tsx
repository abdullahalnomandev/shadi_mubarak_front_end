"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import FormTextArea from "../Forms/FormTextArea";

const Contact = () => {
  const { contact } = useGetUserFromField();

  console.log("contact", contact);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Contact</h1>
      <Row gutter={[16, 16]}>
        {contact.map(
          ({ name, type, placeholder, label}) => (
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
          )
        )}
      </Row>
    </div>
  );
};

export default Contact;
