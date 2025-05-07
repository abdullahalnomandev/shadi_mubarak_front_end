"use client";
import { Col, Row, Checkbox } from "antd";
import React, { useState } from "react";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import useGetUserFromField from "@/hooks/useGetUserFromField";
import { districts } from "@/constants/districts";
import { useFormContext } from "react-hook-form";

const Address = () => {
  const { address } = useGetUserFromField();
  const { watch, setValue } = useFormContext();
  const [sameAsPresent, setSameAsPresent] = useState(false);

  // Watch the full address fields
  const presentAddressFull = watch("address.present_address.full");
  const permanentAddressFull = watch("address.permanent_address.full");

  // Filter address fields based on full address values
  const filteredAddress = address.filter((field) => {
    if (field.name === "address.present_address.area") {
      return !!presentAddressFull;
    }
    if (field.name === "address.permanent_address.full") {
      return !!presentAddressFull;
    }
    if (field.name === "address.permanent_address.area") {
      return !!permanentAddressFull;
    }
    return true;
  });

  const handleSameAddressChange = (checked: boolean) => {
    setSameAsPresent(checked);
    if (checked) {
      // Copy present address values to permanent address
      setValue("address.permanent_address.full", watch("address.present_address.full"));
      setValue("address.permanent_address.area", watch("address.present_address.area"));
    } else {
      // Clear permanent address when unchecked
      setValue("address.permanent_address.full", "");
      setValue("address.permanent_address.area", "");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Address Information</h1>
      <Row gutter={[16, 16]}>
        {/* Present Address Fields */}
        {filteredAddress.map(({ name, type, placeholder, label }) => {
          // Show permanent address fields only if not same as present
          if (name.includes("permanent_address") && sameAsPresent) {
            return null;
          }

          return (
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
                (type === "select" && (
                  <FormSelectField
                    options={Object.entries(districts).flatMap(([district, areas]) => [
                      { value: district.toLowerCase(), label: `All ${district}` },
                      ...areas.map((area) => ({
                        value: `${district.toLowerCase()}-${area.toLowerCase()}`,
                        label: `${area} (${district})`
                      }))
                    ])}
                    name={name}
                    label={label}
                    placeholder="Select District"
                    showSearch={true}
                    filterOption={(input: string, option: any) => {
                      if (!option || typeof option !== 'object') return false;
                      const opt = option as { value?: string; label?: string };
                      const value = opt.value || "";
                      const label = opt.label || "";
                      const searchInput = input.toLowerCase();
                      return (
                        value.toLowerCase().includes(searchInput) ||
                        label.toLowerCase().includes(searchInput)
                      );
                    }}
                  />
                ))}
            </Col>
          );
        })}
      </Row>
      
      {/* Checkbox for same address */}
      <div className="mt-4">
        <Checkbox 
          onChange={(e) => handleSameAddressChange(e.target.checked)}
          checked={sameAsPresent}
        >
          Permanent Address same as Present Address
        </Checkbox>
      </div>
    </div>
  );
};

export default Address;
