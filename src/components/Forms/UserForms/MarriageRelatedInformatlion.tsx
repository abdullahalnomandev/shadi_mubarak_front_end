"use client";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";

const MarriageRelatedInformation = () => {
  const { marriage_related_information } = useGetUserFromField();
  const { watch } = useFormContext();

  const isMaleForm =
    watch("general_information.biodataType") === "male_biodata";

  const filterMarriageRelatedInformation = marriage_related_information
    .map((field) => ({
      ...field,
      isMale: field.isMale !== undefined ? field.isMale : null,
    }))
    .filter((field) => field.isMale === null || field.isMale === isMaleForm);

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        {" "}
        Marriage Related Information{" "}
      </h1>
      <Row gutter={[16, 16]}>
        {filterMarriageRelatedInformation?.map(
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
