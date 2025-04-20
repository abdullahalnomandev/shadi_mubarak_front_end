"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import loginImage from "@/assets/login.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Row
      className="flex flex-col md:flex-row"
      justify="center"
      align="middle"
      style={{ minHeight: "100vh" }}
    >
      {/* Left Side Image */}
      <Col sm={12} md={16} lg={10}>
        <Image
          src={loginImage}
          alt="Login Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </Col>

      {/* Right Side Form */}
      <Col sm={12} md={8} lg={8}>
        <h1 className="text-xl font-bold text-center text-gray-800 mb-6">
          Welcome to our platform! Please login or create an account to access
          our features and dat
        </h1>

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6"
          style={{ marginTop: "20px 0" }}
        >
          Login / Create Account
        </h1>
        <Form submitHandler={onSubmit}>
          <div className="!space-y-4 p-4">
            <FormInput name="email" size="large" id="email" label="Email" />
            <FormInput
              name="password"
              size="large"
              id="password"
              type="password"
              label="Password"
            />
          </div>

          <Button
            type="primary"
            htmlType="submit"
            className="w-full !mt-4 !py-4"
          >
            Login / Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;

// Image from: https://storyset.com/
