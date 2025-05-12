"use client";
import Image from "next/image";
import React from "react";
import image from "@/assets/girl.jpg";
import dayjs from "dayjs";
import { FiBookmark, FiCopy } from "react-icons/fi";
import { useTranslations } from "next-intl";
import ViewContact from "./ViewContact";

interface IProps {
  bioDataNo: number;
}

const data = {
  statusCode: 200,
  status: "success",
  message: "BioData retrieved successfully",
  data: {
    _id: "67fc068da8a5af9875132620",
    bioDataNo: "SM-003",
    isLived: false,
    view: 73,
    completedSteps: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    isBlocked: false,
    profileStatus: "verified",
    createdAt: "2025-04-13T18:46:37.065Z",
    updatedAt: "2025-04-27T06:04:08.957Z",
    __v: 0,
    generalInformation: {
      gender: "male",
      dateOfBirth: "2000-10-01T00:00:00.000Z",
      height: "5.1",
      weight: 75,
      skin: "fair",
      nationality: "bangladesh",
      maritalStatus: "never_married",
      _id: "680169094494384faf5b83e0",
    },
    address: {
      present_address: {
        full: "Lakshmipur Sadar, Lakshmipur, Chattogram, Bangladesh",
        area: "হামছাদী, কাজির দিঘির পাড়,  দালাল বাজার,লক্ষ্মীপুর",
        _id: "67fe35d2291beb5fc8fa7a70",
      },
      permanent_address: {
        full: "Dhaka North City Corporation, Dhaka, Dhaka, Bangladesh",
        area: "Mirpur 1",
        _id: "67fe35d2291beb5fc8fa7a71",
      },
      grow_up: "নিজ বাড়িতেই",
      _id: "67fe35d2291beb5fc8fa7a6f",
    },
    educationalQualifications: {
      ssc_passing_year: 2018,
      ssc_group: "Science",
      ssc_result: "A+",
      hsc_passing_year: 2020,
      hsc_group: "Science",
      hsc_result: "A",
      diploma_subject: "Computer Engineering",
      diploma_institution: "Dhaka Polytechnic Institute",
      diploma_passing_year: 2022,
      graduation_subject: "B.Sc. in Computer Science",
      graduation_institution: "University of Dhaka",
      graduation_year: "2025",
      _id: "67fe39d8510b4c7a5fe4a950",
    },
    familyInformation: {
      isParentAlive: "Both alive",
      fatherProfession: "Businessman",
      isMotherAlive: "Yes",
      motherProfession: "Homemaker",
      howManyBrothers: 2,
      brothersInformation: "One is an engineer, another is a student.",
      howManySisters: 1,
      sistersInformation: "She is married and lives abroad.",
      professionOfUncles: "Teachers and small business owners",
      familyFinancialStatus: "middle_class",
      descriptionOfFinancialCondition:
        "We have a stable financial condition with moderate income sources.",
      familyReligiousCondition:
        "Practicing Muslims, regular in prayers and religious values.",
      _id: "67fe5d839b77eb4e7517d9c7",
    },
    personalInformation: {
      clothingOutside:
        "শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়। শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়।শার্ট, প্যান্ট, পাঞ্জাবি এবং টুপি প্রায় সবসময় পড়া হয়",
      wearingNiqabSince: "2019",
      praysFiveTimes: true,
      missedPrayersPerWeek: 0,
      compliesWithMahram: true,
      canReciteQuranCorrectly: true,
      fiqhFollowed: "Hanafi",
      watchesOrListensToMedia: "Only Islamic content occasionally",
      mentalOrPhysicalDiseases: "None",
      involvedInSpecialWork: "Teaching at an Islamic school",
      beliefsAboutShrine: "Do not believe in seeking help from shrines",
      islamicBooksRead: [
        "Riyad-us-Saliheen",
        "Tafsir Ibn Kathir",
        "Fortress of the Muslim",
      ],
      islamicScholarsPreferred: [
        "Mufti Menk",
        "Nouman Ali Khan",
        "Dr. Zakir Naik",
      ],
      hobbiesAndInterests: [
        "Reading Islamic literature",
        "Memorizing Quran",
        "Calligraphy",
      ],
      _id: "67fe75fa18510a6e9dc54b69",
    },
    occupation: {
      occupation: "Software Engineer",
      monthlyIncome: 3500,
      descriptionOfProfession:
        "Responsible for developing and maintaining web applications.",
      _id: "67fe7e41f229fbcf35d301c7",
    },
    marriageRelatedInformation: {
      doYouAgreeWithParents: "Yes",
      willingToWorkAfterMarriage: "Yes, if circumstances allow",
      wantToContinueStudyAfterMarriage:
        "Yes, I plan to pursue higher education",
      whyAreYouGettingMarried: "To build a supportive and loving partnership",
      _id: "67fe85d8cad8379f1ccec848",
    },
    expectedPartner: {
      age: "22-28",
      complexion: ["fair", "bright_brown"],
      height: "5'4\" - 5'8\"",
      educationalQualification: "Bachelor's degree or higher",
      district: "Dhaka",
      maritalStatus: ["never_married"],
      profession: "Software Engineer",
      financialCondition: "Middle class or above",
      specialExpectationsOrRequests: "Should be respectful and open-minded",
      _id: "67fe89887c23adeab2e59036",
    },
    agreement: {
      parentsAwareOfRegistration: true,
      confirmTruthOfProvidedInformation: true,
      agreeToLegalResponsibilityForFalseInfo: true,
      _id: "67fe8a3f3ef99a0e5ada17ee",
    },
    contact: {
      brideName: "Fatima Rahman",
      guardianPhoneNumber: "+8801712345678",
      relationWithGuardian: "Father",
      emailUsedForRegistration: "fatima.rahman@example.com",
      _id: "67fe8b0f3ef99a0e5ada17f2",
    },
  },
};
const { data: bioData } = data;

const BioData = ({}: IProps) => {
  const t = useTranslations();

  const sections = [
    {
      title: t("biodata.sections.general_information"),
      data: bioData.generalInformation,
    },
    {
      title: t("biodata.sections.address"),
      data: {
        [t(
          "biodata.address.present_address"
        )]: `${bioData.address.present_address.full}\n${bioData.address.present_address.area}`,
        [t(
          "biodata.address.permanent_address"
        )]: `${bioData.address.permanent_address.full}\n${bioData.address.permanent_address.area}`,
        [t("biodata.address.grow_up")]: bioData.address.grow_up,
      },
    },
    {
      title: t("biodata.sections.educational_qualifications"),
      data: bioData.educationalQualifications,
    },
    {
      title: t("biodata.sections.family_information"),
      data: bioData.familyInformation,
    },
    {
      title: t("biodata.sections.personal_information"),
      data: bioData.personalInformation,
    },
    {
      title: t("biodata.sections.occupation_info"),
      data: bioData.occupation,
    },
    {
      title: t("biodata.sections.marriage_related"),
      data: bioData.marriageRelatedInformation,
    },
    {
      title: t("biodata.sections.expected_partner"),
      data: bioData.expectedPartner,
    },
    {
      title: t("biodata.sections.agreement"),
      data: bioData.agreement,
    },
    {
      title: t("biodata.sections.contact"),
      data: bioData.contact,
    },
  ];

  const renderValue = (value: any): string | React.ReactNode => {
    if (Array.isArray(value)) {
      return value.join(", ");
    }
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    if (value === null || value === undefined) {
      return "";
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

  const renderGeneralInfo = () => {
    return (
      <div className="w-full mx-auto mb-8">
        <div className="bg-purple-500 rounded-md relative pt-16">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2">
            <div className="rounded-full border-4 border-purple-500 bg-white w-32 h-32">
              <Image
                src={image}
                alt="Profile"
                className="object-cover w-full h-full rounded-full"
                width={128}
                height={128}
                priority
              />
            </div>
          </div>

          <div className="text-center text-white text-xl font-semibold mt-12 mb-6">
            {t("biodata.general.biodata_no")} : {bioData.bioDataNo}
          </div>

          <div className="w-full">
            {Object.entries(bioData.generalInformation)
              .filter(([key]) => key !== "_id")
              .map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex border-t border-purple-200 ${
                    index % 2 === 0 ? "bg-purple-600" : ""
                  }`}
                >
                  <div className="w-1/2 p-3 text-white font-medium capitalize border-r border-purple-400">
                    {t(`biodata.general.${key}`)}
                  </div>
                  <div className="w-1/2 p-3 text-white capitalize">
                    {renderValue(value)}
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-center gap-4 p-4 border-t border-purple-400">
          {/* Copy Biodata Button */}
          <button className="flex flex-1 justify-center items-center gap-2 py-3 text-white font-semibold rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 cursor-pointer">
            <FiCopy className="h-5 w-5" />
            {t("biodata.actions.copy_bio_link")}
          </button>

          {/* Add to Shortlist Button */}
          <button className="flex flex-1 justify-center items-center gap-2 py-3 bg-purple-100 text-purple-700 font-semibold rounded-md hover:bg-purple-200 transition-all duration-300 cursor-pointer">
            <FiBookmark className="h-5 w-5" />
            {t("biodata.actions.add_to_shortlist")}
          </button>
        </div>
      </div>
    );
  };

  const renderTable = (title: string, data: any, key: number) => {
    return (
      <div className="relative mb-8" key={key}>
        <div className="absolute inset-0 z-0" />
        <table className="w-full border-t-3 border-gray-300 border-separate border-spacing-x-0 border-spacing-0.5 border rounded-sm border-t-gray-800 border-b-0 relative z-10">
          <thead>
            <tr>
              <th
                className="w-full border-gray-300 dark:border-gray-600 py-2 text-center text-2xl font-medium"
                colSpan={2}
              >
                {title}
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data)
              .filter(([key]) => key !== "_id")
              .map(([key, value]) => (
                <tr key={key} className="not-odd:bg-gray-100">
                  <td className="w-1/2 border-x-0 border border-gray-300 p-2 align-top capitalize">
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

  const filteredSections = sections.filter(
    (section) => section.title !== t("biodata.sections.general_information")
  );

  return (
    <div className="m-auto mt-16 mb-8 relative sm:px-14 px-1">
      <div className="sm:flex sm:flex-wrap sm:gap-4">
        <div className="sm:w-[350px]">{renderGeneralInfo()}</div>
        <div className="sm:flex-1 min-w-0">
          {filteredSections.map((section, index) =>
            renderTable(section.title, section.data, index)
          )}
          {/* Conditionally Render  */}
          <ViewContact />
        </div>
      </div>
    </div>
  );
};

export default BioData;
