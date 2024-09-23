"use client";
import { IInputProps } from "@/src/types";
import { Input } from "@nextui-org/input";
import { DatePicker } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

interface IProps extends IInputProps {}

const FXDatePicker = ({
  label,

  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  //   console.log(errors[name]);
  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker
          label={label}
          className="max-w-full min-w-[225px]"
          variant="bordered"
          {...fields}
          size="sm"
        />
      )}
    />
  );
};

export default FXDatePicker;
