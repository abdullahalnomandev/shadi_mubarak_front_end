"use client";

import StepperFrom from "@/components/StepperForm/StepperForm";
import GeneralInfo from "@/components/UserForms/GeneralInfo";
import { handleBiodataSubmit } from "@/app/actions/biodata-actions";
import Address from "@/components/UserForms/Address";
import Occupation from "@/components/UserForms/Occupation";
import Agreement from "@/components/UserForms/Agreement";
import FamilyInformation from "@/components/UserForms/FamilyInformation";
import PersonalInformation from "@/components/UserForms/PersonalInformation";
import ExpectedPartner from "@/components/UserForms/ExpectedPartner";
import Contact from "@/components/UserForms/Contact";
import MarriageRelatedInformation from "@/components/UserForms/MarriageRelatedInformatlion";
import Education from "@/components/UserForms/Education";

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
    title: "Education",
    content: <Education />,
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
