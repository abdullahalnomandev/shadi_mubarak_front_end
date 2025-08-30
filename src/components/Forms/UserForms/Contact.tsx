"use client";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import { useFormContext } from "react-hook-form";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";

const Contact = () => {
  const t = useTranslations();
  const { watch } = useFormContext();
  const isMaleForm =
    watch("general_information.biodataType") === "male_biodata";
  const { contact } = useGetUserFromField();

  const filteredContact = contact.filter((field) => {
    if (field.isMale && !isMaleForm) return false;
    if (field.isFemale && isMaleForm) return false;
    return true;
  });

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.contact")}
      </h1>
      <Row gutter={[16, 16]}>
        {filteredContact.map(({ name, type, placeholder, label }) => (
          <Col key={name} xs={24} sm={12}>
            {type === "text" && (
              <FormInput
                name={name}
                label={label}
                type={type}
                placeholder={placeholder}
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

export default Contact;
