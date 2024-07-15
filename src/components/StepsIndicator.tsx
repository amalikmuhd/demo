// import { IoArrowBack } from "react-icons/io5";

interface Steps {
  indicators: React.JSX.Element[];
  handlePrevious: () => void;
  step: number;
  totalSteps: number;
}

const StepIndicator = ({ indicators }: Steps) => {
  return (
    <div className="flex flex-row justify-between items-center px-[16px]">
      {/* <div onClick={() => handlePrevious()} className="flex flex-row items-center gap-[2px] mr-10">
        {step === 1 || step === 3 ? <div className="w-[20px] mr-10" /> : <IoArrowBack size={28} color="black" />}
        <p>{step === 1 || step === 3 ? <div className="w-[10px] mr-10" /> : "Back"}</p>
      </div> */}

      <div className="flex flex-row flex-1 items-center">
        <div className="flex flex-col">
          <div className="flex flex-row">{indicators}</div>
        </div>
      </div>

      {/* <div className="flex flex-row flex-1 justify-end ml-10">
        <p>{`${step} / ${totalSteps}`}</p>
      </div> */}
    </div>
  );
};

export default StepIndicator;
