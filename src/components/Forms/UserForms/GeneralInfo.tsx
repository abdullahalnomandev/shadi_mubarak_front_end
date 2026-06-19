"use client";

import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import FormDatePicker from "../FormDatePicker";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import { general_information } from "@/data/generationInformaitonField";

const GeneralInfo = () => {
  const t = useTranslations();

  const translation = useTranslations("bio_data_form.general_information");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        {t("edit_biodata.general_information")}
      </h1>
      <Row gutter={[16, 16]}>
        {general_information.map(
          ({ name, type, placeholder, label, options, required }) => (
            <Col key={name} xs={24} sm={12}>
              {type === "text" || type === "number" ? (
                <FormInput
                  name={name}
                  label={translation(label)}
                  type={type}
                  placeholder={translation(placeholder)}
                  required={required}
                />
              ) : type === "select" ? (
                <FormSelectField
                  name={name}
                  label={translation(label)}
                  placeholder={translation(placeholder)}
                  options={options?.map((opt) => ({
                    value: opt.value,
                    label: translation(opt.label),
                  }))}
                  required={required}
                />
              ) : type === "date" ? (
                <FormDatePicker
                  name={name}
                  label={translation(label)}
                />
              ) : null}
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default GeneralInfo;