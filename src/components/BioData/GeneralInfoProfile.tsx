/* eslint-disable @typescript-eslint/no-unused-vars */

import profileImage from "@/assets/boy.jpg";
import { IUser } from "@/types";
import { message } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { FiCopy } from "react-icons/fi";
import AddToFavoriteList from "./AddToFavoriteList";

// Dummy fallback for renderValue function
const renderValue = (value: any) => {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return value ?? "N/A";
};

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

  // 🔄 Replace the old renderValue with this one
  const renderValue = (value: any) => {
    // 1. Booleans → “Yes” / “No”
    if (typeof value === "boolean") return value ? "Yes" : "No";

    // 2. ISO‑8601 date strings (e.g. 2025‑07‑04T18:00:00.000Z) → local date
    if (
      typeof value === "string" &&
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value)
    ) {
      const date = new Date(value);
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    // 3. Fallback
    return value ?? "N/A";
  };

  return (
    <div className='w-full mx-auto mb-8'>
      <div className='bg-purple-500 rounded-md relative pt-16'>
        <div className='absolute -top-9 left-1/2 -translate-x-1/2'>
          <div className='rounded-full border-4 border-purple-500 bg-white w-26 h-26'>
            <Image
              src={profileImage}
              alt='Shadi Mubarak '
              className='object-cover w-full h-full rounded-full'
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        <div className='text-center text-white text-lg font-semibold my-3 '>
          {t("biodata.general.biodata_no")} : {bioDataNo}
        </div>

        <div className='w-full'>
          {Object.entries(general_information)
            .filter(([key]) => key !== "_id")
            .map(([key, value], index) => (
              <div
                key={key}
                className={`flex border-t border-purple-200 ${
                  index % 2 === 0 ? "bg-purple-600" : ""
                }`}>
                <div className='w-1/2 p-3 text-white font-medium capitalize border-r border-purple-400 text-sm'>
                  {t(`biodata.general.${key}`)}
                </div>
                <div className='w-1/2 p-3 text-white capitalize text-sm'>
                  {renderValue(value)}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-center gap-4 p-2 border-t border-purple-400'>
        <button
          className='flex flex-1 justify-center items-center gap-2 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 cursor-pointer text-sm'
          onClick={async () => {
            await navigator.clipboard.writeText(
              `${window.location.origin}/biodata/${bioDataNo}`
            );
            message.success("Biodata link copied!");
          }}>
          <FiCopy className='h-4 w-4' />
          {t("biodata.actions.copy_bio_link")}
        </button>

        {/* <button
          className='flex flex-1 justify-center items-center gap-2 py-3 bg-purple-100 text-purple-700 font-semibold rounded-md hover:bg-purple-200 transition-all duration-300 cursor-pointer'
          onClick={() => setIsModalOpen(true)}>
          <FiBookmark className='h-5 w-5' />
          {!!(data as any)?.favorite
            ? "Remove from favorite list"
            : t("biodata.actions.add_to_shortlist")}
        </button> */}
        {usrInfo?.bioDataNo === bioDataNo ? null : (
          <AddToFavoriteList bioDataNo={bioDataNo} />
        )}
        {/* <ProfileStatusAction profileStatus={profileStatus} /> */}
      </div>
    </div>
  );
};

export default GeneralInfoProfile;
