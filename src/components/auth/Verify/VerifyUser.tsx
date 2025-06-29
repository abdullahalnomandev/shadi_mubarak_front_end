"use client";

import { useUserVerifyMutation } from "@/redux/api/auth";
import { storeUserInfo } from "@/services/auth.service";
import { Result, Spin } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyUser = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [verifyUser, { isLoading }] = useUserVerifyMutation();
  const [messages, setMessages] = useState("");
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  useEffect(() => {
    const verify = async () => {
      if (!token) {
        setStatus("error");
        setMessage("No verification token found.");
        return;
      }

      try {
        const res = await verifyUser({ verificationToken: token }).unwrap();

        setStatus("success");
        if (res?.accessToken) {
          storeUserInfo({ accessToken: res.accessToken });
          setMessages(" Verified successful!");
          setTimeout(() => {
            router.push("/user/dashboard");
          }, 1000);
        }
      } catch {
        router.push("/login");
      }
    };

    verify();
  }, [token, router, messages, verifyUser]);

  if (status === "loading" || isLoading) {
    return (
      <div className='flex min-h-screen items-center justify-center'>
        <Spin tip='Verifying your account...' size='large'>
          <div className='min-h-[100px] w-[200px]' />
        </Spin>
      </div>
    );
  }

  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Result
        status={status}
        title={
          status === "success"
            ? "Verification Successful"
            : "Verification Failed"
        }
        subTitle={messages}
      />
    </div>
  );
};

export default VerifyUser;
