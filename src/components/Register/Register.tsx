"use client";

import sign_up from "@/assets/Sign up-amico.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/auth";
import { loginSchema } from "@/schemas/userSchema";
import { getUserInfoWithToken } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleLogin } from "@react-oauth/google";
import { Col, message, Row, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import VideoPlayerButton from "../UI/VideoPlayerButton";

const { Option } = Select;

interface FormValues {
  email: string;
  password: string;
  phoneNumber: string;
}

const registerFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter email",
    label: "Email",
  },
  {
    name: "phoneNumber",
    type: "tel",
    placeholder: "1*******",
    label: "Mobile",
    classNames: "p-0",
    prefixSelector: (
      <Select style={{ width: 80, marginBottom: 0 }} defaultValue="880">
        <Option value="880">+880</Option>
      </Select>
    ),
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter password",
  },
];

const Register = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const [formValues, setFormValues] = useState<Partial<FormValues>>({});
  const [showForm, setShowForm] = useState(false);
  const [registrationType, setRegistrationType] = useState<
    "email" | "google" | null
  >(null);
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    message.loading("Creating account...");
    try {
      const res = await userLogin(data).unwrap();
      if (res?.accessToken) {
        router.push("/login");
        message.success("Registration successful! Please login.");
      }
    } catch (error) {
      message.error(
        (error as any)?.data || "Something went wrong please try again later."
      );
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { access_token } = tokenResponse;
        const {
          data: { email },
        } = await getUserInfoWithToken(access_token);
        setFormValues({ email });
        setShowForm(true);
        setRegistrationType("google");
        message.success("Email retrieved from Google successfully!");
      } catch (error: any) {
        message.error(
          error?.data || "Something went wrong please try again later"
        );
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
      message.error("Failed to get Google account info. Please try again.");
    },
    flow: "implicit",
  });

  const handleEmailRegistration = () => {
    setShowForm(true);
    setRegistrationType("email");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Row
          justify="center"
          align="middle"
          className="flex gap-14 flex-col md:flex-row"
        >
          {/* Image Section */}
          <Col
            sm={12}
            md={16}
            lg={10}
            className="justify-center items-center p-8 hidden md:block"
          >
            <Image
              src={sign_up}
              alt="Register Illustration"
              width={500}
              height={500}
              className="object-contain max-w-full"
              priority
            />
          </Col>

          {/* Form Section */}
          <Col sm={12} md={8} lg={8} className="bg-white w-full p-6 rounded-xl">
            <div className="md:max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-gray-800 text-center">
                Create Account
              </h2>
              <p className="text-gray-600 text-center pt-2 py-4">
                {!showForm
                  ? "Choose how you'd like to create your account"
                  : "Please fill in your details to register"}
              </p>

              {!showForm ? (
                <div>
                  <button
                    type="button"
                    onClick={() => googleLogin()}
                    className="w-full py-3 px-4 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 
                    rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 
                    focus:outline-none focus:ring-2 cursor-pointer focus:ring-gray-500"
                  >
                    <FcGoogle className="w-5 h-5" />
                    Create with Google
                  </button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleEmailRegistration}
                    className="w-full py-3 text-white rounded-md transition duration-400 
                    cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500"
                  >
                    Create with Email
                  </button>
                </div>
              ) : (
                <Form
                  submitHandler={onSubmit}
                  resolver={yupResolver(loginSchema)}
                  defaultValues={formValues}
                >
                  {registerFields.map((field) => (
                    <div key={field.name} className="mb-2">
                      <FormInput
                        {...field}
                        value={formValues[field.name as keyof FormValues]}
                        className={field.classNames}
                        disabled={
                          field.name === "email" &&
                          registrationType === "google"
                        }
                      />
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full mt-6 py-3 text-white rounded-md transition duration-400 
                    cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500"
                  >
                    Create Account
                  </button>

                  <p className="mt-4 font-medium text-center text-gray-600">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-blue-600 hover:text-blue-800 !underline font-medium"
                    >
                      Login here
                    </Link>
                  </p>
                </Form>
              )}

              <VideoPlayerButton
                title=" Watch: How to create a Biodata"
                videoId="RHuVlgjwOHA"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
