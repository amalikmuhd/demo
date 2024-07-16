import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";

interface CustomSelectProps {
  style?: string;
  control: Control<FieldValues, unknown>;
  rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
  name: string;
  placeholder?: string;
  label?: string;
  plainText?: boolean;
  asterisk?: boolean;
  options: { value: string; label: string }[];
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
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onBlur, onChange, value = "" }, fieldState: { error } }) => (
        <div className="flex flex-col justify- border-red-100 bottom-1">
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
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
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

export default CustomSelect;
