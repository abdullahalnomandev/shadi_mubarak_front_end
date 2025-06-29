"use client";

import { useUserResetPasswordMutation } from "@/redux/api/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, message, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import resetImage from "@/assets/Reset password-pana.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { resetPasswordSchema } from "@/schemas/userSchema";

const resetPasswordFields = [
  {
    name: "password",
    type: "password",
    placeholder: "Enter new password",
    label: "New Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm new password",
    label: "Confirm Password",
  },
];

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [resetPassword, { isLoading }] = useUserResetPasswordMutation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values: { password: string }) => {
    if (!token) {
      message.error("Missing reset token.");
      return;
    }

    try {
      await resetPassword({
        token,
        newPassword: values.password,
      }).unwrap();

      setSubmitted(true);
      message.success("Password reset successful!");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      message.error(error?.data || "Failed to reset password.");
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
            className='justify-center items-center p-8 hidden md:block'>
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
            className='bg-white dark:bg-blue-950 dark:text-white w-full p-6 rounded-xl'>
            <div className='md:max-w-md mx-auto'>
              <h2 className='text-3xl font-bold dark:text-white text-gray-800 text-center'>
                Reset Your Password
              </h2>
              <p className='text-gray-600 dark:text-white text-center pt-2 py-4'>
                Please enter your new password
              </p>

              {!submitted ? (
                <Form
                  submitHandler={handleSubmit}
                  resolver={yupResolver(resetPasswordSchema)}>
                  {resetPasswordFields.map((field) => (
                    <div key={field.name} className='mb-4'>
                      <FormInput {...field} />
                    </div>
                  ))}
                  <button
                    type='submit'
                    disabled={isLoading}
                    className='w-full mt-3 py-3 text-white rounded-md transition duration-300 
                      bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                      disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>
                    {isLoading ? "Resetting..." : "Reset Password"}
                  </button>
                </Form>
              ) : (
                <div className='text-center mt-6 text-green-600 font-medium'>
                  Password has been successfully reset. Redirecting...
                </div>
              )}

              {!submitted && (
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

export default ResetPassword;
