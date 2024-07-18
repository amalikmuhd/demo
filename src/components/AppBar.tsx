import { FaArrowLeft } from "react-icons/fa6";
import account from "/individual.png";

interface AppBar {
  onClick: () => void;
  title?: string;
  opacity?: boolean;
}
export const AppBar = ({ onClick, title, opacity }: AppBar) => {
  return (
    <div className="flex flex-row justify-between gap-1 items-center my-[26px] w-[100%]">
      <button
        disabled={opacity}
        onClick={onClick}
        className={`flex items-center gap-2 border-[2px] rounded-sm border-[#12A53E] p-2 px-4 ${
          opacity ? "opacity-20" : ""
        }`}
      >
        <FaArrowLeft />
        <p className="text-left font-inter font-medium text-[14px]">Back</p>
      </button>

      <div className="flex flex-row items-center h-[40px] gap-2">
        <img src={account} className="w-[40px] " />
        <label className="text-left font-inter font-medium text-[14px] text-[#2DAA39]">{title}</label>
      </div>
      <div />
    </div>
  );
};
