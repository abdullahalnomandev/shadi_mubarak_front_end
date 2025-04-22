"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import loginImage from "@/assets/login.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";

interface FormValues {
  email: string;
  password: string;
}

const LoginPage = () => {

  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
     const res =  await userLogin({...data}).unwrap();
     if(res?.data?.accessToken) {
      storeUserInfo({accessToken:res?.data?.accessToken})
     };
    } catch (error) {
      console.error(error);
    }
  };

  const loginFormField = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];
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

        <h1
          className="text-3xl font-bold text-center text-gray-800 mb-6"
          style={{ marginTop: "20px 0" }}
        >
          Login / Create Account
        </h1>
        <Form submitHandler={onSubmit}>
          {loginFormField.map(({ name, label, type, placeholder }) => (
              <div className="mt-3" key={name}>
                <FormInput
                  name={name}
                  id={name}
                  label={label}
                  placeholder={placeholder}
                  type={type}
                />
              </div>
          ))}

          <Button
            type="primary"
            htmlType="submit"
            className="w-full mt-5 !py-5"
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
