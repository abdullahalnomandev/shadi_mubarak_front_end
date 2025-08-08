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
import Button from "@/components/UI/Button";
import { resetPasswordSchema } from "@/schemas/userSchema";
import { useTranslations } from "next-intl";

const resetPasswordFields = [
  {
    name: "password",
    type: "password",
    placeholderKey: "placeholder_new_password",
    labelKey: "label_new_password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholderKey: "placeholder_confirm_password",
    labelKey: "label_confirm_password",
  },
];

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const t = useTranslations("reset_password");
  const [resetPassword, { isLoading }] = useUserResetPasswordMutation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values: { password: string }) => {
    if (!token) {
      message.error(t("error_missing_token"));
      return;
    }

    try {
      await resetPassword({
        token,
        newPassword: values.password,
      }).unwrap();

      setSubmitted(true);
      message.success(t("message_success_redirect"));
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error: any) {
      message.error(error?.data || t("error_failed_reset"));
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
              alt={t("alt_reset_image")}
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
                {t("title")}
              </h2>
              <p className='text-gray-600 dark:text-white text-center pt-2 py-4'>
                {t("instructions")}
              </p>

              {!submitted ? (
                <Form
                  submitHandler={handleSubmit}
                  resolver={yupResolver(resetPasswordSchema)}>
                  {resetPasswordFields.map(
                    ({ name, type, placeholderKey, labelKey }) => (
                      <div key={name} className='mb-4'>
                        <FormInput
                          name={name}
                          type={type}
                          placeholder={t(placeholderKey)}
                          label={t(labelKey)}
                        />
                      </div>
                    )
                  )}

                  <Button
                    type='submit'
                    loading={isLoading}
                    loadingText={t("button_resetting")}
                    variant='cta'
                    className='py-3'>
                    {t("button_reset_password")}
                  </Button>
                </Form>
              ) : (
                <div className='text-center mt-6 text-green-600 font-medium'>
                  {t("message_success_redirect")}
                </div>
              )}

              {!submitted && (
                <p className='mt-6 text-center text-sm text-gray-600 dark:text-white'>
                  {t("message_remember_password")}{" "}
                  <Link
                    href='/login'
                    className='text-blue-600 hover:text-blue-800 underline font-medium'>
                    {t("message_back_to_login")}
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
