"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Col, message, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import resetImage from "@/assets/Forgot password-pana.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserForgetPasswordMutation } from "@/redux/api/auth";
import { forgotPasswordSchema } from "../../../schemas/userSchema";

const forgotPasswordFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email Address",
  },
];

const ForgotPassword = () => {
  const [userForgetPassword, { isLoading }] = useUserForgetPasswordMutation();
  const [submitting, setSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (values: { email: string }) => {
    setSubmitting(true);
    try {
      await userForgetPassword(values).unwrap();
      setEmailSent(true);
    } catch (error: any) {
      console.log("ERROR", error);
      message.error(error?.data || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br dark:bg-blue-950 dark:text-white flex items-center justify-center'>
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
            className='hidden md:flex justify-center items-center p-8'>
            <Image
              src={resetImage}
              alt='Reset Password Illustration'
              width={500}
              height={500}
              className='object-contain max-w-full'
              priority
            />
          </Col>

          {/* Form Section */}
          <Col
            sm={12}
            md={8}
            lg={8}
            className='bg-white dark:bg-blue-950 w-full p-8 rounded-xl shadow-md'>
            <div className='md:max-w-md mx-auto'>
              <h2 className='text-3xl font-bold text-center text-gray-800 dark:text-white'>
                Forgot Your Password ?
              </h2>
              <p className='text-center text-gray-600 dark:text-gray-300 mt-2 mb-6'>
                Enter your email address and we’ll send you instructions to
                reset your password.
              </p>

              {!emailSent ? (
                <Form
                  submitHandler={handleSubmit}
                  resolver={yupResolver(forgotPasswordSchema)}>
                  {forgotPasswordFields.map((field) => (
                    <div key={field.name} className='mb-6'>
                      <FormInput {...field} />
                    </div>
                  ))}

                  <button
                    type='submit'
                    disabled={submitting || isLoading}
                    className='w-full py-3 text-white font-semibold rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>
                    {submitting || isLoading ? "Sending..." : "Send Reset Link"}
                  </button>
                </Form>
              ) : (
                <div className='mt-10 px-6 py-6 text-center rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 shadow-sm'>
                  <div className='flex justify-center mb-4'>
                    <svg
                      className='w-10 h-10 text-green-600 dark:text-green-400'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth={2}
                      viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M5 13l4 4L19 7'
                      />
                    </svg>
                  </div>

                  <h3 className='text-lg font-semibold text-green-700 dark:text-green-400'>
                    Check Your Email
                  </h3>

                  <p className='mt-2 text-sm text-gray-700 dark:text-gray-300'>
                    We’ve sent a link to reset your password.
                  </p>

                  <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>
                    Can’t find it? Look in your <strong>Spam</strong> or{" "}
                    <strong>Junk</strong> folder.
                  </p>

                  <Link
                    href='/login'
                    className='inline-block mt-6 px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors'>
                    Back to Login
                  </Link>
                </div>
              )}

              {!emailSent && (
                <p className='mt-6 text-center text-sm text-gray-600 dark:text-white'>
                  Remember your password?{" "}
                  <Link
                    href='/login'
                    className='text-blue-600 hover:text-blue-800 underline font-medium'>
                    Back to Login
                  </Link>
                </p>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ForgotPassword;
