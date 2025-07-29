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
  const maritalStatus = watch("general_information.maritalStatus");

  // Define field name groups by marital status
  const divorceFields = ["marriage_related_information.reasonForDivorce"];
  const secondMarriageFields = [
    "marriage_related_information.reasonForSecondMarriage",
    "marriage_related_information.currentFamilyStatus",
  ];
  const widowFields = ["marriage_related_information.widow"];
  const widowerFields = ["marriage_related_information.widower"];

  const shouldIncludeField = (field: any) => {
    const { name, isMale } = field;

    const isMaleRelevant = isMale === undefined || isMale === isMaleForm;

    // Always include regular fields that match gender and are not conditionally shown
    const isSpecialField = [
      ...divorceFields,
      ...secondMarriageFields,
      ...widowFields,
      ...widowerFields,
    ].includes(name);

    if (!isSpecialField && isMaleRelevant) {
      return true;
    }

    // Handle conditionally visible fields based on marital status
    if (
      (maritalStatus === "divorced" && divorceFields.includes(name)) ||
      (maritalStatus === "married" && secondMarriageFields.includes(name)) ||
      (maritalStatus === "widow" && widowFields.includes(name)) ||
      (maritalStatus === "widower" && widowerFields.includes(name))
    ) {
      return true;
    }

    return false;
  };

  const filteredFields = marriage_related_information
    .map((field) => ({
      ...field,
      isMale: field.isMale ?? null,
    }))
    .filter(shouldIncludeField);

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        Marriage Related Information
      </h1>
      <Row gutter={[16, 16]}>
        {filteredFields.map(({ name, type, placeholder, label, options }) => (
          <Col key={name} xs={24} sm={12}>
            {type === "text" && (
              <FormInput
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
              />
            )}
            {type === "select" && (
              <FormSelectField
                name={name}
                label={label}
                placeholder={placeholder}
                options={options}
              />
            )}
            {type === "number" && (
              <FormInput
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
              />
            )}
            {type === "textArea" && (
              <FormTextArea
                id={name}
                name={name}
                label={label}
                placeholder={placeholder}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MarriageRelatedInformation;
