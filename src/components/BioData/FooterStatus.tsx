import { BioDataStatus } from "@/constants/bioData";
import { IUser } from "@/types";
import { getBioDataStatusLabel } from "@/utils/biodata-status";
import Link from "next/link";

const FooterStatus = ({
  bioDataInfo,
  usrInfo,
  bioDataNo,
  filterLength,
}: {
  bioDataInfo: any;
  usrInfo: IUser;
  bioDataNo: string;
  filterLength: number;
}) => {
  const profileStatus = bioDataInfo?.biodata?.profileStatus;

  return (
    <>
      {usrInfo?.bioDataNo === bioDataNo && filterLength ? (
        <p className='text-sm text-red-600'>
          Your biodata is{" "}
          <span
            className={`text-xs font-medium px-3 py-0.5 rounded-full border ${
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
                : "text-green-800 bg-green-100 border-green-300"
            }`}>
            {getBioDataStatusLabel(profileStatus)}
          </span>
          <br />
          {profileStatus !== BioDataStatus.PENDING && (
            <span className='text-red-600'>
              Please{" "}
              <Link
                href='/user/edit-biodata'
                className='text-blue-600 underline'>
                complete your biodata
              </Link>{" "}
              to proceed.
            </span>
          )}
        </p>
      ) : (
        <p className='text-md text-red-700 mt-2'>
          This biodata is currently{" "}
          <span
            className={`text-xs font-medium px-3 py-0.5 rounded-full border ${
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
                : "text-green-800 bg-green-100 border-green-300"
            }`}>
            {getBioDataStatusLabel(profileStatus)}
          </span>
          <br />
          So you can’t view the contact details.
        </p>
      )}
    </>
  );
};

export default FooterStatus;
