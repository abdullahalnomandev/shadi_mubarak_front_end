import VerifyUser from "@/components/auth/Verify/VerifyUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify | Shadi Mubarak",
  description: "Verify to your Shadi Mubarak account",
};

const LoginPage = () => {
  return (
    <>
      <VerifyUser />
    </>
  );
};

export default LoginPage;
