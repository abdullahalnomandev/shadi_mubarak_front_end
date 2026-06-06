"use client";
import { useCleanHiddenFields } from "@/hooks/useCleanHiddenFields";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";

const FamilyInformation = () => {
  const t = useTranslations();
  const translate = useTranslations("bio_data_form.family_information");
  
  const { family_information } = useGetUserFromField();
  const { watch } = useFormContext();

  const isFatherAlive = watch("family_information.isParentAlive");
  const isMotherAlive = watch("family_information.isMotherAlive");
  const howManyBrothers = watch("family_information.howManyBrothers");
  const howManySisters = watch("family_information.howManySisters");

  const conditionMap = {
    "family_information.fatherProfession": isFatherAlive === "yes",
    "family_information.motherProfession": isMotherAlive === "yes",
    "family_information.brothersInformation": howManyBrothers !== "no_brothers",
    "family_information.sistersInformation": howManySisters !== "no_sisters",
  };

  useCleanHiddenFields({ conditionMap });

  const filteredFamilyInformation = family_information.filter(
    ({ name }) => conditionMap[name] !== false
  );

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.family_information")}
      </h1>
      <Row gutter={[16, 16]}>
        {filteredFamilyInformation.map(
          ({ name, type, placeholder, label, options, required }) => (
            <Col key={name} xs={24} sm={12}>
              {(type === "text" && (
                <FormInput
                  name={name}
                  label={translate(label)}
                  type={type}
                  required={required}
                  placeholder={translate(placeholder)}
                />
              )) ||
                (type === "select" && (
                  <FormSelectField
                    name={name}
                    label={translate(label)}
                    placeholder={translate(placeholder)}
                    required={required}
                    options={options}
                  />
                )) ||
                (type === "number" && (
                  <FormInput
                    name={name}
                    label={translate(label)}
                    type={type}
                    required={required}
                    placeholder={translate(placeholder)}
                  />
                )) ||
                (type === "textArea" && (
                  <FormTextArea
                    required={required}
                    id={name}
                    name={name}
                    label={translate(label)}
                    placeholder={translate(placeholder)}
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
