"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Button, message } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { Step, Stepper } from "react-form-stepper";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  useGetBioDataByNoQuery,
  useUpdateBiodataMutation,
} from "@/redux/api/biodata";
import { biodataSteps } from "@/constants/global";
import { SyncOutlined } from "@ant-design/icons";
import { getUserInfo } from "@/services/auth.service";
import { getValidationSchema } from "./getValidationSchema";
import { IUser } from "@/types";

interface ISteps {
  title: string;
  content: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  handleUserSubmit?: (data: unknown) => Promise<void>;
}

const StepperForm = ({ steps, handleUserSubmit }: IStepsProps) => {
  const { bioDataNo } = getUserInfo() as IUser;
  const { data: bioDataInfo } = useGetBioDataByNoQuery({
    arg: {},
    bioDataNo,
  });

  // Initialize with empty array instead of [0]
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [current, setCurrent] = useState<number>(0);

  // Update steps when biodata is loaded
  useEffect(() => {
    if (bioDataInfo?.biodata?.completedSteps) {
      const completedStepsArray = bioDataInfo.biodata.completedSteps;
      // Only update if we have completed steps
      if (completedStepsArray.length > 0) {
        setCompletedSteps(completedStepsArray);
        // Get the last completed step or default to 0
        const lastCompletedStep =
          completedStepsArray[completedStepsArray.length - 1];
        setCurrent(lastCompletedStep);
      }
    }
  }, [bioDataInfo]);

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

  const [updateBiodata, { isSuccess, isLoading: isFetching }] =
    useUpdateBiodataMutation();

  useEffect(() => {
    if (bioDataInfo?.biodata) {
      reset(bioDataInfo.biodata);
      setCompletedSteps(
        Array.isArray(bioDataInfo?.biodata?.completedSteps)
          ? [0, ...bioDataInfo.biodata.completedSteps]
          : [0]
      );
      setCurrent((bioDataInfo.biodata.completedSteps || []).slice(-1)[0] ?? 0);
    }
  }, [bioDataInfo, reset]);

  const prev = () => {
    setCurrent((prev) => Math.max(0, prev - 1));
  };

  const handleStepClick = (stepNumber: number) => {
    const maxCompleted = Math.max(...completedSteps, 1);
    if (stepNumber <= maxCompleted) {
      setCurrent(stepNumber);
    }
  };

  const onHandleSubmit = async (data: any) => {
    const stepKey = biodataSteps[current + 1];
    const stepData = data[stepKey];

    if (!stepData) {
      message.error("No data to update");
      return;
    }

    try {
      await updateBiodata({
        stepNumber: current + 1,
        biodataStepInfo: { [stepKey]: stepData },
      });

      if (!completedSteps.includes(current)) {
        setCompletedSteps((prev) => [...prev, current]);
      }

      if (current < steps.length - 1 && !isFetching && current <= 9) {
        setCurrent((prev) => prev + 1);
      }
    } catch (error) {
      message.error(
        error instanceof Error ? error.message : "Failed to submit form"
      );
    }
  };

  console.log("validationSchema", current, validationSchema);
  console.log("watch", watch());
  return (
    <div>
      <Stepper
        connectorStateColors
        activeStep={current}
        connectorStyleConfig={
          {
            activeColor: "#091C79",
            completedColor: "#3051F2",
          } as any
        }
        styleConfig={
          {
            activeBgColor: "#091C79",
            activeTextColor: "#ffffff",
          } as any
        }
        style={{ padding: 0 }}>
        {steps?.map((item, index) => (
          <Step
            key={index}
            label={item.title}
            onClick={() => handleStepClick(index)}
            completed={completedSteps.includes(index)}
            style={{
              backgroundColor:
                current === index && completedSteps.includes(index)
                  ? "#091C79"
                  : completedSteps.includes(index)
                  ? "#3051F2"
                  : undefined,
            }}
          />
        ))}
      </Stepper>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div>{steps[current]?.content}</div>

          <div className='flex justify-between items-center mt-6'>
            <div>{current > 0 && <Button onClick={prev}>Previous</Button>}</div>
            <div>
              <Button
                type='primary'
                htmlType='submit'
                icon={isFetching ? <SyncOutlined spin /> : undefined}>
                {current === steps.length - 1 ? "Submit" : "Save & Next"}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepperForm;
