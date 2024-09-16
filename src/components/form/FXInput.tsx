"use client"
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  required?: boolean;
  type?: string;
  label: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
}

const FXInput = ({
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
    <Input
      isRequired={required}
      type={type}
      label={label}
      size={size}
      variant={variant}
      {...register(name)}
      isInvalid={!!errors[name]}
      errorMessage={errors[name]?(errors[name].message as string):""}
    />
  );
};

export default FXInput;
