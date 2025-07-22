"use client";
import { BioDataStatus } from "@/constants/bioData";
import { useGetBioDataByNoQuery } from "@/redux/api/biodata";
import { getUserInfo } from "@/services/auth.service";
import { IUser } from "@/types";
import { getBioDataStatusLabel } from "@/utils/biodata-status";
import dayjs from "dayjs";
import { useTranslations } from "next-intl";
import Link from "next/link";
import GeneralInfoProfile from "./GeneralInfoProfile";
import ViewContact from "./ViewContact";

interface IProps {
  bioDataNo: string;
  className?: string;
}

// const data = {
//   statusCode: 200,
//   status: "success",
//   message: "BioData retrieved successfully",
//   data: {
//     _id: "67fc068da8a5af9875132620",
//     bioDataNo: "SM-003",
//     isLived: false,
//     view: 73,
//     completedSteps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//     isBlocked: false,
//     profileStatus: "verified",
//     createdAt: "2025-04-13T18:46:37.065Z",
//     updatedAt: "2025-04-27T06:04:08.957Z",
//     __v: 0,
//     general_information: {
//       gender: "male",
//       dateOfBirth: "2025-05-15T18:00:00.000Z",
//       height: "5.1",
//       weight: 52,
//       skin: "white",
//       maritalStatus: "single",
//       _id: "6827561ac2d3d9807cdc487c",
//     },
//     address: {
//       present_address: {
//         full: "Lakshmipur Sadar, Lakshmipur, Chattogram, Bangladesh",
//         area: "হামছাদী, কাজির দিঘির পাড়,  দালাল বাজার,লক্ষ্মীপুর",
//         _id: "67fe35d2291beb5fc8fa7a70",
//       },
//       permanent_address: {
//         full: "Dhaka North City Corporation, Dhaka, Dhaka, Bangladesh",
//         area: "Mirpur 1",
//         _id: "67fe35d2291beb5fc8fa7a71",
//       },
//       grow_up: "নিজ বাড়িতেই",
//       _id: "67fe35d2291beb5fc8fa7a6f",
//     },
// education: {
//   ssc_passing_year: 2018,
//   ssc_group: "Science",
//   ssc_result: "A+",
//   hsc_passing_year: 2020,
//   hsc_group: "Science",
//   hsc_result: "A",
//   diploma_subject: "Computer Engineering",
//   diploma_institution: "Dhaka Polytechnic Institute",
//   diploma_passing_year: 2022,
//   graduation_subject: "B.Sc. in Computer Science",
//   graduation_institution: "University of Dhaka",
//   graduation_year: "2025",
//   _id: "67fe39d8510b4c7a5fe4a950",
// },
// family_information: {
//   isParentAlive: "yes",
//   fatherProfession: "Govt. Employe",
//   isMotherAlive: "yes",
//   motherProfession: "Housewife",
//   howManyBrothers: 1,
//   brothersInformation: "Bideshi",
//   howManySisters: 2,
//   sistersInformation: "Married",
//   professionOfUncles: "N/A",
//   familyFinancialStatus: "middle_class",
//   descriptionOfFinancialCondition: "Alhamdullah",
//   familyReligiousCondition: "Islam practricing",
//   _id: "68275689c2d3d9807cdc4884",
// },
// personal_information: {
//   clothingOutside:
//     "শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়। শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়।শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়",
//   wearingNiqabSince: "2019",
//   praysFiveTimes: true,
//   missedPrayersPerWeek: 0,
//   compliesWithMahram: true,
//   canReciteQuranCorrectly: true,
//   fiqhFollowed: "Hanafi",
//   watchesOrListensToMedia: "Only Islamic content occasionally",
//   mentalOrPhysicalDiseases: "None",
//   involvedInSpecialWork: "Teaching at an Islamic school",
//   beliefsAboutShrine: "Do not believe in seeking help from shrines",
//   islamicBooksRead: [
//     "Riyad-us-Saliheen",
//     "Tafsir Ibn Kathir",
//     "Fortress of the Muslim",
//   ],
//   islamicScholarsPreferred: [
//     "Mufti Menk",
//     "Nouman Ali Khan",
//     "Dr. Zakir Naik",
//   ],
//   hobbiesAndInterests: [
//     "Reading Islamic literature",
//     "Memorizing Quran",
//     "Calligraphy",
//   ],
//   _id: "67fe75fa18510a6e9dc54b69",
// },
// occupation: {
//   occupation: "Software Engineer",
//   monthlyIncome: 3500,
//   descriptionOfProfession:
//     "Responsible for developing and maintaining web applications.",
//   _id: "67fe7e41f229fbcf35d301c7",
// },
// marriageRelatedInformation: {
//   doYouAgreeWithParents: "Yes",
//   willingToWorkAfterMarriage: "Yes, if circumstances allow",
//   wantToContinueStudyAfterMarriage:
//     "Yes, I plan to pursue higher education",
//   whyAreYouGettingMarried: "To build a supportive and loving partnership",
//   _id: "67fe85d8cad8379f1ccec848",
// },
// expected_partner: {
//   age: "22-28",
//   complexion: ["fair", "bright_brown"],
//   height: "5'4\" - 5'8\"",
//   education: "Bachelor's degree or higher",
//   district: "Dhaka",
//   maritalStatus: ["never_married"],
//   profession: "Software Engineer",
//   financialCondition: "Middle class or above",
//   specialExpectationsOrRequests: "Should be respectful and open-minded",
//   _id: "67fe89887c23adeab2e59036",
// },
// agreement: {
//   parentsAwareOfRegistration: true,
//   confirmTruthOfProvidedInformation: true,
//   agreeToLegalResponsibilityForFalseInfo: true,
//   _id: "67fe8a3f3ef99a0e5ada17ee",
// },
// contact: {
//   brideName: "Fatima Rahman",
//   guardianPhoneNumber: "+8801712345678",
//   relationWithGuardian: "Father",
//   emailUsedForRegistration: "fatima.rahman@example.com",
//   _id: "67fe8b0f3ef99a0e5ada17f2",
// },
//   },
// };
// const { data: bioData } = data;

const BioData = ({ bioDataNo, className = "" }: IProps) => {
  // const router = useRouter();
  const usrInfo = getUserInfo() as IUser;
  const t = useTranslations();
  const {
    data: bioDataInfo,
    isLoading,
    error,
  } = useGetBioDataByNoQuery({
    // arg: {
    //   userId: usrInfo?.id,
    // },
    bioDataNo,
  });

  // const { data: visitedData } = useVisitorData(
  //   { extendedResult: true },
  //   { immediate: true }
  // );

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
      data: bioData.family_information || {},
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
              <>
                {usrInfo?.bioDataNo === bioDataNo &&
                !!filteredSections?.length ? (
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
                    <span className='text-red-600'>
                      Please{" "}
                      <Link
                        href='/user/edit-biodata'
                        className='text-blue-600 underline'>
                        complete your biodata
                      </Link>{" "}
                      to proceed.
                    </span>
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
