"use client";

import sign_up from "@/assets/Sign up-amico.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import VideoPlayerButton from "@/components/UI/VideoPlayerButton";
import { useUserRegisterMutation } from "@/redux/api/auth";
import { regiserSchema } from "@/schemas/userSchema";
import { getUserInfoWithToken, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleLogin } from "@react-oauth/google";
import { Col, message, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import BangladeshFlag from "../../../assets/Flag_of_Bangladesh.svg.png";
import mail from "../../../assets/Mail sent-rafiki.png";
interface FormValues {
  email: string;
  password: string;
  phone: string;
}

const registerFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter email",
    label: "Email",
  },
  {
    name: "phone",
    type: "text",
    placeholder: "1xxxxxxxxx",
    label: "Mobile",
    classNames: "p-0",
    prefixSelector: (
      <div className='flex items-center gap-1 py-1' style={{ width: 60 }}>
        <Image
          src={BangladeshFlag}
          alt='BD'
          width={20}
          height={14}
          className='inline-block'
        />
        <span className='text-gray-700'>+880</span>
      </div>
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
  const [userRegister, { isLoading }] = useUserRegisterMutation();
  const [formValues, setFormValues] = useState<Partial<FormValues>>({});
  const [showForm, setShowForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [registrationType, setRegistrationType] = useState<
    "email" | "google" | null
  >(null);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const userInfo = { ...data, provider: registrationType };
      const res = await userRegister(userInfo).unwrap();

      if (res?.accessToken && registrationType === "google") {
        storeUserInfo({ accessToken: res.accessToken });
        router.push("/user/dashboard");
        message.success("Account created successfully!");
      }

      if (!res?.accessToken && registrationType === "email") {
        setSuccessMessage("Check your email — to verify your account.");
        setShowForm(false);
      }
    } catch (error) {
      message.error(
        (error as any)?.data || "Something went wrong. Please try again later."
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
      } catch (error: any) {
        message.error(error?.data || "Failed to retrieve Google account info.");
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
      message.error("Google sign-in failed. Please try again.");
    },
    flow: "implicit",
  });

  const handleEmailRegistration = () => {
    setShowForm(true);
    setRegistrationType("email");
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center'>
      <div className='container mx-auto px-4'>
        <Row
          justify='center'
          align='middle'
          className='flex gap-14 flex-col md:flex-row'>
          {/* Image Section */}
          <Col
            sm={12}
            md={16}
            lg={10}
            className='justify-center items-center p-8 hidden md:block'>
            <Image
              src={sign_up}
              alt='Register Illustration'
              width={500}
              height={500}
              className='object-contain max-w-full'
              priority
            />
          </Col>

          {/* Form Section */}
          <Col sm={12} md={8} lg={8} className='bg-white w-full p-6 rounded-xl'>
            <div className='md:max-w-md mx-auto'>
              {successMessage ? (
                <div className=' mx-auto bg-white shadow-md rounded-md p-8 text-center flex flex-col items-center space-y-6'>
                  <Image
                    src={mail}
                    alt='Email sent illustration'
                    width={200}
                    height={200}
                    className='rounded-xl'
                  />

                  <h2 className='text-2xl  font-semibold text-green-700'>
                    Check Your Email - Inbox
                  </h2>

                  <p className='text-gray-600 text-base md:text-lg'>
                    We&apos;ve sent a confirmation link to your inbox.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className='text-3xl font-bold text-gray-800 text-center'>
                    Create Account
                  </h2>
                  <p className='text-gray-600 text-center pt-2 py-4'>
                    {!showForm
                      ? "Choose how you'd like to create your account"
                      : "Please fill in your details to register"}
                  </p>
                </>
              )}

              {!showForm && !successMessage ? (
                <div>
                  <button
                    type='button'
                    onClick={() => googleLogin()}
                    className='w-full py-3 px-4 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 
                    rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 
                    focus:outline-none focus:ring-2 cursor-pointer focus:ring-gray-500'>
                    <FcGoogle className='w-5 h-5' />
                    Create with Google
                  </button>

                  <div className='relative my-6'>
                    <div className='absolute inset-0 flex items-center'>
                      <div className='w-full border-t border-gray-300'></div>
                    </div>
                    <div className='relative flex justify-center text-sm'>
                      <span className='px-4 bg-white text-gray-500'>Or</span>
                    </div>
                  </div>

                  <button
                    type='button'
                    onClick={handleEmailRegistration}
                    className='w-full py-3 text-white rounded-md transition duration-400 
                    cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500'>
                    Create with Email
                  </button>
                </div>
              ) : null}

              {showForm && !successMessage && (
                <Form
                  submitHandler={onSubmit}
                  resolver={yupResolver(regiserSchema)}
                  defaultValues={formValues}>
                  {registerFields.map((field) => (
                    <div key={field.name} className='mb-2'>
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
                    type='submit'
                    disabled={isLoading}
                    className='w-full mt-6 py-3 text-white rounded-md transition duration-400 
    cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 
    disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2'>
                    {isLoading ? (
                      <>
                        <svg
                          className='animate-spin h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'>
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          />
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          />
                        </svg>
                        <span>Creating...</span>
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>

                  <p className='mt-4 font-medium text-center text-gray-600'>
                    Already have an account?{" "}
                    <Link
                      href='/login'
                      className='text-blue-600 hover:text-blue-800 underline font-medium'>
                      Login here
                    </Link>
                  </p>
                </Form>
              )}

              <div className='mt-4'>
                <VideoPlayerButton
                  title='How to Create Your Account ?'
                  videoId='RHuVlgjwOHA'
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
