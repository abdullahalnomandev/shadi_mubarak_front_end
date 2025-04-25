"use client";
import { Col, Row } from 'antd';
import React from 'react';
import FormInput from '../Forms/FormInput';
import FormDatePicker from '../Forms/FormDatePicker';
import FormSelectField from '../Forms/FormSelectField';
import { genderOptions } from '@/constants/global';

const GeneralInfo = () => {
    const formFields = [
        {
            name: 'firstName',
            label: "First Name",
            type: "text",
            placeholder: "Enter your first name",
        },
        {
            name: 'lastName',
            label: "Last Name",
            type: "text",
            placeholder: "Enter your last name",
        },
        {
            name: 'email',
            label: "Email",
            type: "email",
            placeholder: "Enter your email",
        },
        {
            name: 'phoneNumber',
            label: "Phone Number",
            type: "tel",
            placeholder: "Enter your phone number",
        }
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">General Information</h1>
            <Row gutter={[16, 16]}>
                {formFields.map(({name,label,type,placeholder}) => (
                    <Col key={name} xs={24} sm={12}>
                        <FormInput
                            id={name}
                            name={name}
                            label={label}
                            type={type}
                            placeholder={placeholder}
                            size="large"
                        />
                    </Col>
                ))}

                <Col xs={24} sm={12}>
                    <FormDatePicker
                        name="dateOfBirth"
                        label="Date of Birth"
                        placeholder="Select your date of birth"
                        size="large"
                    />
                </Col>

                <Col xs={24} sm={12}>
                    <FormSelectField
                        name="gender"
                        label="Gender"
                        placeholder="Select your gender"
                        options={genderOptions}
                        size="large"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default GeneralInfo;