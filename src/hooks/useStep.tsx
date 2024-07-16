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
          <div className="flex flex-col justify-center items-center">
            <div
              className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                i <= step ? "bg-[#12A53E] " : "border-[#B2BCB5] bg-[#B2BCB5]"
              }`}
            >
              <p className="text-white font-inter font-normal text-[20px]">{i}</p>
            </div>
            <h1 className={`text-[12px] font-normal  ${i <= step ? "text-[#434343]" : "text-[#949494]"}`}>
              {stepNames[i - 1]}
            </h1>
          </div>

          {i < totalSteps && <div className={`w-20 h-1  ${i < step ? "bg-[#D9D9D9]" : "bg-[#D9D9D9]"}`} />}
        </div>
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
