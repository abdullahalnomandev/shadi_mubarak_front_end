"use client";
import { Col, Row } from "antd";
import React from "react";
import FormInput from "../Forms/FormInput";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import FormTextArea from "../Forms/FormTextArea";
import FormSelectField from "../Forms/FormSelectField";
import { useFormContext } from "react-hook-form";

const FamilyInformation = () => {
  const { family_information } = useGetUserFromField();
  const { watch } = useFormContext();

  const isFatherAlive = watch("family_information.isParentAlive");
  const isMotherAlive = watch("family_information.isMotherAlive");
  const howManyBrothers = watch("family_information.howManyBrothers");
  const howManySisters = watch("family_information.howManySisters");

  console.log("occupation", family_information);

  const filteredFamilyInformation = family_information.filter(({name}) => {
        if(name === "family_information.fatherProfession" && isFatherAlive === "no") return false;
        if(name === "family_information.motherProfession" && isMotherAlive === "no") return false;
        if(name === "family_information.brothersInformation" && Number(howManyBrothers) === 0) return false;
        if(name === "family_information.sistersInformation" && Number(howManySisters) === 0) return false;
        return true
  });
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Family Information</h1>
      <Row gutter={[16, 16]}>
        {filteredFamilyInformation.map( ({ name, type, placeholder, label , options }) => (
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

export default FamilyInformation;
