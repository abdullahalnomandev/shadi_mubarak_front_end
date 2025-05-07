"use client";
import { Col, Row } from "antd";
import React from "react";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import FormSelectField from "../Forms/FormSelectField";

const Agreement = () => {
  const { agreement } = useGetUserFromField();

  console.log("agreement", agreement);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Agreement</h1>
      <Row gutter={[16, 16]}>
        {agreement.map(
          ({ name, type, placeholder, label,options }) => (
            <Col key={name} xs={24} sm={12}>
              {
                (type === "select" && (
                  <FormSelectField
                    name={name}
                    label={label}
                    value={options[0].value}
                    defaultValue={options[0].value}
                    placeholder={placeholder}
                    options={options}
                  />
                ))
          }
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default Agreement;
