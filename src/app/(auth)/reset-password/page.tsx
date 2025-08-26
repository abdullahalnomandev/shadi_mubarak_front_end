import ResetPassword from "@/components/auth/ResetPassword/ResetPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password | Biyer Thikana",
  description: "Reset Password  to your Biyer Thikana account",
};
const ResetPasswordPage = () => {
  return <ResetPassword />;
};

export default ResetPasswordPage;
