import { Metadata } from "next";
import Login from "@/components/Login";

export const metadata: Metadata = {
  title: "Login | Shadi Mubarak",
  description: "Login to your Shadi Mubarak account",
};

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
