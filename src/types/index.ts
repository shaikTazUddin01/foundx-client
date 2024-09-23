import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export interface IInputProps{
  required?: boolean;
  type?: string;
  label: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  name: string;
  disabled?:boolean
}

export * from "./RecentPost";
