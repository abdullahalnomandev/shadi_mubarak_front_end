"use client";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";
import FormSlider from "../FormSlider";
import FormTextArea from "../FormTextArea";
import { expected_partner } from "@/data/expectedPartnerField";

const ExpectedPartner = () => {
  const t = useTranslations();
  const translate = useTranslations("bio_data_form.expected_partner");
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.expected_life_partner")}
      </h1>
      <Row gutter={[16, 16]}>
        {expected_partner.map(
          ({
            name,
            type,
            placeholder,
            label,
            options,
            tipFormatter,
            min,
            max,
            mode,
            required,
          }) => (
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
                (type === "slider" && (
                  <FormSlider
                    id={name}
                    min={min}
                    max={max}
                    name={name}
                    label={translate(label)}
                    formatter={tipFormatter}
                    // defaultValue={defaultValue}
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
                )) ||
                ((type === "multiSelect" || type === "select") && (
                  <FormSelectField
                    name={name}
                    label={translate(label)}
                    placeholder={placeholder ? translate(placeholder) : ""}
                    required={required}
                    options={options?.map((opt: any) => ({
                      value: opt.value,
                      label: translate(opt.label),
                    }))}
                    mode={mode as "multiple" | "tags"}
                  />
                ))}
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default ExpectedPartner;
