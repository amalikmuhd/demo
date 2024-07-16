// import "./styles.css";
import Lottie from "react-lottie";
import animationData from "../lotties/loader.json";

// interface LoaderLottieProps {
//   icon?: any;
// }

export default function LoaderLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={69} width={69} />
    </div>
  );
}
