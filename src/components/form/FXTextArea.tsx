"use client"
import { IInputProps } from "@/src/types";
import { Input, Textarea } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps extends IInputProps {}

const FXTextArea = ({
  required = false,
  type = "text",
  label,
  variant = "bordered",
  size = "sm",
  name,
}: IProps) => {
  const { register,formState :{errors}} = useFormContext();

//   console.log(errors[name]);
  return (
    <Textarea
      isRequired={required}
      type={type}
      minRows={5}
      label={label}
      size={size}
      variant={variant}
      {...register(name)}
      
    />
  );
};

export default FXTextArea;
