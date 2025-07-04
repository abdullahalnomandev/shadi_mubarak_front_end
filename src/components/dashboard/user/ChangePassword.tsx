"use client";

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { useUserUpdatePasswordMutation } from "@/redux/api/auth";
import { changePasswordSchema } from "@/schemas/userSchema";
import { LockOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Typography, message } from "antd";

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
  const [userUpdatePassword, { isLoading }] = useUserUpdatePasswordMutation();

  const handleSubmit = async (values: IChangePasswordForm) => {
    try {
      const payload = {
        oldPassword: values.currentPassword,
        newPassword: values.newPassword,
      };

      await userUpdatePassword(payload).unwrap();
      message.success("Password changed successfully");
    } catch (err: any) {
      message.error(err?.data || "Failed to change password");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800'>
      <div className='w-full max-w-lg mt-10'>
        <Col className='bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden p-6'>
          <div className='text-center'>
            <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900 mb-4'>
              <LockOutlined className='text-xl text-blue-600 dark:text-blue-400' />
            </div>
            <Title
              level={3}
              className='!text-gray-900 dark:!text-slate-200 mb-1'>
              Change Password
            </Title>
            <Text className='text-gray-600 dark:text-slate-400 text-sm'>
              Please enter your current password and choose a new one
            </Text>
          </div>

          <div className='mt-8'>
            <Form
              submitHandler={handleSubmit}
              resolver={yupResolver(changePasswordSchema)}>
              <div className='space-y-4'>
                {changePasswordFields.map((field) => (
                  <FormInput key={field.name} {...field} />
                ))}

                <button
                  type='submit'
                  disabled={isLoading}
                  className='w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-medium bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'>
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
                      <span className='ml-2'>Updating...</span>
                    </>
                  ) : (
                    "Update Password"
                  )}
                </button>
              </div>
            </Form>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default ChangePassword;
