"use client";

import loginImage from "@/assets/login.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Button from "@/components/UI/Button";
import { useUserLoginMutation } from "@/redux/api/auth";
import { loginSchema } from "@/schemas/userSchema";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleLogin } from "@react-oauth/google";
import { Checkbox, Col, message, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {  useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

interface FormValues {
  email: string;
  password: string;
}

// login fields now use translations for placeholders
const getLoginFields = (t: (key: string) => string) => [
  {
    name: "email",
    type: "email",
    placeholder: t("email_placeholder"),
  },
  {
    name: "password",
    type: "password",
    placeholder: t("password_placeholder"),
  },
];

const Login = () => {
  const t = useTranslations("login");

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const [userLogin, { isLoading }] = useUserLoginMutation();
  const [rememberMe, setRememberMe] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res = await userLogin({
        loginData: data,
        callbackUrl: callbackUrl || undefined,
      }).unwrap();
      if (res?.accessToken) {
        storeUserInfo({ accessToken: res.accessToken });
        message.success(t("login_successful"));
      }
    } catch (error) {
      message.error((error as any)?.data || t("something_went_wrong"));
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await userLogin({
          loginData: {
            token: tokenResponse?.access_token,
          },
          callbackUrl: callbackUrl || undefined,
        }).unwrap();
        if (res?.accessToken) {
          storeUserInfo({ accessToken: res.accessToken });
          message.success(t("login_successful"));
        }
      } catch (error: any) {
        message.error(error?.data || t("something_went_wrong"));
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
      message.error(t("login_failed"));
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
              alt={t("login_illustration_alt")}
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
            className='bg-white dark:bg-gray-800 dark:text-white w-full p-6 rounded-xl'>
            <div className='md:max-w-md mx-auto'>
              <h2 className='text-3xl font-bold dark:text-white text-gray-800 text-center'>
                {t("welcome_back")}
              </h2>
              <p className='text-gray-600 dark:text-gray-300 text-center pt-2 py-4'>
                {t("please_sign_in")}
              </p>

              <Form
                submitHandler={onSubmit}
                resolver={yupResolver(loginSchema)}>
                {getLoginFields(t).map((field) => (
                  <div key={field.name} className='mb-4'>
                    <FormInput {...field} />
                  </div>
                ))}
                <div className='flex dark:text-white items-center justify-between mb-4'>
                  <Checkbox
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className='text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800'>
                    {t("remember_me")}
                  </Checkbox>
                  <Link
                    href='/forgot-password'
                    className='text-sm text-blue-600 hover:text-blue-800 !underline'>
                    {t("forgot_password")}
                  </Link>
                </div>
                <Button
                  loading={isLoading}
                  loadingText={t("logging_in")}
                  type='submit'
                  variant='cta'>
                  {t("log_in_button")}
                </Button>
                <div className='relative my-6'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300 dark:border-gray-700'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-4 dark:bg-gray-800 dark:text-gray-300 bg-white text-gray-500'>
                      {t("or")}
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
                  {t("log_in_with_google")}
                </button>
              </Form>

              <p className='mt-4 font-medium text-center dark:text-gray-300 text-gray-600'>
                {t("dont_have_account")}{" "}
                <Link
                  href={`/register${callbackUrl ? `?callbackUrl=${callbackUrl}` : ''}`}
                  className='text-blue-600 hover:text-blue-800 !underline font-medium'>
                  {t("create_account")}
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
