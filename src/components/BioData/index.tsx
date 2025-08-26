/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { BioDataStatus } from "@/constants/bioData";
import { useGetBioDataByNoQuery } from "@/redux/api/biodata";
import { getUserInfo } from "@/services/auth.service";
import { IUser } from "@/types";
import { useTranslations } from "next-intl";
import FooterStatus from "./FooterStatus";
import GeneralInfoProfile from "./GeneralInfoProfile";
import PriviewBioDataHeader from "./PriviewBioDataHeader";
import ViewContact from "./ViewContact";
import renderValue from "./renderValue";
import { useBiodataSections } from "./useBiodataSections";
interface IProps {
  bioDataNo: string;
  className?: string;
}

const BioData = ({ bioDataNo, className = "" }: IProps) => {
  // const router = useRouter();
  const usrInfo = getUserInfo() as IUser;
  const t = useTranslations();
  const {
    data: bioDataInfo,
    isLoading,
    error,
  } = useGetBioDataByNoQuery({
    bioDataNo,
  });

  const bioData = bioDataInfo?.biodata || {};
  const sections = useBiodataSections({ bioData, bioDataNo:usrInfo?.bioDataNo, t });
  const profileStatus = bioDataInfo?.biodata?.profileStatus;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("biodataInfo", bioDataInfo?.biodata);

  if (error) {
    return <div>Error: {(error as any)?.message}</div>;
  }

  const renderTable = (title: string, data: any, key: number) => {
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    return (
      <div className='relative mb-8' key={key}>
        <div className='absolute inset-0 z-0' />
        <table className='w-full border-t-3 border-gray-300 border-separate border-spacing-x-0 border-spacing-0.5 border rounded-sm border-t-gray-800 border-b-0 relative z-10'>
          <thead>
            <tr>
              <th
                className='w-full border-gray-300 dark:border-gray-600 py-2 text-center text-2xl '
                colSpan={2}>
                {title}
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data)
              .filter(([key]) => key !== "_id")
              .filter(([key, value]) => value !== null && value !== undefined)
              .map(([key, value]) => (
                <tr key={key} className='not-odd:bg-gray-100'>
                  <td className='w-1/2 border-x-0 border  border-gray-300 p-2 align-top dark:border-gray-600 '>
                    {key}
                  </td>
                  <td className='w-1/2 border align-top border-gray-300 border-r-0 p-2'>
                    {renderValue(value)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  const filteredSections = sections
    .filter(
      (section) => section.title !== t("biodata.sections.general_information")
    )
    .filter((section) => {
      const data = section.data;

      if (typeof data === "object" && data !== null) {
        // Check all keys except _id
        const meaningfulKeys = Object.keys(data).filter((key) => key !== "_id");

        return meaningfulKeys.some((key) => {
          const value = data[key];
          if (Array.isArray(value)) {
            return value.length > 0;
          } else if (typeof value === "object" && value !== null) {
            return Object.keys(value).length > 0;
          } else {
            return value !== undefined && value !== null && value !== "";
          }
        });
      }

      return true;
    });

  console.log({ filteredSections });
  return (
    <div className={`m-auto mt-16 mb-8  ${className}  px-1`}>
      <div className='sm:flex sm:flex-wrap sm:gap-4 relative'>
        {usrInfo?.bioDataNo === bioDataNo && (
          <PriviewBioDataHeader profileStatus={profileStatus} />
        )}
        <div className='sm:w-[350px] md:sticky md:top-[100px]   h-fit'>
          <GeneralInfoProfile
            general_information={bioData?.general_information}
            profileStatus={profileStatus}
            bioDataNo={bioData?.bioDataNo}
            usrInfo={usrInfo}
          />
        </div>
        <div className='sm:flex-1 min-w-0 '>
          {filteredSections.map((section, index) =>
            renderTable(section.title, section.data, index)
          )}
          <div className='text-center'>
            {profileStatus !== BioDataStatus.VERIFIED && (
              <FooterStatus
                bioDataInfo={bioDataInfo}
                usrInfo={usrInfo}
                bioDataNo={bioDataNo}
                filterLength={filteredSections?.length || 0}
              />
            )}
          </div>

          {/* Conditionally Render  */}
          {!bioData?.contact && BioDataStatus.VERIFIED === profileStatus && (
            <ViewContact bioDataNo={bioDataNo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BioData;
