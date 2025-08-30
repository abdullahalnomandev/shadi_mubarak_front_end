"use client";
import profileImage from "@/assets/boy.jpg";
import { BioDataStatus } from "@/constants/bioData";
import { useGetUserQuery } from "@/redux/api/user";
import { getBioDataStatusLabel } from "@/utils/biodata-status";
import { Progress, Tooltip } from "antd";
import Image from "next/image";
import ProfileStatusAction from "./ProfileStatusAction";

const SidebarProfile = () => {
  const { data: userData } = useGetUserQuery({});

  const completedSteps = (userData?.user as any)?.bioData?.completedSteps;

  const totalSteps = 10;
  const basePercent = 15;
  const maxPercent = 100;
  const stepIncrement = (maxPercent - basePercent) / totalSteps;
  const completedCount = completedSteps?.length;
  const profileStatus = (userData?.user as any)?.bioData?.profileStatus;

  const percent = Math.min(
    basePercent + stepIncrement * completedCount,
    maxPercent
  );

  return (
    <>
      <div className='max-w-xs mx-auto mb-1 border-b border-gray-300  p-4 pt-1 bg-white'>
        {/* Profile Image */}
        <div className='flex justify-center mb-4'>
          <div className='w-20 h-20 rounded-full overflow-hidden border-2 border-purple-600 shadow'>
            <Image
              src={profileImage}
              alt='Profile'
              className='object-cover w-full h-full'
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* Status */}
        <div className='flex justify-between items-center mt-4'>
          <span className='text-sm font-medium text-gray-700'>
            Biodata Status:
          </span>
          <span
            className={`text-xs font-semibold px-3 py-0.5 rounded-full border ${
              profileStatus === BioDataStatus.NOT_STARTED
                ? "text-gray-800 bg-gray-100 border-gray-300"
                : profileStatus === BioDataStatus.INCOMPLETE
                ? "text-orange-800 bg-orange-100 border-orange-300"
                : profileStatus === BioDataStatus.NOT_SUBMITTED
                ? "text-blue-800 bg-blue-100 border-blue-300"
                : profileStatus === BioDataStatus.PENDING
                ? "text-yellow-800 bg-yellow-100 border-yellow-300"
                : profileStatus === BioDataStatus.REJECTED
                ? "text-red-800 bg-red-100 border-red-300"
                : "text-green-800 bg-green-100 border-green-300" // for verified status
            }`}>
            {getBioDataStatusLabel(profileStatus)}
          </span>
        </div>
        {/* Progress & Tip */}
        <div className='mb-2'>
          <Tooltip title='Biodata completion: 50%' placement='bottomRight'>
            <Progress
              percent={percent}
              status='active'
              strokeColor={{
                from: "#06b6d4",
                to: "#3b82f6",
              }}
              percentPosition={{
                align: "end",
                type: "outer",
              }}
              showInfo={true}
            />
          </Tooltip>
          <p className='text-sm text-gray-500 mt-1'>Complete your profile</p>
        </div>

        {/* Edit Button */}
        <ProfileStatusAction profileStatus={profileStatus} />
      </div>
    </>
  );
};

export default SidebarProfile;

/**
 * 1. Create biodata (not_started)
 * 2. Complite biodata (not_coplited)
 * 3. Submit biodata  (in_progress)
 * 3. My Biodata (completed)
 */
