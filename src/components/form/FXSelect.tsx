import { IInputProps } from "@/src/types";
import { Select, SelectItem } from "@nextui-org/react";
import { useFormContext } from "react-hook-form";

interface IProps extends IInputProps {
  options: {
    key: string;
    label: string;
  }[];
}

const FXSelect = ({ options, label, name ,variant="bordered",disabled}: IProps) => {
  const { register } = useFormContext();
  return (
    <Select label={label} className="min-w-full sm:min-w-[225px]" size="sm" variant={variant} {...register(name)} isDisabled={disabled}>
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};

export default FXSelect;
