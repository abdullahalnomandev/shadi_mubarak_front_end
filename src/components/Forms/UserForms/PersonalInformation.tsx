"use client";

import { useCleanHiddenFields } from "@/hooks/useCleanHiddenFields"; // <-- Make sure this exists
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";

const PersonalInformation = () => {
  const t = useTranslations();
  const { personal_information } = useGetUserFromField();
  const { watch } = useFormContext();

  const isMaleForm =
    watch("general_information.biodataType") === "male_biodata";

  const wearsNiqabValue = watch("personal_information.wearsNiqab");
  const dailyPrayerRoutine = watch("personal_information.dailyPrayerRoutine");
  const beardAccordingToSunnah = watch(
    "personal_information.beardAccordingToSunnah"
  );
  const clothingAboveAnkles = watch("personal_information.clothingAboveAnkles");

  const advancedFieldsToHide = [
    "personal_information.skippedPrayersPerWeek",
    "personal_information.followsMahramGuidelines",
    "personal_information.fiqhFollowed",
    "personal_information.involvedInSpecialWork",
    "personal_information.beliefsAboutShrine",
    "personal_information.islamicScholarsPreferred",
  ];

  // Construct conditionMap for field visibility
  const conditionMap: Record<string, boolean> = {};

  personal_information.forEach((field) => {
    const fieldName = field.name;

    const isMaleField = [
      "personal_information.beardAccordingToSunnah",
      "personal_information.clothingAboveAnkles",
    ].includes(fieldName);

    const isFemaleField = [
      "personal_information.wearsNiqab",
      "personal_information.wearingNiqabSince",
    ].includes(fieldName);

    const maleYesCount = [
      beardAccordingToSunnah,
      clothingAboveAnkles,
      dailyPrayerRoutine,
    ].filter((v) => v === "yes").length;

    const femaleYesCount = [wearsNiqabValue, dailyPrayerRoutine].filter(
      (v) => v === "yes"
    ).length;

    const hideAdvancedFields =
      (isMaleForm && maleYesCount < 2) || (!isMaleForm && femaleYesCount < 2);

    if (fieldName === "personal_information.wearingNiqabSince") {
      conditionMap[fieldName] = wearsNiqabValue === "yes";
      return;
    }

    if (isMaleForm && isFemaleField) {
      conditionMap[fieldName] = false;
      return;
    }

    if (!isMaleForm && isMaleField) {
      conditionMap[fieldName] = false;
      return;
    }

    if (hideAdvancedFields && advancedFieldsToHide.includes(fieldName)) {
      conditionMap[fieldName] = false;
      return;
    }

    if (
      fieldName === "personal_information.previousRelationship" &&
      !hideAdvancedFields
    ) {
      conditionMap[fieldName] = false;
      return;
    }

    conditionMap[fieldName] = true;
  });

  // Auto-clean hidden fields from form state
  useCleanHiddenFields({ conditionMap });

  // Filter only visible fields for rendering
  const filteredFields = personal_information.filter(
    (field) => conditionMap[field.name]
  );

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.personal_information")}
      </h1>
      <Row gutter={[16, 16]}>
        {filteredFields.map(
          ({ name, type, placeholder, label, options, required }) => (
            <Col key={name} xs={24} sm={12}>
              {type === "text" && (
                <FormInput
                  id={name}
                  name={name}
                  label={label}
                  type={type}
                  required={required}
                  placeholder={placeholder}
                />
              )}
              {type === "number" && (
                <FormInput
                  id={name}
                  name={name}
                  label={label}
                  type={type}
                  required={required}
                  placeholder={placeholder}
                />
              )}
              {type === "textArea" && (
                <FormTextArea
                  id={name}
                  name={name}
                  label={label}
                  required={required}
                  placeholder={placeholder}
                />
              )}
              {type === "multiSelect" && (
                <FormSelectField
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  required={required}
                  options={options}
                  mode='tags'
                />
              )}
              {type === "select" && (
                <FormSelectField
                  name={name}
                  label={label}
                  placeholder={placeholder}
                  required={required}
                  options={options}
                />
              )}
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default PersonalInformation;
