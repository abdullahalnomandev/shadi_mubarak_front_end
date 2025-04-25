/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactElement } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

type FormConfig = {
  defaultValues?: Record<string, string>;
  resolver?: any;
};

type FormProps = {
  children?: ReactElement | React.ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

const Form = ({ children, defaultValues, submitHandler , resolver }: FormProps) => {

  const formConfig: FormConfig = {};
  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;

  const methods = useForm<FormProps>(formConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<any> = (data) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
