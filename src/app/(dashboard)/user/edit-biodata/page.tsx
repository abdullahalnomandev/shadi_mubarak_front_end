"use client";

import { handleBiodataSubmit } from "@/app/actions/biodata-actions";
import CreateBiodataCTA from "@/components/dashboard/user/CreateBiodataCTA";
import StepperFrom from "@/components/Forms/StepperForm/StepperForm";
import Address from "@/components/Forms/UserForms/Address/Address";
import Agreement from "@/components/Forms/UserForms/Agreement";
import Contact from "@/components/Forms/UserForms/Contact";
import Education from "@/components/Forms/UserForms/Education";
import ExpectedPartner from "@/components/Forms/UserForms/ExpectedPartner";
import FamilyInformation from "@/components/Forms/UserForms/FamilyInformation";
import GeneralInfo from "@/components/Forms/UserForms/GeneralInfo";
import MarriageRelatedInformation from "@/components/Forms/UserForms/MarriageRelatedInformatlion";
import Occupation from "@/components/Forms/UserForms/Occupation";
import PersonalInformation from "@/components/Forms/UserForms/PersonalInformation";
import { BioDataStatus } from "@/constants/bioData";
import { useGetUserQuery } from "@/redux/api/user";

const steps = [
  {
    title: "General Info",
    content: <GeneralInfo />,
  },
  {
    title: "Address",
    content: <Address />,
  },
  {
    title: "Family Information",
    content: <FamilyInformation />,
  },
  {
    title: "Education",
    content: <Education />,
  },
  {
    title: "Personal Information",
    content: <PersonalInformation />,
  },

  {
    title: "Expected Partner",
    content: <ExpectedPartner />,
  },
  {
    title: "Marriage Related Information",
    content: <MarriageRelatedInformation />,
  },
  {
    title: "Occupation",
    content: <Occupation />,
  },
  {
    title: "Agreement",
    content: <Agreement />,
  },
  {
    title: "Contact",
    content: <Contact />,
  },
];

const EditBioDataPage = () => {
  const { data: userData } = useGetUserQuery();

  if (userData?.user?.bioData?.profileStatus === BioDataStatus.NOT_STARTED) {
    return (
      <div className='flex items-center justify-center min-h-[calc(100vh-200px)]'>
        <CreateBiodataCTA />
      </div>
    );
  }

  return (
    <>
      <StepperFrom steps={steps} handleUserSubmit={handleBiodataSubmit} />
    </>
  );
};

export default EditBioDataPage;
