"use client";
import React, { ReactElement } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";

type FormProps = {
  children?: ReactElement | React.ReactNode;
  submitHandler: SubmitHandler<any>;
  defaultValues?: Record<string, any>;
  resolver?: UseFormProps<any>["resolver"];
};

const Form = ({
  children,
  defaultValues,
  submitHandler,
  resolver,
}: FormProps) => {
  const methods = useForm({
    defaultValues,
    resolver,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      // Form wrapper
      const ok = await submitHandler(data);
      console.log({ ok });
      if (ok) reset();
    } catch (err) {
      message.error("Form submission failed:", err?.message);
      // Don't reset the form on error
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit)(e); // ✅ manual call to control errors
        }}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
