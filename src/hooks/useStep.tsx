import { useState } from "react";

const useStep = (stepNames: string[]) => {
  const [step, setStep] = useState(1);
  const totalSteps = stepNames.length;

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const indicators = [];
  for (let i = 1; i <= totalSteps; i++) {
    indicators.push(
      <div key={i} className="flex flex-col items-center">
        <div className="flex flex-row items-center">
          <div className={`w-6 h-6 rounded-full border ${i <= step ? "bg-[green] " : "border-gray-300 bg-white"}`} />

          {i < totalSteps && <div className={`w-32 h-1 ${i < step ? "bg-[#ccc]" : "bg-[#ccc]"}`} />}
        </div>
        {/* <h1
          className={`text-lg font-bold leading-tight text-center mb-2 ${i <= step ? "text-black" : "text-gray-500"}`}
        >
          {stepNames[i - 1]}
        </h1> */}
      </div>
    );
  }

  return { handleNext, handlePrevious, step, totalSteps, indicators };
};

export default useStep;

// import { useState } from "react";

// const useStep = (stepNames: string[]) => {
//   const [step, setStep] = useState(1);
//   const totalSteps = stepNames.length;

//   const handleNext = () => {
//     setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
//   };

//   const handlePrevious = () => {
//     setStep((prevStep) => Math.max(prevStep - 1, 1));
//   };

//   const indicators = [];
//   for (let i = 1; i <= totalSteps; i++) {
//     indicators.push(
//       <div key={i} className="flex flex-row items-center">
//         {/* {i === step && (
//           <h1 className="text-lg font-bold text-gray-700 leading-tight text-center mt-8">{stepNames[i - 1]}</h1>
//         )} */}
//         <div
//           className={`${[
//             " w-[24px] h-[24px] rounded-[16px] border border-[#E7E7E7] bg-[white] justify-center items-center",
//             i <= step && "border-t-[1px] border-red-500 bg-pink-800",
//           ]}`}
//         />
//         {/* {i === step && (
//             <h1 className="text-lg font-bold text-gray-700 leading-tight text-center mt-8">{stepNames[i - 1]}</h1>
//           )} */}
//         {/* </div> */}
//         {i < totalSteps && (
//           <div className={[" w-[300px] h-[10px] bg-[#E7E7E7] mx-[22px]", i < step && "bg-[orange]"] as never} />
//         )}
//       </div>
//     );
//   }

//   return { handleNext, handlePrevious, step, totalSteps, indicators };
// };

// export default useStep;
