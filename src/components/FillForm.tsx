import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import CustomSelect from "./CustomSelect";
import {
  councilData,
  districtData,
  // educationData,
  genderData,
  landuseData,
  // maritalStatusData,
  purposeData,
  // religionData,
  titleData,
} from "../data";
import { IFillForm } from "../types";
import CustomAreaText from "./CustomAreaText";
import CustomFileInput from "./CustomFileInput";
// import { useLocation } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";

interface FillFormForm {
  handleNext: () => void | undefined;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
}

const FillForm: React.FC<FillFormForm> = ({ handleNext, firstName, lastName, email, phoneNumber }) => {
  // const params = useLocation();

  //  const query = useQuery

  const { control, handleSubmit } = useForm<IFillForm>({
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
    },
    // resolver: yupResolver(makePaymentFormSchema),
  });

  const onSubmit: SubmitHandler<IFillForm> = (data) => {
    console.log(data);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="w-[60%]">
        <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
          <label className="text-left mb-[30px] font-inter font-semibold text-[18px]">
            Fill the form below carefully and insure you provide accurate information:
          </label>
        </div>
        {/* step 1 */}
        <>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              name="firstName"
              label={"Name of Organisation"}
              asterisk
              control={control as never}
            />
            <CustomInput
              name="email"
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              label={"Organization Email"}
              asterisk
              control={control as never}
            />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput
              name="phoneNumber"
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              label={"Phone No."}
              asterisk
              control={control as never}
            />
            <CustomInput
              name="lastName"
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              label={"Contact Person Name"}
              asterisk
              control={control as never}
            />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="rc" label={"Registration Number (RC)"} asterisk control={control as never} />
            <CustomSelect
              control={control as never}
              name="nationRegistration"
              label="Nation of Registration"
              asterisk
              placeholder=" "
              options={genderData}
            />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomSelect
              control={control as never}
              name="localGovernment"
              label="Local Government"
              asterisk
              placeholder=" "
              options={genderData}
            />
            <div className="flex-1" />
          </div>
          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/* step 22 */}
        <>
          <div className="flex flex-row items-start gap-1  mt-[16px]">
            <label className="text-left mb-[30px] font-inter font-medium text-[14px]">Contact Person</label>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <CustomInput name="designation" label={"Designation"} asterisk control={control as never} />
            <CustomSelect
              control={control as never}
              name="title"
              label="Title"
              asterisk
              placeholder=" "
              options={titleData}
            />
            {/* <CustomInput type="date" name="dob" label={"Date of Birth"} asterisk control={control as never} /> */}
          </div>

          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/* <>
          <div className="flex flex-row items-start gap-1  mt-[16px]">
            <label className="text-left mb-[30px] font-inter font-medium text-[14px]">Contact Person</label>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <CustomInput name="designation" label={"Designation"} control={control as never} />
            <CustomSelect
              control={control as never}
              name="gender"
              label="Gender"
              asterisk
              placeholder=" "
              options={genderData}
            />
            
          </div>

          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="occupation" label={"Occupation"} control={control as never} />
            <CustomInput name="children" label={"Children"} control={control as never} />
          </div>
          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </> */}
        {/* step 3 */}
        {/* <>
          <div className="flex flex-row justify-between gap-6">
            <CustomInput name="nationality" label={"Nationality"} asterisk control={control as never} />
            <CustomInput name="origin" label={"State of Origin"} asterisk control={control as never} />
          </div>

          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="localGov" label={"Local Gov."} control={control as never} />
            <div className="flex-1" />
          </div>
          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </> */}
        {/* step 4 */}
        {/* <>
          <div className="flex flex-row justify-between gap-6">
            <CustomSelect
              control={control as never}
              name="maritalStatus"
              label="Marital Status"
              asterisk
              placeholder=" "
              options={maritalStatusData}
            />
            <CustomSelect
              control={control as never}
              name="religion"
              label="Religion"
              asterisk
              placeholder=" "
              options={religionData}
            />
          </div>

          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomSelect
              control={control as never}
              name="education"
              label="Education"
              asterisk
              placeholder=" "
              options={educationData}
            />
            <div className="flex-1" />
          </div>
          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </> */}
        {/* step 5 */}

        <>
          <div className="flex flex-row items-start gap-1  mt-[16px]">
            <label className="text-left mb-[30px] font-inter font-medium text-[14px]">
              Address of Organization / Company Headquarter:
            </label>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <CustomInput name="houseNo" label={"House No:"} asterisk control={control as never} />
            <CustomInput name="streetName" label={"Street Name"} asterisk control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="streetExtension" label={"Street Extension"} control={control as never} />
            <CustomInput name="cityDistrict" label={"City-District:"} asterisk control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="state" label={"State:"} asterisk control={control as never} />
            <CustomInput name="country" label={"Country:"} asterisk control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="popmb" label={"P.O/P.M.B:"} asterisk control={control as never} />
            <CustomInput name="co" label={"C/O:"} asterisk control={control as never} />
          </div>

          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="additional" label={"Additional Address Information:"} control={control as never} />
          </div>
          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>

        <>
          <div className="flex flex-row justify-between gap-6">
            <CustomInput name="officePhone" label={"Office Phone:"} asterisk control={control as never} />
            <CustomInput name="mobile" label={"Mobile"} asterisk control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="facsimile" label={"Facsimile"} control={control as never} />
            <CustomInput name="emailss" label={"Email"} asterisk control={control as never} />
          </div>
          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>

        {/*  step 6 */}
        <>
          <div className="flex flex-row justify-between gap-6">
            <CustomInput name="homePhone" label={"Home Phone::"} control={control as never} />
            <CustomInput name="office" label={"Office:"} control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="emails" label={"Email"} asterisk control={control as never} />
            <div className="flex-1" />
          </div>

          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/*  step 7 */}
        <>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <label className="text-left mb-[8px] font-inter font-normal text-sm">
              Have there been previous or other allocations by the applicant within FCT? Please specify File Number(s):
            </label>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <CustomInput name="homePhone" label={""} control={control as never} />
            <div className="flex-auto" />
          </div>

          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/* step 8 */}
        <>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <div className="flex flex-row items-start gap-1 mb-[16px]">
              <label className="text-left mb-[8px] font-inter font-normal text-sm">
                Specify the Landuse or the Purpose from List, grey filled figures are not available
              </label>
              <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <CustomSelect
              control={control as never}
              name="landuse"
              label="Landuse"
              placeholder=" "
              options={landuseData}
            />
            <CustomSelect
              control={control as never}
              name="purpose"
              label="Purpose"
              placeholder=" "
              options={purposeData}
            />
          </div>

          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/* step 9 */}
        <>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <div className="flex flex-row items-start gap-1 mb-[16px]">
              <label className="text-left mb-[8px] font-inter font-normal text-sm">
                Preferred Location (Council or District)
              </label>
              <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <CustomSelect
              control={control as never}
              name="council"
              label="Council"
              placeholder=" "
              options={councilData}
            />
            <CustomSelect
              control={control as never}
              name="district"
              label="District"
              placeholder=" "
              options={districtData}
            />
          </div>

          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/* step 10 */}
        <>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="plotSize" label={"Required Plot Size (sqm):"} asterisk control={control as never} />
            <div className="flex-auto" />
          </div>

          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/* step 11 */}
        <>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomAreaText
              name="comment"
              label={"Write any comment that could assist the authority in processing this application:"}
              control={control as never}
            />
          </div>

          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/* step 12 */}
        <>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomFileInput
              name="signature"
              asterisk
              label={"Representative Signature:"}
              control={control as never}
              tag="Ensure signature is clearly visible"
            />
          </div>

          <div className="mt-[40px]" />
          {/* <div className={`bg-gray-400 h-[1px] w-4/4`} /> */}
          <div className="mb-[40px]" />
        </>
        {/* step 13 */}
        {/* <>
          <div className="flex flex-row justify-between gap-6 mt-[16px] mb-[40px]">
            <div className="flex flex-row items-start gap-1 mb-[16px]">
              <label className="text-left mb-[8px] font-inter font-normal text-sm text-black/40">
                <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">Note: </label>
                It is a punishable offence to provide any false information and or make any false statements or claim
                when completing this form. Where it is subsequently discovered that a Certificate of Occupancy was
                issued based on false or inaccurate information, the Minister may in his sole discretion, revoke such
                Certificate of Occupancy. The minister reserves the right to reject any application for not properly or
                fully completed and shall not incur any liability for any such revocation". The information you supply
                on this form is public knowledge and may be published in the media.
              </label>
            </div>
          </div>
        </> */}
        <CustomButton name="Submit form" trailingIcon={<FaArrowRight />} />
        <div className="mb-[40px]" />
      </div>
    </form>
  );
};

export default FillForm;
