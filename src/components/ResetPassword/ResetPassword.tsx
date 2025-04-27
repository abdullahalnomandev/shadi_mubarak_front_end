"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useTranslate } from "@/hooks/useTranslate";
import { resetPasswordSchema } from "@/schemas/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
type Languages = {
  [key: string]: {
    nativeName: string;
  };
};

const lngs: Languages = {
  en: { nativeName: "English" },
  bn: { nativeName: "Bangla" },
};

const loginFields = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter your email",
  },
];

const ResetPasswordPage = () => {
  const { t, i18n } = useTranslate();
  
  const handleSubmit = async (values: unknown) => {
    try {
      console.log({ values });
      // Add your server-side logic here
    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="w-3/8 m-auto my-16 border rounded-sm border-gray-100 p-6 shadow-md">
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
          className={`cursor-pointer ${i18n.resolvedLanguage === lng ? "text-purple-900" : "text-gray-500"}`}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
      <h1 className="text-purple-900 text-2xl font-bold">
        {t("forgot-password.title")}
      </h1>
      <p className="text-md text-black font-semibold">
        {t("forgot-password.description")}
      </p>
      <Form
        submitHandler={handleSubmit}
        resolver={yupResolver(resetPasswordSchema)}
      >
        {loginFields.map((field) => (
          <div key={field.name} className="mt-3">
            <FormInput size="large" {...field} id={field.name} />
          </div>
        ))}
        <button
          type="submit"
          className="w-full mt-6 py-3 text-white rounded-md transition duration-400 
             cursor-pointer bg-linear-to-r from-cyan-500 to-blue-500 hover:to-cyan-500 hover:from-blue-500"
        >
          Next
        </button>
      </Form>
      <p className="text-center text-base py-4">
        Remember your password?{" "}
        <Link className="text-blue-600 underline" href="/login">
          Try logging in
        </Link>
      </p>
    </div>
  );
};

export default ResetPasswordPage;
