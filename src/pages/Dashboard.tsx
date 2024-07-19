import image from "/banner.png";
import profile from "/profile.png";
import MakePaymentForm from "../components/MakePaymentForm";
import StepIndicator from "../components/StepsIndicator";
import VerificationForm from "../components/VerificationForm";
import useStep from "../hooks/useStep";
import Divider from "../components/Divider";
import UploadDocument from "../components/UploadDocument";
import Finish from "../components/Finish";
import FillForm from "../components/FillForm";
import OTPS from "../components/OTPS";
import { useQuery } from "@tanstack/react-query";
import { userProfile } from "../services/Endpoints";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => userProfile(),
  });

  const navigation = useNavigate();
  const { indicators, step, handleNext, totalSteps, handlePrevious } = useStep([
    "Make Payment",
    "Verification",
    "6-digit OTP",
    "Fill form",
    "Upload Document",
    "",
  ]);

  return (
    <div>
      <div>
        <img src={image} />
        <div className="absolute top-0 right-2 mr-12 mt-10 flex flex-row items-center w-[200px] gap-2">
          <p className="font-inter font-semibold text-[14px]">Welcome {`${data?.data?.data?.firstName}`}</p>
          <img
            src={profile}
            className="w-[25%]"
            onClick={() => {
              localStorage.clear();
              navigation("/");
            }}
          />
        </div>
      </div>

      <div>
        <div className="flex-1 flex flex-col justify-center items-center mt-[14px] mb-[14px]">
          <StepIndicator handlePrevious={handlePrevious} step={step} totalSteps={totalSteps} indicators={indicators} />
        </div>

        <Divider color="#12A53E" />

        <div>
          {step === 1 && (
            <div className="mt-[30px] w-[100%]">
              <MakePaymentForm handleNext={() => handleNext()} />
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
              <FillForm
                handleNext={() => handleNext()}
                firstName={data?.data?.data?.firstName}
                lastName={data?.data?.data?.lastName}
                email={data?.data?.data?.email}
                phoneNumber={data?.data?.data?.phoneNumber}
              />
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
      </div>
    </div>
  );
}

export default Dashboard;
