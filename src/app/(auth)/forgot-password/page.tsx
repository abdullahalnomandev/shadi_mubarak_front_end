import ForgotPassword from "@/components/auth/ForgotPassword/ForgotPassword";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Reset Password | Biyer Thikana",
  description: "Reset your Biyer Thikana account password. If you've forgotten your password, enter your email address and we'll send you instructions to create a new one.",
};

const ForgotPasswordPage = () => {
  return (
    <>
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
