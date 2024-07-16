import { ReactNode } from "react";

interface CustomButton {
  name: string;
  trailingIcon: ReactNode;
}

const CustomButton = ({ name, trailingIcon }: CustomButton) => {
  return (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 rounded-md bg-[#12A53E] text-sm font-inter font-normal py-[16px] w-[100%] text-white"
    >
      {name}
      {trailingIcon}
    </button>
  );
};

export default CustomButton;
