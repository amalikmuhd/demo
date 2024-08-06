import { useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { AppBar } from "../components/AppBar";
import Header from "../components/Header";
import { useState } from "react";

export function Eligibility() {
  const params = useLocation();
  const navigation = useNavigate();
  const [step, setStep] = useState(false);
  return (
    <div>
      <Header />

      <div>
        <div className="flex flex-col items-center">
          <div className="w-[55%]">
            <AppBar onClick={() => navigation("/")} title="" />

            <>
              <div className="flex flex-col justify-center items-center my-[40px]">
                <label className="text-left font-inter font-normal text-[20px]">{}Eligibility Criteria</label>
              </div>

              <div className="flex flex-row items-start gap-1 mb-[16px]">
                <label className="text-left mb-[8px] font-inter font-normal text-sm">
                  <p className="text-black text-[20px] mt-4 font-inter mb-4">
                    {params.state.type === "Individual" ? "Individual Application:" : "Organization Application:"}
                  </p>
                  {params.state.type === "Individual" ? (
                    <>
                      {firstData.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                      <ul>
                        {dataIndividual.map((item, index) => (
                          <li key={index} className="ml-6 list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      {secondData.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                      <ul>
                        {dataOrg.map((item, index) => (
                          <li key={index} className="ml-6 list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <p>5) Obtain Acknowledgement Form for keeps.</p>

                  {params.state.type === "Individual" ? (
                    <>
                      <p className="list-disc text-[20px] mt-4 text-[#000000]">Eligibility Guideline:</p>
                      <ul className="ml-4 mt-4">
                        {eligibilityIndividual.map((item, index) => (
                          <li key={index} className="list-disc text-[16px]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <p className="list-disc text-[16px] mt-4 text-[#000000]">Eligibility Guideline:</p>
                      <ul className="ml-4 mt-4">
                        {eligibilityOrg.map((item, index) => (
                          <li key={index} className="list-disc text-[16px]">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </label>
              </div>

              <div className="flex flex-row justify-between gap-6 mt-[16px] mb-[40px]">
                <div className="flex flex-row items-start gap-1 mb-[16px]">
                  <label className="text-left mb-[8px] font-inter font-normal text-sm text-black/80">
                    <label className="text-left font-inter font-bold text-sm text-[red]">Note: </label>
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
                <label className="text-left font-inter font-normal text-[16px] uppercase">
                  Statement of Attestation
                </label>
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
                onClick={() => navigation("/login", { state: { type: params.state.type } })}
              />
              <div className="mb-4" />
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

const firstData = [
  "1. Obtaining of new application forms from AGIS office or download from AGIS website",
  "2. Payment of necessary fees which is N100,000.00 for Commercial/Residential plots.",
  "3. Present evidence of payment (teller) to AGIS Finance and obtain receipt.",
  "4. Open File at New Application Desk with the following documents enclosed",
];
const dataIndividual = [
  "New Application Form properly filled",
  "Tax Clearance Certificate for Individuals & Corporate bodies",
  "Photocopy of receipt",
  "Two Passport size photographs",
  "Acceptable means of identification (driver’s license, National ID or International passport)",
];

const eligibilityIndividual = [
  "Applicants must be individuals.",
  "Land applied for must be for specific purposes listed in the document.",
  "Personal details like name, gender, date of birth, occupation, nationality, etc., must be provided.",
  "A preferred location and required plot size must be selected from the provided list.",
  "Different document submission requirements exist based on application type (PRIV, RELO, REST).",
  "​Statement of Agreement",
  "Applicants confirm accuracy of preferred location and plot size.",
  "False information provision is punishable and may lead to revocation of Certificate of Occupancy.",
  "Minister reserves the right to reject incomplete applications.",
  "Information provided may be made public.",
  "Required documents must be submitted based on application type.",
  "Errors in the application form may cause processing delays.",
  "Remita Payment receipt must be uploaded.",
];

const secondData = [
  "1. Obtaining of new application forms from AGIS office or download from AGIS website",
  "2. Payment of necessary fees which is N100,000.00 for Commercial/Residential plots.",
  "3. Present evidence of payment (teller) to AGIS Finance and obtain receipt.",
  "4. Open File at New Application Desk with the following documents enclosed;",
];

const dataOrg = [
  "New Application Form properly filled",
  "Tax Clearance Certificate for Individuals & Corporate bodies",
  "CAC form C07",
  "Photocopy of receipt",
  "Two Passport size photographs",
  "Acceptable means of identification (driver’s license, National ID or International passport)",
];

const eligibilityOrg = [
  "The applicant must be an organization registered in Nigeria.",
  "The applicant must provide details of their previous or other allocations within the Federal Capital Territory (FCT).",
  "The applicant must specify the required land use or purpose from the provided list.",
  "The applicant must select a preferred location from the list of Councils or Districts provided in the table.",
  "The applicant must indicate the required plot size in square meters.",
  "Specific documents are required based on the application type, such as E-Payment Slip, Tax Clearance Certificate, Registration/Particulars of Director, Certificate of Incorporation, etc. ​",
  "Statement of Agreement: ​",
  "The applicant must confirm the accuracy of the information provided in the application.",
  "Compliance with regulations and guidelines set by the Department of Land Administration is required.",
  "False information may lead to application rejection.",
  "Mass-housing applicants are eligible for a lease agreement for development purposes only, not a right of occupancy.",
];
