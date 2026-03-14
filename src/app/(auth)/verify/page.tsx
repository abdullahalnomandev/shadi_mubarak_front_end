"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Spin } from "antd";
import { useTranslations } from "next-intl";
import { setToLocalStorage } from "@/utils/logal-storage";
import { authKey } from "@/constants/storageKey";
import { useUserVerifyMutation } from "@/redux/api/auth";

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("verify_user");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = searchParams.get("token");

  const [userVerify] = useUserVerifyMutation();

  useEffect(() => {
    const verifyUser = async () => {
      if (!token) {
        setError(t("invalid_token"));
        setLoading(false);
        return;
      }

      try {
        const res: any = await userVerify({
          verifyData: { verificationToken: token ,callbackUrl: "/user/dashboard"},
        }).unwrap();

        if (res?.accessToken) {
          setToLocalStorage(authKey, res.accessToken);
        }
      } catch (err: any) {
        console.log(err);
        setError(err?.data || t("verification_failed"));
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [token, userVerify, router, t]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spin tip={t("verifying_account")} size="large">
          <div className="min-h-[100px] w-[200px]" />
        </Spin>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return null;
}