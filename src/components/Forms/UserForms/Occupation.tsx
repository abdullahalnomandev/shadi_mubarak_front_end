"use client";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";

const Occupation = () => {
  const t = useTranslations();
  const { occupation } = useGetUserFromField();

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.occupation")}
      </h1>
      <Row gutter={[16, 16]}>
        {occupation.map(({ name, type, placeholder, label, options, mode }) => (
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
            {(type === "multiSelect" || type === "select") && (
              <FormSelectField
                name={name}
                {...(type === "multiSelect" ? { mode: "tags" } : {})}
                label={label}
                placeholder={placeholder}
                options={options}
                mode={mode as "multiple" | "tags"}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Occupation;
