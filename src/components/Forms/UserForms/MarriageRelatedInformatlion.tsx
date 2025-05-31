"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../FormInput";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import FormTextArea from "../FormTextArea";
import FormSelectField from "../FormSelectField";

const MarriageRelatedInformation = () => {
  const { marriage_related_information } = useGetUserFromField();

  console.log("marriageRelatedInformation", marriage_related_information);

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        {" "}
        Marriage Related Information{" "}
      </h1>
      <Row gutter={[16, 16]}>
        {marriage_related_information.map(
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

export default MarriageRelatedInformation;
