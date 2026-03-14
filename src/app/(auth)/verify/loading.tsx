"use client";

import {  Spin } from "antd";
import { useTranslations } from "next-intl";

export default function Loading() {
  const t = useTranslations("verify_user");

  return (
      <div className='flex min-h-screen items-center justify-center'>
        <Spin tip={t("verifying_account")} size='large'>
          <div className='min-h-[100px] w-[200px]' />
        </Spin>
      </div>
  );
}