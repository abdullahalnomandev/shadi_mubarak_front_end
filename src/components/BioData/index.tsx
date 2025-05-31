"use client";
import Image from "next/image";
import image from "@/assets/girl.jpg";
import dayjs from "dayjs";
import { FiBookmark, FiCopy } from "react-icons/fi";
import { useTranslations } from "next-intl";
import ViewContact from "./ViewContact";
import { useGetBioDataByNoQuery } from "@/redux/api/biodata";
import { getUserInfo } from "@/services/auth.service";
import { IUser } from "@/types";
import { message } from "antd";
import AntModal from "../UI/AntModal";
import { useState } from "react";
import {
  useAddFavoriteListMutation,
  useDeleteFavoriteListMutation,
  useGetFavoriteOneByIdQuery,
} from "@/redux/api/favoriteList";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";

interface IProps {
  bioDataNo: string;
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

const BioData = ({ bioDataNo }: IProps) => {
  // const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const t = useTranslations();
  const usrInfo = getUserInfo() as IUser;
  const {
    data: bioDataInfo,
    isLoading,
    error,
  } = useGetBioDataByNoQuery({
    arg: {
      userId: usrInfo?.id,
    },
    bioDataNo,
  });
  const [addFavoriteList, { isLoading: isFavoriteListLoading }] =
    useAddFavoriteListMutation();
  const { data: visitedData } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );
  const { data } = useGetFavoriteOneByIdQuery({ likedPersonId: bioDataNo });
  const [deleteFavoriteList, { isLoading: isRemoveFavoriteListLoading }] =
    useDeleteFavoriteListMutation();

  const bioData = bioDataInfo?.biodata || {};
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log("biodataInfo", !!bioDataInfo?.biodata?.contact);

  if (error) {
    return <div>Error: {(error as any)?.message}</div>;
  }

  const sections = [
    {
      title: t("biodata.sections.general_information"),
      data: bioData.general_information || {},
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
      title: t("biodata.sections.contact"),
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
      value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
    ) {
      return dayjs(value).startOf("month").format("D MMMM, YYYY");
    }
    return value.toString();
  };
  // console.log("router", window.location.origin + window.location.pathname);
  const location = window.location;
  console.log("favorite", data?.favorite?._id);
  const renderGeneralInfo = () => {
    if (!bioData.general_information) {
      return null;
    }

    const handleAddToFavoriteList = async () => {
      try {
        await addFavoriteList({
          likedPersonBioNo: bioDataNo,
        });
        message.success("Added to favorite list");
        setIsModalOpen(false);
      } catch (error) {
        message.error((error as any)?.message || "Something went wrong");
      }
    };

    const handleRemoveFromFavoriteList = async () => {
      try {
        await deleteFavoriteList({
          likedPersonBioNo: data?.favorite?._id,
        });
        message.success("Removed from favorite list");
        setIsModalOpen(false);
      } catch (error) {
        message.error((error as any)?.message || "Something went wrong");
      }
    };

    console.log({ visitedData });

    return (
      <div className='w-full mx-auto mb-8'>
        <div className='bg-purple-500 rounded-md relative pt-16'>
          <div className='absolute -top-10 left-1/2 -translate-x-1/2'>
            <div className='rounded-full border-4 border-purple-500 bg-white !w-26 !h-26'>
              <Image
                src={image}
                alt='Profile'
                className='object-cover w-full h-full rounded-full'
                width={50}
                height={50}
                priority
              />
            </div>
          </div>

          <div className='text-center text-white text-xl font-semibold mt-4 mb-6'>
            {t("biodata.general.biodata_no")} : {bioData.bioDataNo}
          </div>

          <div className='w-full'>
            {Object.entries(bioData.general_information)
              .filter(([key]) => key !== "_id")
              .map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex border-t border-purple-200 ${
                    index % 2 === 0 ? "bg-purple-600" : ""
                  }`}>
                  <div className='w-1/2 p-3 text-white font-medium capitalize border-r border-purple-400'>
                    {t(`biodata.general.${key}`)}
                  </div>
                  <div className='w-1/2 p-3 text-white capitalize'>
                    {renderValue(value)}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Action Buttons */}
        <div className='flex justify-center gap-4 p-4 border-t border-purple-400'>
          {/* Copy Biodata Button */}
          <button
            className='flex flex-1 justify-center items-center gap-2 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 cursor-pointer'
            onClick={async () => {
              await navigator.clipboard.writeText(
                location.origin + location.pathname
              );
              message.success("Biodata link copied!");
            }}>
            <FiCopy className='h-5 w-5' />
            {t("biodata.actions.copy_bio_link")}
          </button>

          {/* Add to Shortlist Button */}
          <button
            className='flex flex-1 justify-center items-center gap-2 py-3 bg-purple-100 text-purple-700 font-semibold rounded-md hover:bg-purple-200 transition-all duration-300 cursor-pointer'
            onClick={() => setIsModalOpen(true)}>
            <FiBookmark className='h-5 w-5' />
            {!!data?.favorite
              ? "Remove from favorite list"
              : t("biodata.actions.add_to_shortlist")}
          </button>
          <AntModal
            title={`${
              !!data?.favorite
                ? "Would you like to remove from favorite list"
                : "Would you like to add this biodata to your shortlist"
            }`}
            okText='Yes'
            cancelText='Cancel'
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={
              !!data?.favorite
                ? handleRemoveFromFavoriteList
                : handleAddToFavoriteList
            }
            confirmLoading={
              !!data?.favorite
                ? isRemoveFavoriteListLoading
                : isFavoriteListLoading
            }>
            <p>Are you sure?</p>
          </AntModal>
        </div>
      </div>
    );
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

  const filteredSections = sections.filter(
    (section) => section.title !== t("biodata.sections.general_information")
  );

  return (
    <div className='m-auto mt-16 mb-8 relative sm:px-14 px-1'>
      <div className='sm:flex sm:flex-wrap sm:gap-4'>
        <div className='sm:w-[350px]'>{renderGeneralInfo()}</div>
        <div className='sm:flex-1 min-w-0'>
          {filteredSections.map((section, index) =>
            renderTable(section.title, section.data, index)
          )}
          {/* Conditionally Render  */}
          {!bioDataInfo?.biodata?.contact && (
            <ViewContact bioDataNo={bioDataNo} />
          )}
        </div>
      </div>
    </div>
  );
};

export default BioData;
