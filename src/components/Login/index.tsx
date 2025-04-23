"use client";

import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImage from "@/assets/login.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";

interface FormValues {
  email: string;
  password: string;
}

const loginFields = [
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

const Login = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin(data).unwrap();
      const accessToken = res?.accessToken;

      if (accessToken) {
        storeUserInfo({ accessToken });
        router.push("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Optionally: will show a toast notification later
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      className="flex flex-col md:flex-row min-h-screen"
    >
      {/* Image Section */}
      <Col sm={12} md={16} lg={10} className="flex justify-center items-center">
        <Image
          src={loginImage}
          alt="Login Illustration"
          width={500}
          height={500}
          className="object-contain"
        />
      </Col>

      {/* Form Section */}
      <Col sm={12} md={8} lg={8} className="px-4">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Welcome! Please log in or create an account to continue.
          </h2>
          <h1 className="text-3xl font-bold text-gray-800 mt-4">
            Login / Create Account
          </h1>
        </div>

        <Form submitHandler={onSubmit}>
          {loginFields.map((field) => (
            <div key={field.name} className="mt-3">
              <FormInput {...field} id={field.name} />
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

export default Login;


// Image from: https://storyset.com/
