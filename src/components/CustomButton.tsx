import { ReactNode } from "react";

interface CustomButton {
  name: string;
  style?: string;
  trailingIcon?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean | undefined;
  paddingVertical?: string;
  textColor?: string;
  backgroundColor?: string;
}

const CustomButton = ({
  name,
  trailingIcon,
  style,
  onClick,
  disabled = false,
  paddingVertical,
  textColor,
  backgroundColor,
}: CustomButton) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="submit"
      className={`flex items-center justify-center gap-2 rounded-md ${
        disabled ? "bg-[#DCDCDC]" : `${backgroundColor || "bg-[#12A53E]"}`
      } text-sm font-inter font-normal ${paddingVertical || "py-[16px]"} w-[100%] ${
        textColor || "text-white"
      } ${style}`}
    >
      {name}
      {trailingIcon}
    </button>
  );
};

export default CustomButton;
