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
  variant="bordered",
  size = "sm",
  name,
}: IProps) => {

    const {register}=useFormContext()

  return (
    <Input isRequired={required} type={type} label={label} size={size} variant={variant} {...register(name)}/>
  );
};

export default FXInput;
