import React from "react";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  style?: string;
  control: Control<FieldValues, unknown>;
  rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
  name: string;
  placeholder?: string;
  label?: string;
  plainText?: boolean;
  asterisk?: boolean;
  options: Option[];
  showTheValue?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  control,
  name,
  label,
  placeholder,
  plainText = false,
  asterisk = false,
  rules,
  options,
  showTheValue,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col border-red-100 bottom-1 flex-1">
          <div className="flex flex-row items-start gap-1">
            <label className="text-left mb-[8px] font-inter font-normal text-sm">{label}</label>
            {asterisk && <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>}
          </div>
          <select
            disabled={plainText}
            className={
              plainText
                ? "bg-[#E4F0FF] p-[10px] border border-[#E4F0FF] font-inter font-extrabold rounded-md text-base"
                : "bg-[#F6F6F6] p-[10px] border border-gray-200 rounded-md outline-none focus:bg-white"
            }
            value={showTheValue ? value : null}
            onChange={(e) => onChange(e.target.value)}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.label === "Resettlement" ? "₦30,000" : option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {error && <p className="text-left mt-1 text-[red] text-sm font-inter font-normal">{error.message}</p>}
        </div>
      )}
    />
  );
};
// const CustomSelect: React.FC<CustomSelectProps> = ({
//   control,
//   name,
//   label,
//   placeholder,
//   plainText = false,
//   asterisk = false,
//   rules,
//   options,
// }) => {
//   return (
//     <Controller
//       control={control}
//       name={name}
//       rules={rules}
//       render={({ field: { onBlur, onChange, value = "" }, fieldState: { error } }) => (
//         <div className="flex flex-col border-red-100 bottom-1 flex-1">
//           <div className="flex flex-row items-start gap-1">
//             <label className="text-left mb-[8px] font-inter font-normal text-sm">{label}</label>
//             {asterisk && <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>}
//           </div>
//           <select
//             disabled={plainText}
//             className={
//               plainText
//                 ? "bg-[#E4F0FF] p-[10px] border border-[#E4F0FF] font-inter font-extrabold rounded-md text-base"
//                 : "bg-[#F6F6F6] p-[10px] border border-gray-200 rounded-md outline-none focus:bg-white"
//             }
//             value={value}
//             onChange={(e) => onChange(e.target.value)}
//             onBlur={onBlur}
//           >
//             {placeholder && (
//               <option value="" disabled>
//                 {placeholder}
//               </option>
//             )}
//             {options.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </select>
//           {error && <p className="text-left mt-1 text-[red] text-sm font-inter font-normal">{error.message}</p>}
//         </div>
//       )}
//     />
//   );
// };

export default CustomSelect;
