/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import loginImage from "@/assets/login.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/auth";
import { loginSchema } from "@/schemas/userSchema";
import { getUserInfoWithToken, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleLogin } from "@react-oauth/google";
import { Checkbox, Col, message, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

interface FormValues {
  email: string;
  password: string;
}

const loginFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];

const Login = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin(data).unwrap();
      if (res?.accessToken) {
        storeUserInfo({ accessToken: res.accessToken });
        router.push("/");
        message.success("Login successful!");
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
        const res = await userLogin({
          token: tokenResponse?.access_token,
        }).unwrap();
        if (res?.accessToken) {
          storeUserInfo({ accessToken: res.accessToken });
          router.push("/");
          message.success("Login successful!");
        }
      } catch (error: any) {
        message.error(
          error?.data || "Something went wrong please try again later"
        );
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
      message.error("Login failed. Please try again.");
    },
    flow: "implicit",
  });

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
              src={loginImage}
              alt='Login Illustration'
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
            className='bg-white dark:bg-blue-950 dark:text-white w-full p-6 rounded-xl '>
            <div className=' md:max-w-md mx-auto'>
              <h2 className='text-3xl font-bold dark:text-white text-gray-800 text-center'>
                Welcome Back!
              </h2>
              <p className='text-gray-600 dark:text-white text-center pt-2 py-4'>
                Please sign in to continue
              </p>

              <Form
                submitHandler={onSubmit}
                resolver={yupResolver(loginSchema)}>
                {loginFields.map((field) => (
                  <div key={field.name} className='mb-4'>
                    <FormInput {...field} />
                  </div>
                ))}
                <div className='flex dark:text-white items-center justify-between mb-4'>
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className='text-sm text-gray-600 dark:text-white hover:text-gray-800'>
                    Remember me
                  </Checkbox>
                  <Link
                    href='/forgot-password'
                    className='text-sm text-blue-600 hover:text-blue-800 !underline'>
                    Forgot Password?
                  </Link>
                </div>
                <button
                  type='submit'
                  className='w-full mt-3 py-3 text-white rounded-md transition duration-400 
                cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500'>
                  Log In
                </button>
                <div className='relative my-6'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300 dark:bg-blue-900'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-4 dark:bg-blue-950 dark:text-white bg-white text-gray-500'>
                      Or continue with
                    </span>
                  </div>
                </div>
                <button
                  type='button'
                  className='w-full py-3 px-4 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 
                    rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 
                    focus:outline-none focus:ring-2 cursor-pointer focus:ring-gray-500'
                  onClick={() => googleLogin()}>
                  <FcGoogle className='w-5 h-5' />
                  Log in with Google
                </button>
              </Form>

              <p className='mt-4 font-medium text-center dark:text-white text-gray-600'>
                Dont have an account?{" "}
                <Link
                  href='/register'
                  className='text-blue-600 hover:text-blue-800 !underline font-medium'>
                  Create account
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;

// Image from: https://storyset.com/
// client id 53110587046-akdbq4aoh9f2bqud18mj3gjfvkmpcri2.apps.googleusercontent.com
// secreat : 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

// https: https://www.googleapis.com/oauth2/v3/userinfo
// Bearer token
