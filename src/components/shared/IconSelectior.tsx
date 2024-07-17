import { ReactNode } from "react";
// import { IoMdCheckmarkCircle } from "react-icons/io";

interface IconSelectorProps {
  className?: string | undefined;
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  src?: string | undefined;
  label?: string;
  trailingIcon: ReactNode;
}

const IconSelector = ({ className, onClick, src, label, trailingIcon }: IconSelectorProps) => {
  return (
    <div
      //   className={`flex flex-col p-[18px] ${check === 1 ? "bg-[#12A53E]" : "bg-[#DFFFE9]"}`}
      //   onClick={() => setCheck(1)}
      className={className}
      onClick={onClick}
    >
      <img src={src} className="w-[30px] h-[30px] mb-[10px]" />
      <div className="flex flex-row items-center">
        <p className="text-[14px] mr-[4px]">{label}</p>
        {trailingIcon}
        {/* <IoMdCheckmarkCircle className={`${value ? } text-[#12A53E]"} /> */}
      </div>
    </div>
  );
};

export default IconSelector;
