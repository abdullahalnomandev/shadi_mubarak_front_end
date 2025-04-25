
'use client';

import StepperFrom from "@/components/StepperForm/StepperForm";
import GeneralInfo from "@/components/UserForms/GeneralInfo";
import { handleBiodataSubmit } from "@/app/actions/biodata-actions";

const steps = [
  {
    title: "General Info",
    content: <GeneralInfo />,
  },
  {
    title: "Address",
    content: "Second-content",
  },
  {
    title: "Family Information",
    content: "Last-content",
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
