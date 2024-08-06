import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import CustomSelect from "./CustomSelect";
import {
  councilData,
  districtData,
  educationData,
  genderData,
  landuseData,
  maritalStatusData,
  purposeData,
  religionData,
  titleData,
} from "../data";
import { IFillForm } from "../types";
import CustomAreaText from "./CustomAreaText";
import CustomFileInput from "./CustomFileInput";
import { useLocation } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FillFormForm {
  handleNext: () => void | undefined;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  middle?: string;
}

// Validation schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  gender: Yup.string().required("Gender is required"),
  occupation: Yup.string().required("Occupation is required"),
  children: Yup.number()
    .required("Number of Children is required")
    .positive("Must be positive")
    .integer("Must be an integer"),
  nationality: Yup.string().required("Nationality is required"),
  origin: Yup.string().required("State of Origin is required"),
  localGov: Yup.string().required("Local Gov. is required"),

  // orgemail: Yup.string().required("Email is required"),
  // officePhone: Yup.string().required("Office Phone is required"),
  // mobile: Yup.string().required("Mobile is required"),
  // lc: Yup.string().required("Local Government is required"),
  // nor: Yup.string().required("Nation of Registration is required"),
  // rc: Yup.string().required("Registration Number (RC) is required"),
  // designation: Yup.string().required("Designation is required"),
  // email: Yup.string().email("Invalid email").required("Email is required"),
  // phoneNumber: Yup.string()
  //   .required("Phone No. is required")
  //   .matches(/^[0-9]{10,11}$/, "Phone number must be 10 or 11 digits"),

  // dob: Yup.date().required("Date of Birth is required").nullable(),

  maritalStatus: Yup.string().required("Marital Status is required"),
  religion: Yup.string().required("Religion is required"),
  education: Yup.string().required("Education is required"),
  houseNo: Yup.string().required("House No is required"),
  streetName: Yup.string().required("Street Name is required"),
  streetExtension: Yup.string(),
  cityDistrict: Yup.string().required("City-District is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  popmb: Yup.string().required("P.O/P.M.B is required"),
  co: Yup.string().required("C/O is required"),
  // additional: Yup.string(),
  office: Yup.string().required("Office is required"),
  homePhone: Yup.string().matches(/^[0-9]{10,11}$/, "Phone number must be 10 or 11 digits"),
  nin: Yup.string().required("NIN is required").length(11, "NIN must be 11 digits"),
  landuse: Yup.string().required("Landuse is required"),
  purpose: Yup.string().required("Purpose is required"),
  council: Yup.string().required("Council is required"),
  district: Yup.string().required("District is required"),
  plotSize: Yup.number().required("Plot Size is required").positive("Must be positive"),
  // comment: Yup.string(),
  // signature: Yup.mixed().required('Signature is required').test('fileType', 'Unsupported Format', (value) => {
  //   return value && value[0] as never && ['image/jpeg', 'image/png'].includes(value[0].type);
  // }),
});

const OrgSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  // office: Yup.string().required("Office is required"),
  // orgemail: Yup.string().required("Email is required"),
  // officePhone: Yup.string().required("Office Phone is required"),
  // mobile: Yup.string().required("Mobile is required"),
  lc: Yup.string().required("Local Government is required"),
  nor: Yup.string().required("Nation of Registration is required"),
  rc: Yup.string().required("Registration Number (RC) is required"),
  // designation: Yup.string().required("Designation is required"),
  // email: Yup.string().email("Invalid email").required("Email is required"),
  // phoneNumber: Yup.string()
  //   .required("Phone No. is required")
  //   .matches(/^[0-9]{10,11}$/, "Phone number must be 10 or 11 digits"),
  // gender: Yup.string().required("Gender is required"),
  // dob: Yup.date().required("Date of Birth is required").nullable(),
  // occupation: Yup.string().required("Occupation is required"),
  // children: Yup.number()
  //   .required("Number of Children is required")
  //   .positive("Must be positive")
  //   .integer("Must be an integer"),
  // nationality: Yup.string().required("Nationality is required"),
  // origin: Yup.string().required("State of Origin is required"),
  // localGov: Yup.string().required("Local Gov. is required"),
  maritalStatus: Yup.string().required("Marital Status is required"),
  religion: Yup.string().required("Religion is required"),
  education: Yup.string().required("Education is required"),
  houseNo: Yup.string().required("House No is required"),
  streetName: Yup.string().required("Street Name is required"),
  streetExtension: Yup.string(),
  cityDistrict: Yup.string().required("City-District is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  popmb: Yup.string().required("P.O/P.M.B is required"),
  co: Yup.string().required("C/O is required"),
  // additional: Yup.string(),
  // homePhone: Yup.string().matches(/^[0-9]{10,11}$/, "Phone number must be 10 or 11 digits"),
  // nin: Yup.string().required("NIN is required").length(11, "NIN must be 11 digits"),
  // homePhoneeeee: Yup.string(),
  // landuse: Yup.string().required("Landuse is required"),
  // purpose: Yup.string().required("Purpose is required"),
  // council: Yup.string().required("Council is required"),
  // district: Yup.string().required("District is required"),
  // plotSize: Yup.number().required("Plot Size is required").positive("Must be positive"),
  // comment: Yup.string(),
  // signature: Yup.mixed().required('Signature is required').test('fileType', 'Unsupported Format', (value) => {
  //   return value && value[0] as never && ['image/jpeg', 'image/png'].includes(value[0].type);
  // }),
});

const FillForm: React.FC<FillFormForm> = ({ handleNext, firstName, lastName, email, phoneNumber }) => {
  const params = useLocation();

  const { control, handleSubmit } = useForm<IFillForm>({
    defaultValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      middle: "",
    },
    resolver: yupResolver(params.state.type === "Individual" ? validationSchema : OrgSchema) as never,
  });

  const onSubmit: SubmitHandler<IFillForm> = () => {
    handleNext();
  };

  return params.state.type === "Individual" ? (
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
            <CustomSelect
              control={control as never}
              name="title"
              label="Title"
              asterisk
              placeholder=" "
              options={titleData}
            />
            <CustomInput
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              name="firstName"
              label={"First Name"}
              asterisk
              control={control as never}
            />
          </div>

          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput
              name="middle"
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              label={"Middle Name"}
              asterisk
              control={control as never}
            />
            <CustomInput
              name="lastName"
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              label={"Last Name"}
              asterisk
              control={control as never}
            />
          </div>

          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput
              name="email"
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              label={"Email"}
              asterisk
              control={control as never}
            />
            <CustomInput
              name="phoneNumber"
              plainText
              plainStyle="bg-[#F6F6F6] border-[1px] rounded-md border-[#F6F6F6] text-black/30"
              label={"Phone No."}
              asterisk
              control={control as never}
            />
          </div>
          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>
        {/* step 22 */}
        <>
          <div className="flex flex-row justify-between gap-6">
            <CustomSelect
              control={control as never}
              name="gender"
              label="Gender"
              asterisk
              placeholder=" "
              options={genderData}
            />
            <CustomInput type="date" name="dob" label={"Date of Birth"} asterisk control={control as never} />
          </div>

          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="occupation" label={"Occupation"} asterisk control={control as never} />
            <CustomInput name="children" label={"Children"} asterisk control={control as never} />

            {/* <CustomInput type="date" name="dob" label={"Date of Birth"} asterisk control={control as never} /> */}
          </div>

          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>

        {/* step 3 */}
        <>
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
        </>
        <>
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
        </>

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
            <CustomInput name="homePhone" label={"Home Phone:"} control={control as never} />
            <CustomInput name="office" label={"Office:"} control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="nin" label={"NIN (National Identity Number)"} asterisk control={control as never} />
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
            <CustomInput name="homePhoneeeee" label={""} control={control as never} />
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
          <div className="mb-[40px]" />
        </>

        <CustomButton name="Submit form" trailingIcon={<FaArrowRight />} />
        <div className="mb-[40px]" />
      </div>
    </form>
  ) : (
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
            <CustomInput name="nor" label={"Nation of Registration"} asterisk control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="lc" label={"Local Government"} asterisk control={control as never} />

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
            <CustomInput name="tin" label={"TIN (Tax Identification Number):"} control={control as never} />
            <CustomInput name="orgemail" label={"Email"} asterisk control={control as never} />
          </div>

          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <CustomInput name="office" label={"Office:"} asterisk control={control as never} />
            <div className="flex-1" />
          </div>
          <div className="mt-[40px]" />
          <div className={`bg-gray-400 h-[1px] w-4/4`} />
          <div className="mb-[40px]" />
        </>

        <>
          <div className="flex flex-row justify-between gap-6 mt-[16px]">
            <label className="text-left mb-[8px] font-inter font-normal text-sm">
              Have there been previous or other allocations by the applicant within FCT? Please specify File Number(s):
            </label>
          </div>
          <div className="flex flex-row justify-between gap-6">
            <CustomInput name="homePhoneeeee" label={""} control={control as never} />
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
          <div className="mb-[40px]" />
        </>

        <CustomButton name="Submit form" trailingIcon={<FaArrowRight />} />
        <div className="mb-[40px]" />
      </div>
    </form>
  );
};

export default FillForm;
