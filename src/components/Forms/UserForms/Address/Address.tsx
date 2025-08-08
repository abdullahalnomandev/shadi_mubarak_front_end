"use client";

import { getErrorMessageBuPropertyName } from "@/utils/schema-validator";
import { Checkbox, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import FormInput from "../../FormInput";
import CascadingSelect from "./CascadingSelect";

const addressFields = [
  {
    name: "address.present_address.full",
    label: "Present Address",
    type: "select",
    placeholder: "Enter full present address",
    required: true,
  },
  {
    name: "address.present_address.area",
    label: "Area",
    type: "text",
    placeholder: "Enter area",
    required: true,
  },
  {
    name: "address.permanent_address.full",
    label: "Permanent Address",
    type: "select",
    placeholder: "Enter full permanent address",
    required: true,
  },
  {
    name: "address.permanent_address.area",
    label: "Area",
    type: "text",
    placeholder: "Enter area",
    required: true,
  },
  {
    name: "address.grow_up",
    label: "Grow Up",
    type: "text",
    placeholder: "Where did you grow up?",
    required: true,
  },
];

const Address = () => {
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [sameAsPresent, setSameAsPresent] = useState(false);

  const presentFull = watch("address.present_address.full");
  const presentArea = watch("address.present_address.area");

  useEffect(() => {
    if (sameAsPresent) {
      setValue("address.permanent_address.full", presentFull || "");
      setValue("address.permanent_address.area", presentArea || "");
    }
  }, [sameAsPresent, presentFull, presentArea, setValue]);

  const renderField = (field: (typeof addressFields)[number]) => {
    const path = field.name;

    if (path.endsWith(".full")) {
      return (
        <Col xs={24} sm={12} key={path}>
          <label className='block mb-1 font-semibold'>{field.label}</label>
          <Controller
            name={path}
            render={({ field: controllerField }) => (
              <CascadingSelect
                areaValue={controllerField.value}
                onChange={(val) => {
                  controllerField.onChange(val);
                }}
              />
            )}
          />
          {getErrorMessageBuPropertyName(errors, path) && (
            <p className='text-red-500'>
              {getErrorMessageBuPropertyName(errors, path)}
            </p>
          )}
        </Col>
      );
    }

    return (
      <Col xs={24} sm={12} key={path}>
        <FormInput
          name={path}
          label={field.label}
          placeholder={field.placeholder}
          type='text'
          readOnly={field.readonly}
        />
      </Col>
    );
  };

  return (
    <div>
      <h1 className='text-2xl font-semibold mb-6'>Address</h1>
      <Row gutter={[16, 16]}>
        {addressFields
          .filter((item) => item.name.includes("present_address"))
          .map(renderField)}

        <Col span={24}>
          <Checkbox
            checked={sameAsPresent}
            onChange={(e) => setSameAsPresent(e.target.checked)}>
            Permanent address same as present
          </Checkbox>
        </Col>

        {!sameAsPresent &&
          addressFields
            .filter((item) => item.name.includes("permanent_address"))
            .map(renderField)}

        {/* ✅ Grow Up field rendered here */}
        {renderField(
          addressFields.find((item) => item.name === "address.grow_up")!
        )}
      </Row>
    </div>
  );
};

export default Address;
