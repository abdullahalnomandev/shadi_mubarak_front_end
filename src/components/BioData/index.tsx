import { BioDataStatus } from "@/constants/bioData";
import { getUserInfo } from "@/services/auth.service";
import { IUser } from "@/types";
import { useTranslations } from "next-intl";
import FooterStatus from "./FooterStatus";
import GeneralInfoProfile from "./GeneralInfoProfile";
import PriviewBioDataHeader from "./PriviewBioDataHeader";
import ViewContact from "./ViewContact";
import renderValue from "./renderValue";
import { useBiodataSections } from "./useBiodataSections";
import Breadcrumb from "../UI/Breadcrumb";

interface IProps {
  bioDataNo: string;
  className?: string;
  bioDataInfo?: any;
}

const BioData = ({ bioDataInfo, bioDataNo, className = "" }: IProps) => {
  const usrInfo = getUserInfo() as IUser;
  const t = useTranslations();

  const bioData = bioDataInfo ?? {};
  const profileStatus = bioDataInfo?.profileStatus;
  const isOwner = bioDataInfo?.bioDataNo === bioDataNo;

  const sections = useBiodataSections({
    bioData,
    bioDataNo: usrInfo?.bioDataNo,
    t,
  });

  console.log(sections);

  // Render table with data
  const renderTable = (title: string, data: any, key: number) => {
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    return (
      <div className="relative mb-8" key={key}>
        <div className="absolute inset-0 z-0" />

        <table className="w-full border-t-3 border-gray-300 border-separate border-spacing-x-0 border-spacing-0.5 border rounded-sm border-t-gray-800 border-b-0 relative z-10">
          <thead>
            <tr>
              <th
                className="w-full border-gray-300 dark:border-gray-600 py-2 text-center text-2xl"
                colSpan={2}
              >
                {title}
              </th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(data)
              .filter(([key]) => key !== "_id")
              .filter(([, value]) => value !== null && value !== undefined)
              .map(([key, value]) => (
                <tr key={key} className="not-odd:bg-gray-100">
                  <td className="w-1/2 border-x-0 border border-gray-300 p-2 align-top dark:border-gray-600">
                    {key}
                  </td>

                  <td className="w-1/2 border align-top border-gray-300 border-r-0 p-2">
                    {renderValue(value)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Filter out sections with no data
  const filteredSections = sections.filter((section) => {
    if (
      section.title === t("biodata.sections.general_information")
    ) {
      return false;
    }

    const data = section.data;

    if (!data || typeof data !== "object") {
      return true;
    }

    return Object.entries(data)
      .filter(([key]) => key !== "_id")
      .some(([, value]) => {
        if (Array.isArray(value)) {
          return value.length > 0;
        }

        if (typeof value === "object" && value !== null) {
          return Object.keys(value).length > 0;
        }

        return value !== undefined && value !== null && value !== "";
      });
  });

  return (
    <>
      <div className="max-w-7xl mx-auto">
        {!isOwner && (
          <Breadcrumb
            items={[
              { label: "Biodatas", href: "/biodatas" },
              { label: "Biodata" },
            ]}
            showHome
          />
        )}
      </div>

      <div className={`m-auto mt-16 mb-8 ${className} px-1`}>
        <div className="sm:flex sm:flex-wrap sm:gap-4 relative">
          {isOwner && (
            <PriviewBioDataHeader profileStatus={profileStatus} />
          )}

          <div className="sm:w-87.5 md:sticky md:top-25 h-fit">
            <GeneralInfoProfile
              general_information={bioData?.general_information}
              profileStatus={profileStatus}
              bioDataNo={bioData?.bioDataNo}
              usrInfo={usrInfo}
              isOwner={isOwner}
            />
          </div>

          <div className="sm:flex-1 min-w-0">
            {filteredSections.map((section, index) =>
              renderTable(section.title, section.data, index)
            )}

            <div className="text-center w-full">
              {profileStatus !== BioDataStatus.VERIFIED && (
                <FooterStatus
                  bioDataInfo={bioDataInfo}
                  owner={isOwner}
                />
              )}
            </div>

            {!bioData?.contact &&
              profileStatus === BioDataStatus.VERIFIED && (
                <ViewContact bioDataNo={bioDataNo} />
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BioData;