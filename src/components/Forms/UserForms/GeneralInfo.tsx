"use client";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { Col, Row } from "antd";
import { useTranslations } from "next-intl";
import FormDatePicker from "../FormDatePicker";
import FormInput from "../FormInput";
import FormSelectField from "../FormSelectField";

const GeneralInfo = () => {
  const t = useTranslations();
  const { general_information } = useGetUserFromField();
  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>
        {t("edit_biodata.general_information")}
        {/* {t("edit_biodata.personal_information")} */}
      </h1>
      <Row gutter={[16, 16]}>
        {general_information.map(
          ({ name, type, placeholder, label, options, required }) => (
            <Col key={name} xs={24} sm={12}>
              {(type === "text" && (
                <FormInput
                  name={name}
                  label={label}
                  type={type}
                  placeholder={placeholder}
                  required={required}
                />
              )) ||
                (type === "number" && (
                  <FormInput
                    name={name}
                    label={label}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                  />
                )) ||
                (type === "select" && (
                  <FormSelectField
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    options={options}
                    required={required}
                  />
                )) ||
                (type === "date" && (
                  <FormDatePicker
                    name={name}
                    label={label}
                    placeholder={placeholder}
                    required={required}
                  />
                ))}
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default GeneralInfo;
