"use client";
import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { generalInformationSchema } from "@/schemas/userSchema";

interface ISteps {
  title?: string;
  content?: React.ReactElement | React.ReactNode;
}

interface IStepsProps {
  steps: ISteps[];
  handleUserSubmit: (data: any) => Promise<any>;
}

const StepperForm = ({ steps, handleUserSubmit }: IStepsProps) => {
  const [current, setCurrent] = useState<number>(0);

  const methods = useForm({ resolver: zodResolver(generalInformationSchema) });
  const { handleSubmit, reset, watch } = methods;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item, index) => ({
    key: index,
    title: item.title,
  }));

  const handleOnSubmit = async (data: any) => {
    try {
      await handleUserSubmit(data);
      reset();
      message.success("Form submitted successfully!");
    } catch (error: any) {
      message.error("Failed to submit form", error);
    }
  };

  console.log("watch", watch());

  return (
    <div className="p-4">
      <Steps
        current={current}
        items={items}
        direction="horizontal"
        status="process"
        percent={60}
        labelPlacement="vertical"
        size="default"
      />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <div>{steps[current]?.content}</div>
          <div
            style={{ marginTop: 24 }}
            className="flex justify-between items-center"
          >
            <div>
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={prev}>
                  Previous
                </Button>
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
