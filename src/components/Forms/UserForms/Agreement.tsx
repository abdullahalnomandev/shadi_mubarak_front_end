"use client";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import FormSelectField from "../FormSelectField";

const Agreement = () => {
  const t = useTranslations();
  const { agreement } = useGetUserFromField();
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
                label={label}
                value={options[0].value}
                placeholder={placeholder}
                options={options}
              />
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Agreement;
