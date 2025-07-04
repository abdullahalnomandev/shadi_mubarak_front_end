"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";

import { BioDataStatus } from "@/constants/bioData";
import { biodataSteps } from "@/constants/global";
import {
  useGetBioDataByNoQuery,
  useUpdateBiodataMutation,
} from "@/redux/api/biodata";
import { getUserInfo } from "@/services/auth.service";
import { IUser } from "@/types";
import { SyncOutlined } from "@ant-design/icons";
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

  const { data: bioDataInfo } = useGetBioDataByNoQuery({
    arg: { userId: id },
    bioDataNo,
  });

  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [current, setCurrent] = useState<number>(0);
  const [isInitialLoad, setIsInitialLoad] = useState(false);
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

  const [updateBiodata, { isLoading: isFetching }] = useUpdateBiodataMutation();

  // Auto-scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current]);

  // Prefill data and steps from API
  useEffect(() => {
    if (bioDataInfo?.biodata) {
      reset(bioDataInfo.biodata);
      const stepsFromAPI = bioDataInfo.biodata.completedSteps ?? [];
      setCompletedSteps([0, ...stepsFromAPI]);

      if (stepsFromAPI.length === 10) {
        if (isInitialLoad) {
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

  const onHandleSubmit = async (data: any) => {
    try {
      await submitStepData(current, data, updateBiodata);
      const isAlreadyCompleted = completedSteps.includes(current);

      if (!isAlreadyCompleted) {
        setCompletedSteps((prev) => [...prev, current]);
      }

      const isLastStep = current === steps?.length - 1;

      // Only move to the next step if it’s not the last and it's not a re-edit
      if (!isLastStep && !isAlreadyCompleted && !isFetching) {
        setCurrent((prev) => prev + 1);
      } else {
        message.success("Step saved successfully");
      }
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

  return (
    <div className='p-4 sm:p-6'>
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
              <Button
                onClick={prev}
                className='!bg-gray-300 hover:!bg-gray-400'>
                Previous
              </Button>
            )}
            <Button
              type='primary'
              htmlType='submit'
              icon={isFetching ? <SyncOutlined spin /> : undefined}
              className='!bg-[#091C79] hover:!bg-[#14289b]'>
              {current === steps?.length - 1 ? "Submit" : "Save & Next"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepperForm;
