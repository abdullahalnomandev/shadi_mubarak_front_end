"use client";
import profileImage from "@/assets/boy.jpg";
import { IUser } from "@/types";
import { message } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import AddToFavoriteList from "./AddToFavoriteList";
import renderValue from "./renderValue";

interface IProps {
  general_information: any;
  bioDataNo: string;
  usrInfo: IUser;
  profileStatus: string;
}

const GeneralInfoProfile = ({
  general_information,
  bioDataNo,
  usrInfo,
  profileStatus,
}: IProps) => {
  const t = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = {}; // Replace with actual data context if needed

  if (!general_information) return null;

  return (
    <div className="w-full mx-auto mb-8">
      <div className="bg-gradient-to-br from-cyan-200 via-blue-100 to-white dark:from-blue-950 dark:via-blue-900 dark:to-blue-950 rounded-md relative pt-16 shadow-md">
        {/* Profile Image */}
        <div className="absolute -top-9 left-1/2 -translate-x-1/2">
          <div className="rounded-full border-4 border-blue-100 dark:border-blue-800 bg-blue-100 dark:bg-blue-900 w-26 h-26 shadow-lg">
            <Image
              src={profileImage}
              alt="Shadi Mubarak"
              className="object-cover w-full h-full rounded-full"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        {/* Biodata No */}
        <div className="text-center text-slate-700 dark:text-white text-lg  my-3">
          {t("biodata.general.biodata_no")} : {bioDataNo}
        </div>

        {/* Info Rows */}
        <div className="w-full">
          {Object.entries(general_information)
            .filter(([key]) => key !== "_id")
            .map(([key, value], index) => (
              <div
                key={key}
                className={`flex ${
                  index === 0 ? "" : "border-t"
                } border-blue-100 dark:border-blue-800 ${
                  index % 2 === 0
                    ? "bg-blue-50 dark:bg-blue-900/40"
                    : "bg-white dark:bg-blue-950/40"
                }`}
              >
                <div className="w-1/2 p-3 text-slate-700 dark:text-white  capitalize border-r border-blue-100 dark:border-blue-800 text-sm ">
                  {t(`biodata.general.${key}`)}
                </div>
                <div className="w-1/2 p-3 text-slate-600 dark:text-slate-300 capitalize text-sm">
                  {renderValue(value)}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 py-3  border-blue-100 dark:border-blue-800">
        <button
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-sm min-w-[120px] cursor-pointer hover:scale-105"
          onClick={async () => {
            await navigator.clipboard.writeText(
              `${window.location.origin}/biodata/${bioDataNo}`
            );
            message.success("Biodata link copied!");
          }}
        >
          <FiCopy className="h-4 w-4" />
          {t("biodata.actions.copy_bio_link")}
        </button>

        {usrInfo?.bioDataNo === bioDataNo ? null : (
          <AddToFavoriteList bioDataNo={bioDataNo} />
        )}
      </div>
    </div>
  );
};

export default GeneralInfoProfile;
