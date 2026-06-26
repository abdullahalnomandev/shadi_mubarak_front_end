"use client";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";
import { marriage_related_information } from "@/data/marriageRelatedInformation";
import { useCleanHiddenFields } from "@/hooks/useCleanHiddenFields";

const MarriageRelatedInformation = () => {
  const t = useTranslations();
  const translate = useTranslations("bio_data_form.marriage_related_information");
  const { watch } = useFormContext();
  const isMaleForm =
    watch("general_information.biodataType") === "male's_biodata";
  const maritalStatus = watch("general_information.maritalStatus");

  // Define field name groups by marital status
  const divorceFields = ["marriage_related_information.reasonForDivorce"];
  const secondMarriageFields = [
    "marriage_related_information.reasonForSecondMarriage",
    "marriage_related_information.currentFamilyStatus",
  ];
  const widowFields = ["marriage_related_information.widow"];
  const widowerFields = ["marriage_related_information.widower"];
  const commonFields = [
    "marriage_related_information.reasonForMarriage",
    "marriage_related_information.doParentsAgree",
  ];

  const shouldIncludeField = (field: any) => {
    const { name, isMale } = field;

    const isMaleRelevant = isMale === undefined || isMale === isMaleForm;

    // Always include common fields regardless of marital status
    if (commonFields.includes(name)) {
      return true;
    }

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

  // Build condition map for cleaning hidden fields
  const conditionMap: Record<string, boolean> = {};
  marriage_related_information.forEach(field => {
    conditionMap[field.name] = shouldIncludeField(field);
  });

  useCleanHiddenFields({ conditionMap });

  const filteredFields = marriage_related_information
    .map((field) => ({
      ...field,
      isMale: field.isMale ?? null,
    }))
    .filter(shouldIncludeField);
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.marriage_related_information")}
      </h1>
      <Row gutter={[16, 16]}>
        {filteredFields.map(({ name, type, placeholder, label, options, required, helperText }) => (
          <Col key={name} xs={24} sm={12}>
            {type === "text" && (
              <FormInput
                name={name}
                label={translate(label)}
                type={type}
                required={required}
                placeholder={placeholder ? translate(placeholder) : ""}
                helperText={helperText ? translate(helperText) : undefined}
              />
            )}
            {type === "select" && (
              <FormSelectField
                name={name}
                label={translate(label)}
                placeholder={placeholder ? translate(placeholder) : ""}
                required={required}
                options={options?.map((opt: any) => ({
                  value: opt.value,
                  label: translate(opt.label),
                }))}
              />
            )}
            {type === "number" && (
              <FormInput
                name={name}
                label={translate(label)}
                type={type}
                required={required}
                placeholder={placeholder ? translate(placeholder) : ""}
              />
            )}
            {type === "textArea" && (
              <FormTextArea
                id={name}
                name={name}
                label={translate(label)}
                required={required}
                placeholder={placeholder ? translate(placeholder) : ""}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MarriageRelatedInformation;
