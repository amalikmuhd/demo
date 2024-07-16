import remita from "/remita-logo.png";
import LoaderLottie from "./LoaderLottie";

const ScreenLoader = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-full w-full absolute">
      <p className="font-inter font-semibold text-[26px]">Redirects to Remita Payment Gateway</p>
      <div className="mt-[16px]" />
      <img src={remita} className="w-[124px] h-[66.13px]" />
      <div className="mt-[16px]" />
      <LoaderLottie />
    </div>
  );
};

export default ScreenLoader;
