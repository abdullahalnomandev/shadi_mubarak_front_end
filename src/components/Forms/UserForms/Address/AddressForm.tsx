"use client";

import { getLocationData } from "@/data/locationData";
import { useCleanHiddenFields } from "@/hooks/useCleanHiddenFields";
import { Checkbox, Col, Row } from "antd";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import FormInput from "../../FormInput";
import FromCaseCaderItem from "../../FormCascaderItem";

const AddressForm = () => {
  const t = useTranslations();
  const { watch, setValue } = useFormContext();

  const [sameAsPresent, setSameAsPresent] = useState(false);

  const presentFull = watch("address.present_address.full");
  const presentArea = watch("address.present_address.area");

  // Reset permanent address fields when hidden
  useCleanHiddenFields({
    conditionMap: {
      "address.permanent_address.full": !sameAsPresent,
      "address.permanent_address.area": !sameAsPresent,
    },
  });

  useEffect(() => {
    if (sameAsPresent) {
      setValue("address.permanent_address.full", presentFull || "");
      setValue("address.permanent_address.area", presentArea || "");
    }
  }, [sameAsPresent, presentFull, presentArea, setValue]);

  const addressFields = [
    {
      name: "address.present_address.full",
      label: "Present Address",
      type: "select",
      placeholder: "Enter full present address",
      options: getLocationData(t).filteredLocationData,
      required: true,
    },
    {
      name: "address.present_address.area",
      label: "Area",
      type: "text",
      placeholder: "Enter area",
      required: false,
    },
    {
      name: "address.permanent_address.full",
      label: "Permanent Address",
      type: "select",
      placeholder: "Enter full permanent address",
      options: getLocationData(t).filteredLocationData,
      required: true,
    },
    {
      name: "address.permanent_address.area",
      label: "Area",
      type: "text",
      placeholder: "Enter area",
      required: false,
    },
    {
      name: "address.grow_up",
      label: "Grow Up",
      type: "text",
      placeholder: "Where did you grow up?",
      required: true,
    },
  ];
  const renderField = (field: (typeof addressFields)[number]) => {
    const { name, label, type, placeholder, options, required } = field;

    if (type === "select") {
      return (
        <Col xs={24} sm={12} key={name}>
          <label className="block mb-1 font-semibold">{label}</label>
          <FromCaseCaderItem
            name={name}
            options={options}
            placeholder={placeholder}
            required={required}
            showSearch
            size="large"
            displayRender={(label: string[]) => {
              // return label[label.length-1];
              return label.join(", ");
            }}
          />
          {/* <FormCascader
            name={name}
            options={options}
            placeholder={placeholder}
            required={required}
            showSearch
            size='large'
            className='form-field'
          /> */}
        </Col>
      );
    }

    return (
      <Col xs={24} sm={12} key={name}>
        <FormInput
          name={name}
          label={label}
          placeholder={placeholder}
          type="text"
          required={required}
        />
      </Col>
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">
        {t("edit_biodata.address")}
      </h1>
      <Row gutter={[16, 16]}>
        {/* Present address fields */}
        {addressFields
          .filter((field) => field.name.includes("present_address"))
          .map(renderField)}

        {/* Checkbox for permanent = present */}
        <Col span={24}>
          <Checkbox
            checked={sameAsPresent}
            onChange={(e) => setSameAsPresent(e.target.checked)}
          >
            Permanent address same as present
          </Checkbox>
        </Col>

        {/* Permanent address fields (conditionally shown) */}
        {!sameAsPresent &&
          addressFields
            .filter((field) => field.name.includes("permanent_address"))
            .map(renderField)}

        {/* Grow Up field */}
        {renderField(addressFields.find((f) => f.name === "address.grow_up")!)}
      </Row>
    </div>
  );
};

export default AddressForm;
