// import "./App.css";
import MakePaymentForm from "./components/MakePaymentForm";
import StepIndicator from "./components/StepsIndicator";
import VerificationForm from "./components/VerificationForm";
import useStep from "./hooks/useStep";
import "./styles/Indicators.css";
import image from "./assets/banner-svg.svg";
import Divider from "./components/Divider";
import OTPInput from "react-otp-input";
import { useState } from "react";

function App() {
  const [otp, setOtp] = useState("");
  const [otpStep, setOtpStep] = useState(true);

  const { indicators, step, totalSteps, handleNext, handlePrevious } = useStep([
    "Make Payment",
    "Verification",
    "6-digit OTP",
    "Fill form",
    "Upload Document",
  ]);
  return (
    <div className="app">
      <div>
        <img src={image} />
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="flex-1 flex flex-col justify-center items-center mt-[24px] mb-[24px]">
          <StepIndicator handlePrevious={handlePrevious} step={step} totalSteps={totalSteps} indicators={indicators} />
        </div>

        <Divider />

        <div>
          {step === 1 && (
            <div className="mt-[40px]">
              <MakePaymentForm />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 2 && (
            <div className="mt-[40px]">
              <VerificationForm />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 3 && (
            <div>
              {otpStep ? (
                <div className="mt-[40px]">
                  <p>Please select a method to receive 6-digit OTP (One Time Password)</p>

                  <div className="flex flex-row gap-4 justify-center">
                    <div className="flex gap-[10px]">
                      <input type="radio" />
                      <p>Email OTP</p>
                    </div>
                    <div className="flex gap-[10px]">
                      <input type="radio" />
                      <p>SMS OTP</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <button onClick={() => setOtpStep(!otpStep)}>Send OTP</button>
                  </div>
                </div>
              ) : (
                <div className="mt-[40px]">
                  <p>Please select a method to receive 6-digit OTP (One Time Password)</p>
                  <p className="mb-4">The OTP has been sent to you. Please enter the 6-digit OTP</p>
                  <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    containerStyle={{
                      flex: "row",
                      alignSelf: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    inputStyle={{
                      background: "#F6F6F6",
                      height: 50,
                      width: 50,
                      borderColor: "rgba(0,0,0,0,100%)",
                      borderWidth: 1,
                      marginRight: 20,
                      marginBottom: 10,
                    }}
                    renderInput={(props) => <input {...props} />}
                  />
                  <div className="flex flex-col">
                    <button onClick={handleNext}>Next</button>
                    <button className="mt-2" onClick={handleNext}>
                      Resend OTP?
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
          {step === 4 && (
            <div className="mt-[40px]">
              <h1>Step 4</h1>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 5 && (
            <div className="mt-[40px]">
              <h1>Step 5</h1>
              {/* <button onClick={handlePrevious}>Done</button> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className="p-12 shadow-md rounded-2xl bg-white mx-auto border-solid border-2 border-gray-100 mb-8">
  //     <div className="flex-1 flex flex-col justify-center items-center">
  //       <StepIndicator handlePrevious={handlePrevious} step={step} totalSteps={totalSteps} indicators={indicators} />

  //       {step === 1 && (
  //         <div className="mt-[40px]">
  //           <h1>Step 1</h1>
  //           <button onClick={handleNext}>Next</button>
  //         </div>
  //       )}
  //       {step === 2 && (
  //         <div className="mt-[40px]">
  //           <h1>Step 2</h1>
  //           <button onClick={handleNext}>Next 2</button>
  //         </div>
  //       )}
  //       {step === 3 && (
  //         <div className="mt-[40px]">
  //           <h1>Step 3</h1>
  //           <button onClick={handlePrevious}>Done</button>
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
}

export default App;
