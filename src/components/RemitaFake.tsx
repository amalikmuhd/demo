import remitaHeader from "/remita-header.png";

interface RemitaFakeProps {
  handleNext: () => void | undefined;
}

const RemitaFake = ({ handleNext }: RemitaFakeProps) => {
  return (
    <>
      <img src={remitaHeader} className="w-[100%]" />
      <div className="bg-white flex flex-col items-center h-full w-full absolute">
        <p className="font-inter font-semibold text-[26px] text-left" onClick={handleNext}>
          ABUJA GEOGRAPHIC INFORMATION SYSTEMS - 01700078200
        </p>
        <div className="mt-[16px]" />
      </div>
    </>
  );
};

export default RemitaFake;
