"use client";
import React, { useState } from "react";
import { Button, message } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generalInformationSchema } from "@/schemas/userSchema";
import { Step, Stepper } from "react-form-stepper";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  handleUserSubmit: (data: any) => Promise<any>;
}

const StepperForm = ({ steps, handleUserSubmit }: IStepsProps) => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6,
  ]);
  const [current, setCurrent] = useState<number>(
    completedSteps[completedSteps.length - 1]
  );

  const methods = useForm({ resolver: zodResolver(generalInformationSchema) });
  const { handleSubmit, reset } = methods;

  const next = () => {
    setCompletedSteps([...completedSteps, current]);
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleStepClick = (stepNumber: number) => {
    // Only allow clicking on steps that are less than or equal to the highest completed step
    const maxCompleted = Math.max(...completedSteps, 0);
    if (stepNumber <= maxCompleted) {
      setCurrent(stepNumber);
    }
  };

  const handleOnSubmit = async (data: any) => {
    try {
      await handleUserSubmit(data);
      reset();
      message.success("Form submitted successfully!");
    } catch (error: any) {
      message.error("Failed to submit form", error);
    }
  };

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
        style={{
          padding: "0",
        }}
      >
        {steps.map((item, index) => (
          <Step
            key={index}
            label={item.title}
            onClick={() => handleStepClick(index)}
            completed={completedSteps.includes(index)}
            // active={current === index}
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
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div>{steps[current]?.content}</div>
          <div
            style={{ marginTop: 24 }}
            className="flex justify-between items-center "
          >
            <div>
              {current <= steps.length && (
                <Button onClick={prev}>Previous</Button>
              )}
            </div>
            <div>
              {current < steps.length - 1 && (
                <Button type="primary" onClick={next}>
                  Save & Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepperForm;
