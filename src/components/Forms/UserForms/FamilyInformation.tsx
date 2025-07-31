"use client";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";

const FamilyInformation = () => {
  const { family_information } = useGetUserFromField();
  const { watch } = useFormContext();

  const isFatherAlive = watch("family_information.isParentAlive");
  const isMotherAlive = watch("family_information.isMotherAlive");
  const howManyBrothers = watch("family_information.howManyBrothers");
  const howManySisters = watch("family_information.howManySisters");

  console.log("occupation", family_information);

  const filteredFamilyInformation = family_information.filter(({ name }) => {
    if (
      name === "family_information.fatherProfession" &&
      isFatherAlive === "no"
    )
      return false;
    if (
      name === "family_information.motherProfession" &&
      isMotherAlive === "no"
    )
      return false;
    if (
      name === "family_information.brothersInformation" &&
      Number(howManyBrothers) === 0
    )
      return false;
    if (
      name === "family_information.sistersInformation" &&
      Number(howManySisters) === 0
    )
      return false;
    return true;
  });
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>Family Information</h1>
      <Row gutter={[16, 16]}>
        {filteredFamilyInformation.map(
          ({ name, type, placeholder, label, options, required }) => (
            <Col key={name} xs={24} sm={12}>
              {(type === "text" && (
                <FormInput
                  name={name}
                  label={label}
                  type={type}
                  required={required}
                  placeholder={placeholder}
                />
              )) ||
                (type === "select" && (
                  <FormSelectField
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    required={required}
                    options={options}
                  />
                )) ||
                (type === "number" && (
                  <FormInput
                    name={name}
                    label={label}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                  />
                )) ||
                (type === "textArea" && (
                  <FormTextArea
                    required={required}
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
