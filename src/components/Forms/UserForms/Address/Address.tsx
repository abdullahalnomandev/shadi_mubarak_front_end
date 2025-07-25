"use client";

import { Checkbox, Col, Row } from "antd";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
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
];

const Address = () => {
  const { watch, setValue } = useFormContext();
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
          <CascadingSelect
            areaValue={watch(path)}
            onChange={(value: string) => setValue(path, value)}
          />
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

  console.log({ presentFull });
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
      </Row>
    </div>
  );
};

export default Address;
