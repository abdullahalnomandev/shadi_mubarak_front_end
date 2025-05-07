"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { resetPasswordSchema } from "@/schemas/userSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

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
  const handleSubmit = (values: any) => {
    try {
      console.log(values);
      // Add your server-side logic here
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-14">
          {/* Form Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <div className="max-w-md mx-auto">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
                Reset Your Password
              </h1>
              <p className="text-gray-600 text-center text-sm sm:text-base mb-8">
                Please enter your new password
              </p>

              <Form
                submitHandler={handleSubmit}
                resolver={yupResolver(resetPasswordSchema)}
              >
                {resetPasswordFields.map((field) => (
                  <div key={field.name} className="mb-4">
                    <FormInput
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      label={field.label}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-white text-base font-medium rounded-lg transition duration-300 
                    bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
                >
                  Reset Password
                </button>
              </Form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm sm:text-base">
                  Remember your password?{" "}
                  <Link
                    href="/login"
                    className="text-blue-600 hover:text-blue-800 font-medium underline transition duration-200"
                  >
                    Back to Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
