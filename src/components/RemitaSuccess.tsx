import CustomButton from "./CustomButton";
import remita from "/payment.png";
import { FaArrowRight } from "react-icons/fa6";

interface RemitaFakeProps {
  handleNext: () => void | undefined;
}

const RemitaSuccess = ({ handleNext }: RemitaFakeProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white">
      {/* Image */}
      <img src={remita} className="w-full h-full object-cover absolute top-0 left-0 z-10" alt="Payment Background" />

      {/* Button */}
      <div className="flex justify-center items-center w-full h-full absolute top-0 left-10 z-20">
        <div className="w-[20%] flex flex-col justify-center items-center mt-[151px]">
          <CustomButton
            name={"Pay NGN 100,422.05"}
            onClick={handleNext}
            style="flex-[0.2] border-[1px] border-[#2B9D80] w-[100%]  ml-[80px]"
            backgroundColor="bg-[#2B9D80]"
            paddingVertical="py-[16px]"
            textColor=""
            trailingIcon={<FaArrowRight />}
          />
        </div>
      </div>
    </div>
  );
};

export default RemitaSuccess;
