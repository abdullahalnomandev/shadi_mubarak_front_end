"use client";

import { Typography, message, Col } from "antd";
import { LockOutlined } from "@ant-design/icons";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSChema } from "@/schemas/userSchema";
const { Title, Text } = Typography;

interface IChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const changePasswordFields = [
  {
    name: "currentPassword",
    type: "password",
    placeholder: "Enter current password",
    label: "Current Password",
  },
  {
    name: "newPassword",
    type: "password",
    placeholder: "Enter new password",
    label: "New Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm new password",
    label: "Confirm New Password",
    dependencies: ["newPassword"],
  },
];

const ChangePassword = () => {
  const handleSubmit = async (values: IChangePasswordForm) => {
    try {
      console.log(values);
      message.success("Password changed successfully");
    } catch (err: any) {
      message.error(err?.message || "Failed to change password");
    }
  };

  return (
    <div className=" bg-gradient-to-br flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full mt-6">
        <Col
          sm={24}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden"
        >
          <div className="p-4">
            <div className="text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full
               bg-blue-100 dark:bg-blue-900 mb-2"
              >
                <LockOutlined className="text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <Title
                level={3}
                className="text-gray-900 dark:!text-slate-300  mb-1"
              >
                Change Password
              </Title>
              <Text className="text-gray-600 dark:!text-slate-300 text-md">
                Please enter your current password and choose a new password
              </Text>
            </div>

            <div className="mt-10">
              <Form
                submitHandler={handleSubmit}
                resolver={yupResolver(changePasswordSChema)}
              >
                <div className="space-y-3">
                  {changePasswordFields.map((field) => (
                    <div key={field.name}>
                      <FormInput {...field} />
                    </div>
                  ))}

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-2 border border-transparent rounded-xl
                        text-md font-medium text-white bg-gradient-to-r from-blue-600 to-blue-800
                        hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300
                        shadow-lg hover:shadow-xl disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default ChangePassword;
