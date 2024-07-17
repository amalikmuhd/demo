import CustomButton from "./CustomButton";
import remita from "/remita-header.png";
import modalImage from "/data-success-modal.png";
import LoaderLottie from "./LoaderLottie";
import animationData from "../../public/success.json";
import { FaArrowRight } from "react-icons/fa6";

interface RemitaFakeProps {
  handleNext: () => void | undefined;
}

const RemitaSuccess = ({ handleNext }: RemitaFakeProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white">
      <img src={remita} className="w-[100%] h-full mb-[5%]" />
      <div className="w-[100%] flex flex-row justify-center h-full">
        <div className="w-[30%] p-[30px] flex flex-col justify-center items-center gap-2 border-2 border-black/30 rounded-md">
          <LoaderLottie width={189.91} height={189.91} icon={animationData} />
          <img src={modalImage} className="w-[100%] mb-[20px]" />
          <CustomButton
            name={"Continue"}
            onClick={handleNext}
            style="flex-[0.2] border-[1px] border-[#12A53E]"
            backgroundColor="bg-[#12A53E]"
            paddingVertical="py-[10px]"
            textColor=""
            trailingIcon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default RemitaSuccess;
