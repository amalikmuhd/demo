import Lottie from "react-lottie";
import animationData from "../../public/loader.json";

interface LoaderLottieProps {
  height?: number;
  width?: number;
  icon?: object;
}

export default function LoaderLottie({ height = 69, width = 69, icon }: LoaderLottieProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: icon || animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
}
