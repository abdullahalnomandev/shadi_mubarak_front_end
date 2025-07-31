/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import AntModal from "@/components/UI/AntModal";
import { BioDataStatus } from "@/constants/bioData";
import { biodataSteps } from "@/constants/global";
import {
  useGetBioDataByNoQuery,
  useUpdateBiodataMutation,
  useUpdateProfileMutation,
} from "@/redux/api/biodata";
import { getUserInfo } from "@/services/auth.service";
import { IUser } from "@/types";
import { SyncOutlined } from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import { FormProvider, useForm } from "react-hook-form";
import { IoIosArrowRoundBack } from "react-icons/io";
import * as yup from "yup";
import { getValidationSchema } from "./getValidationSchema";
interface ISteps {
  title: string;
  content: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  handleUserSubmit?: (data: unknown) => Promise<void>;
}

// Utility to get error message from unknown
const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : "An unexpected error occurred";

// Get last step from completed list
const getLastCompletedStep = (completed: number[]) => {
  if (!Array.isArray(completed) || completed.length === 0) return 0;
  return completed.slice(-1)[0];
};

// Submit current step data
const submitStepData = async (
  current: number,
  data: any,
  updateBiodata: ReturnType<typeof useUpdateBiodataMutation>[0]
) => {
  const stepKey = biodataSteps[current + 1];
  const stepData = data[stepKey];

  if (!stepData) throw new Error("No data to update");

  await updateBiodata({
    stepNumber: current + 1,
    biodataStepInfo: { [stepKey]: stepData },
  });
};

const StepperForm = ({ steps }: IStepsProps) => {
  const { bioDataNo, id } = getUserInfo() as IUser;
  const router = useRouter();

  const { data: bioDataInfo } = useGetBioDataByNoQuery({
    arg: { userId: id },
    bioDataNo,
  });

  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
  const [isLastStep, setIsLastStep] = useState(false);
  const [contactData, setContactData] = useState<any>(null);
  const validationSchema = useMemo(
    () => getValidationSchema(current + 1),
    [current]
  ) as yup.AnyObjectSchema;

  const methods = useForm({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset, watch } = methods;
  console.log("watch", watch());

  const [updateBiodata, { isLoading: isFetching }] = useUpdateBiodataMutation();
  const [updateProfile] = useUpdateProfileMutation();

  // Auto-scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current]);

  // Prefill data and steps from API
  useEffect(() => {
    if (bioDataInfo?.biodata) {
      reset(bioDataInfo.biodata);
      const stepsFromAPI = bioDataInfo.biodata.completedSteps ?? [];
      console.log({ stepsFromAPI });
      setCompletedSteps([0, ...stepsFromAPI]);

      if (stepsFromAPI.length === 10) {
        if (isInitialLoad && current !== 9) {
          setCurrent((prev) => prev + 1);
        } else {
          setIsInitialLoad(true);
        }
      } else {
        setCurrent(
          stepsFromAPI?.length === 10 ? 9 : getLastCompletedStep(stepsFromAPI)
        );
      }
    }
  }, [bioDataInfo, reset]);

  const prev = () => {
    setCurrent((prev) => Math.max(0, prev - 1));
  };

  const handleStepClick = (stepNumber: number) => {
    const maxCompleted = Math.max(...completedSteps, 0);
    if (stepNumber <= maxCompleted) {
      setCurrent(stepNumber);
    }
  };
  console.log({ bioDataInfo });

  const handleSubmitBioData = async (type: "priview" | "submit") => {
    const stepKey = biodataSteps[current + 1];
    const stepData = contactData[stepKey];

    if (!stepData) throw new Error("No data to update");

    if (type === "submit") {
      message.success("Biodata submitted successfully");
      // router.push("/user/dashboard");
      await updateBiodata({
        stepNumber: current + 1,
        biodataStepInfo: { [stepKey]: stepData },
      });
      updateProfile({ profileStatus: BioDataStatus.PENDING }).catch(
        console.error
      );
    } else {
      // router.push("/user/my-biodata");
      await updateBiodata({
        stepNumber: current + 1,
        biodataStepInfo: { [stepKey]: stepData },
      });
      updateProfile({ profileStatus: BioDataStatus.NOT_SUBMITTED }).catch(
        console.error
      );
    }
    setIsLastStep(false);
  };
  const onHandleSubmit = async (data: any) => {
    try {
      const isAlreadyCompleted = completedSteps.includes(current);

      if (!isAlreadyCompleted) {
        setCompletedSteps((prev) => [...prev, current]);
      }

      const isLastStep = current === steps?.length - 1;

      // UPDATE STATUS
      if (isLastStep) {
        setIsLastStep(true);
        setContactData(data);
      } else {
        await submitStepData(current, data, updateBiodata);
        if (bioDataInfo?.biodata?.profileStatus === BioDataStatus.PENDING) {
          updateProfile({ profileStatus: BioDataStatus.NOT_SUBMITTED });
        }
      }

      // // Only move to the next step if it’s not the last and it's not a re-edit
      // if (!isLastStep && !isAlreadyCompleted && !isFetching) {
      //   setCurrent((prev) => prev + 1);
      // } else {
      //   if (current === 9) {
      //     message.success("Biodata submitted successfully");
      //   } else {
      //     message.success("Step saved successfully");
      //   }
      // }
    } catch (error) {
      message.error(getErrorMessage(error));
    }
  };

  const stepperStyleConfig = useMemo(
    () => ({
      activeBgColor: "#091C79",
      activeTextColor: "#ffffff",
    }),
    []
  );

  const connectorStyleConfig = useMemo(
    () => ({
      activeColor: "#091C79",
      completedColor: "#3051F2",
    }),
    []
  );

  if (bioDataInfo?.biodata?.profileStatus === BioDataStatus.NOT_STARTED) {
    return null;
  }
  console.log("bi", bioDataInfo?.biodata?.profileStatus);
  console.log({ current });
  return (
    <div className='p-4 sm:p-6'>
      <AntModal
        title='Complete Your Biodata Submission'
        isOpen={isLastStep}
        onClose={() => setIsLastStep(false)}
        styles={{
          content: {
            backgroundColor: "#F9FAFB",
            background: "linear-gradient(to bottom right, #F3F4F6, #E5E7EB)",
          },
          header: {
            backgroundColor: "#F9FAFB",
            background: "linear-gradient(to bottom right, #F3F4F6, #E5E7EB)",
          },
        }}
        footer={null}>
        <div className='flex flex-col items-center p-6 rounded-lg'>
          <h1 className='text-2xl font-semibold text-gray-900 mb-4'>
            Submit Your Biodata
          </h1>
          <div className='w-12 h-1 bg-indigo-500 rounded mb-6'></div>
          <p className='text-gray-600 text-center mb-8 leading-relaxed max-w-md'>
            Ready to submit your biodata? Click{" "}
            <strong>&apos;Submit Now&apos;</strong> to proceed, or choose{" "}
            <strong>&apos;Submit Later&apos;</strong> if you&apos;d like to
            review it again.
          </p>
          <div className='flex gap-4'>
            <button
              onClick={() => handleSubmitBioData("priview")}
              className='px-6 py-2 bg-white border cursor-pointer border-gray-300 hover:bg-gray-100 text-gray-700 rounded-md transition-all duration-300'>
              Submit Later
            </button>
            <button
              onClick={() => handleSubmitBioData("submit")}
              className='flex items-center cursor-pointer justify-center gap-2 px-6 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-500 transition duration-300'>
              Submit Now
            </button>
          </div>
        </div>
      </AntModal>

      <Stepper
        activeStep={current}
        connectorStateColors
        connectorStyleConfig={connectorStyleConfig as any}
        styleConfig={stepperStyleConfig as any}
        style={{ padding: 0 }}>
        {steps.map((item, index) => (
          <Step
            key={index}
            label={item.title}
            onClick={() => handleStepClick(index)}
            completed={completedSteps.includes(index)}
            style={{
              backgroundColor:
                current === index
                  ? "#091C79"
                  : completedSteps.includes(index)
                  ? "#3051F2"
                  : "#e0e0e0",
              color:
                current === index || completedSteps.includes(index)
                  ? "#ffffff"
                  : "#000000",
            }}
          />
        ))}
      </Stepper>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className='mt-6'>{steps[current]?.content}</div>

          <div className='flex justify-end gap-4 mt-8'>
            {current > 0 && (
              <button
                onClick={prev}
                type='button'
                className='flex items-center justify-center gap-2 px-4 py-2 bg-white border cursor-pointer border-gray-300 hover:bg-gray-100 text-gray-700 rounded-md transition-all duration-300'>
                <IoIosArrowRoundBack /> Previous
              </button>
            )}
            <button
              type='submit'
              disabled={isFetching}
              className='flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition duration-300 shadow cursor-pointer'>
              {isFetching ? (
                <span className='flex items-center gap-2'>
                  <SyncOutlined spin /> Saving...
                </span>
              ) : current === steps?.length - 1 ? (
                "Save & Submit"
              ) : (
                "Save & Next"
              )}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepperForm;
