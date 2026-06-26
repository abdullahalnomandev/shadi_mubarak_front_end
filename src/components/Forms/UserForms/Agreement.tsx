"use client";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import FormSelectField from "../FormSelectField";
import { agreement } from "@/data/aggrementField";

const Agreement = () => {
  const t = useTranslations();
  const translate = useTranslations("bio_data_form.agreement");

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.agreement")}
      </h1>
      <Row gutter={[16, 16]}>
        {agreement.map(({ name, type, placeholder, label, options }) => (
          <Col key={name} xs={24} sm={12}>
            {type === "select" && (
              <FormSelectField
                name={name}
                label={translate(label)}
                value={options[0].value}
                placeholder={translate(placeholder)}
                options={options.map(opt => ({
                  ...opt,
                  label: translate(opt.label)
                }))}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Agreement;
