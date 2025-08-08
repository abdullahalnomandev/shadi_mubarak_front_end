"use client";

import VideoPlayerButton from "@/components/UI/VideoPlayerButton";
import { BioDataStatus } from "@/constants/bioData";
import { useUpdateProfileMutation } from "@/redux/api/biodata";
import { useGetUserQuery } from "@/redux/api/user";
import { useRouter } from "next/navigation";

const CreateBiodataCTA = () => {
  const router = useRouter();
  const { data: userData } = useGetUserQuery();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();

  const handleUpdateStatus = () => {
    try {
      router.push("/user/edit-biodata");
      // Fire-and-forget update
      updateProfile({ profileStatus: BioDataStatus.INCOMPLETE }).catch(
        console.error
      );
    } catch (err) {
      console.error("Failed to update profile status", err);
    }
  };

  if (userData?.user?.bioData?.profileStatus !== BioDataStatus.NOT_STARTED) {
    return null;
  }

  return (
    <div className='flex flex-col items-center gap-4 mb-6 w-full max-w-lg mx-auto'>
      <button
        type='button'
        onClick={handleUpdateStatus}
        disabled={isLoading}
        className='w-full py-3 px-6 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50'>
        <span role='img' aria-label='edit' className='text-xl'>
          📝
        </span>
        Create Your Biodata
      </button>
      <p className='text-sm text-gray-600 dark:text-slate-300'>
        <span className='font-medium text-emerald-600'>Completely free</span> —
        start building your biodata now!
      </p>
      <div className='w-full'>
        <VideoPlayerButton
          title='How to create biodata'
          videoId='RHuVlgjwOHA'
        />
      </div>
    </div>
  );
};

export default CreateBiodataCTA;
