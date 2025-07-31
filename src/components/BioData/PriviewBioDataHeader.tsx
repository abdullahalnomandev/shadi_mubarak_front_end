"use client";

import { BioDataStatus } from "@/constants/bioData";
import { useUpdateProfileMutation } from "@/redux/api/biodata";
import { message } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiEdit, FiSend } from "react-icons/fi";

const PriviewBioDataHeader = ({ profileStatus }: { profileStatus: string }) => {
  const pathname = usePathname();
  const [updateProfile] = useUpdateProfileMutation();

  if (pathname !== "/user/my-biodata") return null;

  const handleUpdateProfile = async () => {
    try {
      const result = await updateProfile({
        profileStatus: BioDataStatus.PENDING,
      });

      if (result) {
        message.success("Biodata submitted successfully");
      }
    } catch (error) {
      console.error("Failed to update profile status:", error);
    }
  };

  return (
    <div className='container mx-auto px-4 pb-6'>
      <div className='flex flex-col md:flex-row justify-between items-center pb-6 gap-4'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-600 text-center md:text-left tracking-tight leading-tight'>
            Preview Biodata
          </h1>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
          <Link href='/user/edit-biodata'>
            <button className='flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300 shadow-sm w-full sm:w-auto min-w-[120px] cursor-pointer hover:scale-105'>
              <FiEdit className='text-lg' />
              Edit More
            </button>
          </Link>
          {profileStatus === BioDataStatus.NOT_SUBMITTED && (
            <button
              className='flex items-center justify-center gap-2 px-4 md:px-6 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow-sm w-full sm:w-auto min-w-[120px] cursor-pointer hover:scale-105'
              onClick={handleUpdateProfile}>
              <FiSend className='text-lg' />
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PriviewBioDataHeader;
