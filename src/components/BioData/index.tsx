/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { BioDataStatus } from "@/constants/bioData";
import { useGetBioDataByNoQuery } from "@/redux/api/biodata";
import { getUserInfo } from "@/services/auth.service";
import { IUser } from "@/types";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import FooterStatus from "./FooterStatus";
import GeneralInfoProfile from "./GeneralInfoProfile";
import PriviewBioDataHeader from "./PriviewBioDataHeader";
import ViewContact from "./ViewContact";
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
  const profileStatus = bioDataInfo?.biodata?.profileStatus;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("biodataInfo", bioDataInfo?.biodata);

  if (error) {
    return <div>Error: {(error as any)?.message}</div>;
  }

  const sections = [
    {
      title: t("biodata.sections.general_information"),
      data: bioData?.general_information || {},
    },
    {
      title: t("biodata.sections.address"),
      data: bioData.address
        ? {
            [t("biodata.address.present_address")]: bioData.address
              .present_address
              ? `${bioData.address.present_address.full}\n${bioData.address.present_address.area}`
              : "",
            [t("biodata.address.permanent_address")]: bioData.address
              .permanent_address
              ? `${bioData.address.permanent_address.full}\n${bioData.address.permanent_address.area}`
              : "",
            [t("biodata.address.grow_up")]: bioData.address.grow_up || "",
          }
        : {},
    },
    {
      title: t("biodata.sections.educational_qualifications"),
      data: bioData.education || {},
    },
    {
      title: t("biodata.sections.family_information"),
      data: bioData.family_information
        ? {
            [t("biodata.family_information.isParentAlive")]:
              bioData.family_information.isParentAlive,
            [t("biodata.family_information.fatherProfession")]:
              bioData.family_information.fatherProfession,
            [t("biodata.family_information.isMotherAlive")]:
              bioData.family_information.isMotherAlive,
            [t("biodata.family_information.motherProfession")]:
              bioData.family_information.motherProfession,
            [t("biodata.family_information.howManyBrothers")]:
              bioData.family_information.howManyBrothers,
            [t("biodata.family_information.brothersInformation")]:
              bioData.family_information.brothersInformation,
            [t("biodata.family_information.howManySisters")]:
              bioData.family_information.howManySisters,
            [t("biodata.family_information.sistersInformation")]:
              bioData.family_information.sistersInformation,
            [t("biodata.family_information.professionOfUncles")]:
              bioData.family_information.professionOfUncles,
            [t("biodata.family_information.familyFinancialStatus")]:
              bioData.family_information.familyFinancialStatus,
            [t("biodata.family_information.descriptionOfFinancialCondition")]:
              bioData.family_information.descriptionOfFinancialCondition,
            [t("biodata.family_information.familyReligiousCondition")]:
              bioData.family_information.familyReligiousCondition,
          }
        : {},
    },
    {
      title: t("biodata.sections.personal_information"),
      data: bioData.personal_information || {},
    },
    {
      title: t("biodata.sections.occupation_info"),
      data: bioData.occupation || {},
    },
    {
      title: t("biodata.sections.marriage_related"),
      data: bioData.marriage_related_information || {},
    },
    {
      title: t("biodata.sections.expected_partner"),
      data: bioData.expected_partner || {},
    },
    {
      title: t("biodata.sections.agreement"),
      data: bioData.agreement || {},
    },
    {
      title:
        bioDataNo === bioData?.bioDataNo
          ? t("biodata.sections.your_contact")
          : t("biodata.sections.contact"),
      data: bioData.contact || {},
    },
  ];

  const renderValue = (value: any): string | React.ReactNode => {
    if (!value) return "";
    if (Array.isArray(value)) {
      if (
        value.length === 2 &&
        typeof value[0] === "number" &&
        typeof value[1] === "number"
      ) {
        return `${value[0]} - ${value[1]}`;
      }
      return value.join(", ");
    }

    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    // Handle ISO date strings
    if (
      typeof value === "string" &&
      dayjs(value, dayjs.ISO_8601, true).isValid()
    ) {
      // Convert date to local time and format as YYYY-MM-DD
      return dayjs(value).format("YYYY-MM-DD");
    }
    return value.toString();
  };

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
                className='w-full border-gray-300 dark:border-gray-600 py-2 text-center text-2xl font-medium'
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
                  <td className='w-1/2 border-x-0 border border-gray-300 p-2 align-top capitalize'>
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
                filterLength={!!filteredSections?.length}
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
