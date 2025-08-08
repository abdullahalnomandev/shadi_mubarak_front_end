"use client";
import UMBreadCrumb from "@/components/UI/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { IUserPayload } from "@/types";
import React from "react";

const SuperAdminPage = () => {
    const {role} = getUserInfo() as IUserPayload;
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${role}`, link: `/${role}` },
          { label: "admin", link: "" },
        ]}
      />
      <h1>Manage Admin</h1>
    </div>
  );
};

export default SuperAdminPage;
