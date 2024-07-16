import MakePaymentForm from "./components/MakePaymentForm";
import StepIndicator from "./components/StepsIndicator";
import VerificationForm from "./components/VerificationForm";
import useStep from "./hooks/useStep";
import image from "./assets/banner-svg.svg";
import Divider from "./components/Divider";
import OTPInput from "react-otp-input";
import { useEffect, useState } from "react";
import ScreenLoader from "./components/ScreenLoader";
import RemitaFake from "./components/RemitaFake";

function App() {
  const [loading, setLoading] = useState("initial");
  const [otp, setOtp] = useState("");
  const [otpStep, setOtpStep] = useState(true);

  const { indicators, step, totalSteps, handleNext, handlePrevious } = useStep([
    "Make Payment",
    "Verification",
    "6-digit OTP",
    "Fill form",
    "Upload Document",
  ]);

  useEffect(() => {
    if (loading === "loading") {
      setTimeout(() => {
        setLoading("success");
        console.log("testing loading");
        // handleNext();
      }, 2000);
    }
  }, [loading]);

  return loading === "loading" ? (
    <ScreenLoader />
  ) : loading === "success" ? (
    <RemitaFake
      handleNext={() => {
        setLoading("initial");
        handleNext();
      }}
    />
  ) : (
    <div>
      <div>
        <img src={image} />
      </div>

      <div>
        <div className="flex-1 flex flex-col justify-center items-center mt-[14px] mb-[14px]">
          <StepIndicator handlePrevious={handlePrevious} step={step} totalSteps={totalSteps} indicators={indicators} />
        </div>

        <Divider color="#12A53E" />

        <div>
          {step === 1 && (
            <div className="mt-[30px] w-[100%]">
              <MakePaymentForm handleNext={() => setLoading("loading")} />
            </div>
          )}
          {step === 2 && (
            <div className="mt-[30px]">
              <VerificationForm />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {step === 3 && (
            <div>
              {otpStep ? (
                <div className="mt-[30px]">
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
                <div className="mt-[30px]">
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
            <div className="mt-[30px]">
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
}

export default App;
