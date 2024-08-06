// import remitaHeader from "/remita-header.png";
import CustomButton from "./CustomButton";
import remita from "/remita-template.png";

interface RemitaFakeProps {
  handleNext: () => void | undefined;
}

const RemitaPaymentScreen = ({ handleNext }: RemitaFakeProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white w-[100% h-[100%]]">
      <div className="w-[100%] flex flex-row justify-center h-[50%]">
        <img src={remita} className="w-[100%] h-[20%] object-cover" />
      </div>
      <div className="w-[100%] flex flex-row justify-center h-[48%]">
        <div className="w-[60%] flex justify-center items-center gap-2">
          <CustomButton
            name={"Submit"}
            onClick={handleNext}
            style="flex-[0.2] border-[1px] border-[#77A600]"
            backgroundColor="bg-[#77A600]"
            paddingVertical="py-[10px]"
            textColor=""
          />
          <CustomButton
            name={"Reset"}
            onClick={handleNext}
            style="flex-[0.2] border-[1px] border-[#FF2A54]"
            paddingVertical="py-[10px]"
            backgroundColor="bg-[#F9F9F9]"
            textColor="text-[#FF2A54]"
          />
          <div className="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default RemitaPaymentScreen;
