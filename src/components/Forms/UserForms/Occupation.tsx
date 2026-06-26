"use client";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormTextArea from "../FormTextArea";
import { occupation } from "@/data/occupationField";

const Occupation = () => {
  const t = useTranslations();
  const translate = useTranslations("bio_data_form.occupation");

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.occupation")}
      </h1>
      <Row gutter={[16, 16]}>
        {occupation.map(({ name, type, placeholder, label, options, required }) => (
          <Col key={name} xs={24} sm={12}>
            {(type === "text" && (
              <FormInput
                name={name}
                label={translate(label)}
                type={type}
                required={required}
                placeholder={placeholder ? translate(placeholder) : ""}
              />
            )) ||
              (type === "number" && (
                <FormInput
                  name={name}
                  label={translate(label)}
                  type={type}
                  required={required}
                  placeholder={placeholder ? translate(placeholder) : ""}
                />
              )) ||
              (type === "textArea" && (
                <FormTextArea
                  id={name}
                  name={name}
                  label={translate(label)}
                  required={required}
                  placeholder={placeholder ? translate(placeholder) : ""}
                />
              ))}
            {(type === "multiSelect" || type === "select") && (
              <FormSelectField
                name={name}
                {...(type === "multiSelect" ? { mode: "tags" } : {})}
                label={translate(label)}
                placeholder={placeholder ? translate(placeholder) : ""}
                required={required}
                options={options?.map((opt: any) => ({
                  value: opt.value,
                  label: translate(opt.label),
                }))}
                // mode={mode || "default"}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Occupation;
