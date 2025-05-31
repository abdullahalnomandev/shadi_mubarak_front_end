"use client";

import StepperFrom from "@/components/Forms/StepperForm/StepperForm";
import GeneralInfo from "@/components/Forms/UserForms/GeneralInfo";
import { handleBiodataSubmit } from "@/app/actions/biodata-actions";
import Address from "@/components/Forms/UserForms/Address";
import Occupation from "@/components/Forms/UserForms/Occupation";
import Agreement from "@/components/Forms/UserForms/Agreement";
import FamilyInformation from "@/components/Forms/UserForms/FamilyInformation";
import PersonalInformation from "@/components/Forms/UserForms/PersonalInformation";
import ExpectedPartner from "@/components/Forms/UserForms/ExpectedPartner";
import Contact from "@/components/Forms/UserForms/Contact";
import MarriageRelatedInformation from "@/components/Forms/UserForms/MarriageRelatedInformatlion";
import Education from "@/components/Forms/UserForms/Education";

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
  return (
    <div>
      <StepperFrom steps={steps} handleUserSubmit={handleBiodataSubmit} />
    </div>
  );
};

export default EditBioDataPage;
