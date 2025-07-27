"use client";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";

const PersonalInformation = () => {
  const { personal_information } = useGetUserFromField();
  const { watch } = useFormContext();

  const isMaleForm =
    watch("general_information.biodataType") === "male_biodata";

  // Watch needed values
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

  const filteredFields = personal_information.filter((field) => {
    const isMaleField = [
      "personal_information.beardAccordingToSunnah",
      "personal_information.clothingAboveAnkles",
    ].includes(field.name);

    const isFemaleField = [
      "personal_information.wearsNiqab",
      "personal_information.wearingNiqabSince",
    ].includes(field.name);

    // Calculate yes counts
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

    // Skip "wearingNiqabSince" if wearsNiqab is not "yes"
    if (field.name === "personal_information.wearingNiqabSince") {
      return wearsNiqabValue === "yes";
    }

    // Skip gender-specific fields
    if (isMaleForm && isFemaleField) return false;
    if (!isMaleForm && isMaleField) return false;

    // Hide advanced fields if not qualified
    if (hideAdvancedFields && advancedFieldsToHide.includes(field.name)) {
      return false;
    }

    // Hide previousRelationship if advanced fields are hidden
    if (
      field.name === "personal_information.previousRelationship" &&
      !hideAdvancedFields
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-6'>Personal Information</h1>
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
                  placeholder={placeholder}
                />
              )}
              {type === "number" && (
                <FormInput
                  id={name}
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
