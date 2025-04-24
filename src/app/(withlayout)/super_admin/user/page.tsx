"use client";
import UMBreadCrumb from "@/components/UI/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { IUserPayload } from "@/types";
import React from "react";

const UserPage = () => {
    const {role} = getUserInfo() as IUserPayload;

  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${role}`, link: `/${role}` },
          { label: "user", link: "" },
        ]}
      />
      <h1>User List</h1>
    </div>
  );
};

export default UserPage;
