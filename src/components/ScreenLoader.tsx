import remita from "/remita-logo.png";
import LoaderLottie from "./LoaderLottie";

const ScreenLoader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white w-full ">
      <div className=" bg-white mt-[20%] flex flex-col items-center  w-full">
        <p className="font-inter font-semibold text-[26px]">Redirects to Remita Payment Gateway</p>
        <div className="mt-[16px]" />
        <img src={remita} className="w-[124px] h-[66.13px]" />
        <div className="mt-[16px]" />
        <LoaderLottie />
      </div>
    </div>
  );
};

export default ScreenLoader;
