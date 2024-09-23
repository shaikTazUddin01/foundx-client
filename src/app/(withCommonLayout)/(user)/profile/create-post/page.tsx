"use client";
import FXDatePicker from "@/src/components/form/FXDatePicker";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import FXSelect from "@/src/components/form/FXSelect";
import IsoString from "@/src/utils/IsoString";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

import { allDistict } from "@bangladeshi/bangladesh-address";
import { useGetCategory } from "@/src/hooks/useCategory";

const cityOptions = allDistict()?.map((district: string) => {
  return {
    key: district,
    label: district,
  };
});

const page = () => {
  // get categories
  const {
    data: categorydata,
    isLoading,
    isSuccess: categorySuccess,
  } = useGetCategory();

  // create category oprions
  let categoryOptions = [];
  if (categorydata?.data && !isLoading) {
    categoryOptions = categorydata?.data
      ?.sort()
      ?.map((option: { _id: string; name: string }) => ({
        key: option?._id,
        label: option?.name,
      }));

  }
// react hook form
  const method = useForm();
  const { register, handleSubmit, control } = method;
  // field array
  const { append, fields, remove } = useFieldArray({
    control,
    name: "questions",
  });
  // handle submit
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const postData = {
      ...data,
      questions: data.questions.map((item: { value: string }) => item.value),
      foundDate: IsoString(data?.foundDate),
    };
    console.log(postData);
  };
  // handle append
  const hanldeAppend = () => {
    append({ name: "questions" });
  };
  return (
    <div className="mt-10">
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5">
            <FXInput name="title" label="title" />
            <FXDatePicker name="foundDate" label="Found Date"></FXDatePicker>
            <FXInput name="Location" label="Location" />
            <FXSelect name="city" label="city" options={cityOptions} disabled={!cityOptions} />
            <FXSelect
              name="category"
              label="Category"
              options={categoryOptions}
              disabled={!categorySuccess}
            />
            {/* <FXInput name="category" label="category" /> */}
            <FXInput name="UploadImage" label="Upload Image" />
          </div>
          <Divider className="my-5"></Divider>
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner Verification Questions</h1>
            <Button onClick={() => hanldeAppend()}>Append</Button>
          </div>
          {/* append question */}
          {fields?.map((item, index) => (
            <div className="mb-2 flex items-center gap-2" key={index}>
              <FXInput
                key={item.id}
                name={`questions.${index}.value`}
                label="Questions"
              ></FXInput>
              <Button onClick={() => remove(index)}>Remove</Button>
            </div>
          ))}
          <Divider className="my-5"></Divider>
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
