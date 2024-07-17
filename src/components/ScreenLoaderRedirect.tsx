import remita from "/logo.png";
import LoaderLottie from "./LoaderLottie";

const ScreenLoaderRedirect = () => {
  return (
    <div className="fixed top-0 left-0 z-50 bg-white w-full ">
      <div className=" bg-white mt-[20%] flex flex-col items-center  w-full">
        <div className="mt-[16px]" />
        <img src={remita} className="w-[114px] h-[82.48px]" />
        <div className="mt-[16px]" />
        <p className="font-inter font-semibold text-[26px]">Redirects back to AGIS System</p>
        <LoaderLottie />
      </div>
    </div>
  );
};

export default ScreenLoaderRedirect;
