import MakePaymentForm from "./components/MakePaymentForm";
import StepIndicator from "./components/StepsIndicator";
import VerificationForm from "./components/VerificationForm";
import useStep from "./hooks/useStep";
import image from "/banner.png";
import Divider from "./components/Divider";
import UploadDocument from "./components/UploadDocument";
import Finish from "./components/Finish";
import FillForm from "./components/FillForm";
import OTPS from "./components/OTPS";
import { useState } from "react";
import individual from "../public/individual.png";
import organization from "../public/organization.png";

function App() {
  const [level, setLevel] = useState(false);
  const { indicators, step, handleNext, totalSteps, handlePrevious } = useStep([
    "Fill form",
    "NIN Verification",
    "6-digit OTP",
    "Make Payment",
    "Upload Document",
    "",
  ]);

  return (
    <div>
      <div>
        <img src={image} />
      </div>

      <div>
        {level && (
          <div className="flex-1 flex flex-col justify-center items-center mt-[14px] mb-[14px]">
            <StepIndicator
              handlePrevious={handlePrevious}
              step={step}
              totalSteps={totalSteps}
              indicators={indicators}
            />
          </div>
        )}

        {!level && (
          <div className="flex flex-col items-center">
            <div className="w-[65%]">
              <div>
                <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
                  <label className="text-left mb-[8px] font-inter font-medium text-[16px]">
                    Welcome to Abuja Geographic Information Systems online application process for the APPLICATION FOR
                    GRANT/REGRANT OF A STATUTORY RIGHT OF OCCUPANCY. Kindly read the declaration below before you
                    proceed.
                  </label>
                </div>

                <div className="flex flex-row items-start gap-1 mb-[16px]">
                  <label className="text-left mb-[8px] font-inter font-normal text-sm text-black/40">
                    It is a punishable offence to provide any false information and or make any false statements or
                    claim when completing this form. Where it is subsequently discovered that a Certificate of Occupancy
                    was issued based on false or inaccurate information, the Minister may in his sole discretion, revoke
                    such Certificate of Occupancy. The minister reserves the right to reject any application for not
                    properly or fully completed and shall not incur any liability for any such revocation". The
                    information you supply on this form is public knowledge and may be published in the media.
                  </label>
                </div>
              </div>

              <>
                <div className="flex flex-col justify-center items-center mt-[40px]">
                  <label className="text-left font-inter font-normal text-[16px]">
                    Please select your category of application:
                  </label>
                </div>

                <div className="flex flex-row gap-3 justify-center mt-[60px]">
                  <button
                    className="flex flex-col justify-start gap-1 border border-[#2DAA39] text-[#2DAA39] px-4 py-6 w-[333px] h-[188px] rounded-md "
                    onClick={() => setLevel(!level)}
                  >
                    <img src={individual} className="w-[40px] h-[40px]" />
                    <p className="text-left">Apply as an Individual</p>
                  </button>
                  <button
                    className="flex flex-col justify-start gap-1 border border-[#2DAA39] text-[#2DAA39] px-4 py-6 w-[333px] h-[188px] rounded-md"
                    onClick={() => setLevel(!level)}
                  >
                    <img src={organization} className="w-[40px] h-[40px]" />
                    <p className="text-left">Apply as an Organisation</p>
                  </button>
                </div>
              </>
              <div className="flex flex-col justify-center items-center mt-[160px]">
                <label className="text-left font-inter font-normal text-[16px]">
                  @AGIS 2024 &bull; Powered by Abuja Geographic Information Systems
                </label>
              </div>
            </div>
          </div>
        )}

        {/* {!level && (
          <div className="flex flex-col items-center justify-between mt-[32px] h-[100%]">
            <div className="w-[61%] flex flex-col">
              <label className="text-left mb-[16px] font-inter font-normal text-[16px]">
                Welcome to Abuja Geographic Information Systems online application process for the APPLICATION FOR
                GRANT/REGRANT OF A STATUTORY RIGHT OF OCCUPANCY. Kindly read the declaration below before you proceed.
              </label>
              <label className="text-left font-inter font-normal text-[14px] text-black/60">
                It is a punishable offence to provide any false information and or make any false statements or claim
                when completing this form. Where it is subsequently discovered that a Certificate of Occupancy was
                issued based on false or inaccurate information, the Minister may in his sole discretion, revoke such
                Certificate of Occupancy. The minister reserves the right to reject any application for not properly or
                fully completed and shall not incur any liability for any such revocation". The information you supply
                on this form is public knowledge and may be published in the media.
              </label>
            </div>

            <div className="flex flex-col justify-center items-center mt-[40px]">
              <label className="text-left mb-[16px] font-inter font-normal text-[16px]">
                Please select your category of application:
              </label>
            </div>
            <div className="flex gap-8 mt-8">
              <button className="border border-green-500 text-green-500 px-16 py-20 rounded-md text-xl">
                Apply as an Individual
              </button>
              <button className="border border-green-500 text-green-500 px-16 py-8 rounded-md text-xl">
                Apply as an Organisation
              </button>
            </div>

            <footer className="mt-auto text-center text-gray-500 w-full">
              @AGIS 2024 &bull; Powered by Abuja Geographic Information Systems
            </footer>
          </div>
        )} */}

        {level && <Divider color="#12A53E" />}

        {level && (
          <div>
            {step === 1 && (
              <div className="mt-[30px] w-[100%]">
                <FillForm handleNext={() => handleNext()} />
              </div>
            )}
            {step === 2 && (
              <div className="mt-[30px]">
                <VerificationForm handleNext={() => handleNext()} />
              </div>
            )}
            {step === 3 && <OTPS handleNext={() => handleNext()} />}
            {step === 4 && (
              <div className="mt-[30px]">
                <MakePaymentForm handleNext={() => handleNext()} />
              </div>
            )}
            {step === 5 && (
              <div className="mt-[40px]">
                <UploadDocument handleNext={() => handleNext()} />
              </div>
            )}
            {step === 6 && (
              <div className="mt-[40px]">
                <Finish handleNext={() => {}} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
