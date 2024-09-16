import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface IFormConfig  {
  defaultValue?: Record<string, any>;
  resolver?: any;
};

interface IProps extends IFormConfig{
    children:ReactNode;
    onSubmit:SubmitHandler<any>;
}


const FXForm = ({ children, onSubmit, defaultValue, resolver }:IProps) => {
  const formConfig: IFormConfig = {};

  if (!!defaultValue) {
    formConfig["defaultValue"] = defaultValue;
  }
  if (!!resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
