"use client";

import sign_up from "@/assets/Sign up-amico.png";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Button from "@/components/UI/Button";
import VideoPlayerButton from "@/components/UI/VideoPlayerButton";
import { useUserRegisterMutation } from "@/redux/api/auth";
import { regiserSchema } from "@/schemas/userSchema";
import { getUserInfoWithToken, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleLogin } from "@react-oauth/google";
import { Col, message, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineEmail } from "react-icons/md";
import BangladeshFlag from "../../../assets/Flag_of_Bangladesh.svg.png";
import mail from "../../../assets/Mail sent-rafiki.png";
import { useSearchParams } from "next/navigation";

interface FormValues {
  email: string;
  password: string;
  phone: string;
}

// fields now use translations
const getRegisterFields = (t: (key: string) => string) => [
  {
    name: "email",
    type: "email",
    placeholder: t("email_placeholder"),
    label: t("email_label"),
  },
  {
    name: "phone",
    type: "text",
    placeholder: t("phone_placeholder"),
    label: t("phone_label"),
    classNames: "p-0",
    prefixSelector: (
      <div className="flex items-center gap-1 py-1" style={{ width: 60 }}>
        <Image
          src={BangladeshFlag}
          alt="BD"
          width={20}
          height={14}
          className="inline-block"
        />
        <span className="text-gray-700">+880</span>
      </div>
    ),
  },
  {
    label: t("password_label"),
    name: "password",
    type: "password",
    placeholder: t("password_placeholder"),
  },
];

const Register = () => {

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl");

  const t = useTranslations("register");
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
      const res = await userRegister({
        loginData: userInfo,
        callbackUrl: callbackUrl || undefined,
      }).unwrap();

      if (res?.accessToken && registrationType === "google") {
        storeUserInfo({ accessToken: res.accessToken });
        // router.push("/user/dashboard");
        message.success(t("account_created"));
      }

      if (!res?.accessToken && registrationType === "email") {
        setSuccessMessage(t("check_email_message"));
        setShowForm(false);
      }
    } catch (error) {
      message.error((error as any)?.data || t("something_went_wrong"));
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
        message.error(error?.data || t("google_info_failed"));
      }
    },
    onError: (error) => {
      console.error("Google login error:", error);
      message.error(t("google_failed"));
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
              alt={t("register_illustration_alt")}
              width={500}
              height={500}
              className="object-contain max-w-full"
              priority
            />
          </Col>

          {/* Form Section */}
          <Col sm={12} md={8} lg={8} className="bg-white w-full p-6 rounded-xl">
            <div className="md:max-w-md mx-auto">
              {successMessage ? (
                <div className="mx-auto bg-white shadow-md rounded-md p-8 text-center flex flex-col items-center space-y-6">
                  <Image
                    src={mail}
                    alt={t("email_sent_illustration_alt")}
                    width={200}
                    height={200}
                    className="rounded-xl"
                  />
                  <h2 className="text-2xl font-semibold text-green-700">
                    {t("check_email_title")}
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg">
                    {t("check_email_subtext")}
                  </p>
                  {/* <p className="mt-2 text-xs pt-3 text-neutral-500 font-medium  dark:text-gray-400">
                    {t("hint_email_message")}
                  </p> */}
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-800 text-center">
                    {t("create_account_title")}
                  </h2>
                  <p className="text-gray-600 text-center pt-2 py-4">
                    {!showForm
                      ? t("choose_registration_method")
                      : t("fill_details")}
                  </p>
                </>
              )}

              {!showForm && !successMessage ? (
                <div>
                  {/* <button
                    type='button'
                    onClick={() => googleLogin()}
                    className='w-full py-3 px-4 flex items-center justify-center gap-3 bg-white border-2 border-gray-200 
                    rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 
                    focus:outline-none focus:ring-2 cursor-pointer focus:ring-gray-500'>
                    <FcGoogle className='w-5 h-5' />
                    {t("create_with_google")}
                  </button> */}
                  <button
                    onClick={() => googleLogin()}
                    className="flex items-center justify-center w-full gap-3 py-3 px-4 
             border border-gray-300 rounded-lg bg-white shadow-sm 
             hover:shadow-md hover:bg-gray-50 
             focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-300
             transition-all duration-200 cursor-pointer hover:scale-105"
                  >
                    <FcGoogle size={22} />
                    <span className="text-gray-800 font-medium text-base">
                      {t("create_with_google")}
                    </span>
                  </button>

                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">
                        {t("or")}
                      </span>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={handleEmailRegistration}
                    variant="cta"
                    className="py-3"
                  >
                    <div className="flex items-center gap-2">
                      <MdOutlineEmail />
                      <span>{t("create_with_email")}</span>
                    </div>
                  </Button>
                </div>
              ) : null}

              {showForm && !successMessage && (
                <Form
                  submitHandler={onSubmit}
                  resolver={yupResolver(regiserSchema)}
                  defaultValues={formValues}
                >
                  {getRegisterFields(t).map((field) => (
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

                  <Button
                    type="submit"
                    disabled={isLoading}
                    variant="cta"
                    className="py-3"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        <span>{t("creating")}</span>
                      </>
                    ) : (
                      t("create_account_button")
                    )}
                  </Button>

                  <p className="mt-4 font-medium text-center text-gray-600">
                    {t("already_have_account")}{" "}
                    <Link
                      href="/login"
                      className="text-blue-600 hover:text-blue-800 underline font-medium"
                    >
                      {t("login_here")}
                    </Link>
                  </p>
                </Form>
              )}

              <div className="mt-6">
                <VideoPlayerButton
                  title={t("how_to_create_account")}
                  videoId="RHuVlgjwOHA"
                />
                <p className="mt-4  font-medium text-center text-gray-600">
                  {t("not_understand")}
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
