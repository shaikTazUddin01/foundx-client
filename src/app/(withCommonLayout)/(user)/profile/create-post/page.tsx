"use client";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";

const page = () => {
  const method = useForm();
  const { register, handleSubmit, control } = method;
  const { append, fields } = useFieldArray({
    control,
    name: "questions",
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  const hanldeAppend = () => {
    append({ name: "questions" });
  };
  return (
    <div>
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="title" />
          <Divider className="my-5"></Divider>
          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner Verification Questions</h1>
            <Button onClick={() => hanldeAppend()}>Append</Button>
          </div>
          <div className="mt-2">
            {fields?.map((item, index) => (
              <FXInput
                key={item.id}
                name={`questions.${index}.value`}
                label="Questions"
              ></FXInput>
            ))}
          </div>
          <Divider className="my-5"></Divider>
          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
};

export default page;
