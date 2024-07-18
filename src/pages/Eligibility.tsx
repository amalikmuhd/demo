import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { AppBar } from "../components/AppBar";
import Header from "../components/Header";
import { useState } from "react";

export function Eligibility() {
  const navigation = useNavigate();
  const [step, setStep] = useState(false);
  return (
    <div>
      <Header />

      <div>
        <div className="flex flex-col items-center">
          <div className="w-[55%]">
            <AppBar onClick={() => navigation("/")} />

            <>
              <div className="flex flex-col justify-center items-center my-[40px]">
                <label className="text-left font-inter font-normal text-[16px]">Eligibility Criteria</label>
              </div>

              <div className="flex flex-row items-start gap-1 mb-[16px]">
                <label className="text-left mb-[8px] font-inter font-normal text-sm text-black/50">
                  <p className="text-[#000000] font-inter font-semibold mb-2">Individual Application</p>
                  <p>1. Obtaining of new application forms from AGIS office or download from AGIS website;</p>
                  <p>2. Payment of necessary fees which is N100,000.00 for Commercial/Residential plots.</p>
                  <p>3. Present evidence of payment (teller) to AGIS Finance and obtain receipt.</p>
                  <p>4. Open File at New Application Desk with the following documents enclosed;</p>
                  <p>i) New Application Form properly filled,</p>
                  <p>ii) Tax Clearance Certificate for Individuals & Corporate bodies,</p>
                  <p>iii) CAC form C07,</p>
                  <p>iv) Photocopy of receipt,</p>
                  <p>v) Two Passport size photographs and</p>
                  <p>
                    vi) Acceptable means of identification (driver’s license, National ID or International passport)
                  </p>
                  <p>5) Obtain Acknowledgement Form for keeps.</p>

                  <p className="mt-4">i) New Application Form properly filled,</p>
                  <p>ii) Tax Clearance Certificate for Individuals & Corporate bodies,</p>
                  <p>iii) CAC form C07,</p>
                  <p>iv) Photocopy of receipt,</p>
                  <p>v) Two Passport size photographs and</p>
                  <p>
                    vi) Acceptable means of identification (driver’s license, National ID or International passport)
                  </p>
                  <p>5) Obtain Acknowledgement Form for keeps.</p>

                  <p className="mt-4">i) New Application Form properly filled,</p>
                  <p>ii) Tax Clearance Certificate for Individuals & Corporate bodies,</p>
                  <p>iii) CAC form C07,</p>
                  <p>iv) Photocopy of receipt,</p>
                  <p>v) Two Passport size photographs and</p>
                  <p>
                    vi) Acceptable means of identification (driver’s license, National ID or International passport)
                  </p>
                  <p>5) Obtain Acknowledgement Form for keeps.</p>
                </label>
              </div>

              <div className="flex flex-row justify-between gap-6 mt-[16px] mb-[40px]">
                <div className="flex flex-row items-start gap-1 mb-[16px]">
                  <label className="text-left mb-[8px] font-inter font-normal text-sm text-black/40">
                    <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">Note: </label>
                    It is a punishable offence to provide any false information and or make any false statements or
                    claim when completing this form. Where it is subsequently discovered that a Certificate of Occupancy
                    was issued based on false or inaccurate information, the Minister may in his sole discretion, revoke
                    such Certificate of Occupancy. The minister reserves the right to reject any application for not
                    properly or fully completed and shall not incur any liability for any such revocation". The
                    information you supply on this form is public knowledge and may be published in the media.
                  </label>
                </div>
              </div>

              <div className="flex flex-col justify-center my-[40px]">
                <label className="text-left font-inter font-normal text-[16px]">Statement of Attestation</label>
              </div>

              <div className="flex flex-row place-items-start my-[30px]">
                <input type="checkbox" className="mr-4 w-[30px] h-[30px]" onChange={() => setStep(!step)} />
                <p className="text-left font-inter font-normal text-[16px]">
                  I hereby agree that I have read and am ready to comply with all the criteria for application listed
                  above and wish to proceed to completing the application.
                </p>
              </div>

              <CustomButton
                disabled={!step}
                name="Yes, I agree and wish to proceed"
                trailingIcon={<FaArrowRight />}
                onClick={() => navigation("/login")}
              />
              <div className="mb-4" />
            </>
            {/* <div className="flex flex-col justify-center items-center mt-[160px]">
              <label className="text-left font-inter font-normal text-[16px]">
                @AGIS 2024 &bull; Powered by Abuja Geographic Information Systems
              </label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
