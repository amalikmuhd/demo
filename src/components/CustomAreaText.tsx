import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";

interface CustomAreaTextProps {
  style?: String;
  control: Control<FieldValues, unknown>;
  rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
  name: string;
  placeholder?: string;
  label?: string;
  plainText?: boolean;
  asterisk?: boolean;
  valueInput?: string;
}

const CustomAreaText = ({
  control,
  name,
  label,
  placeholder,
  plainText = false,
  asterisk = false,
  valueInput,
}: CustomAreaTextProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col border-red-100 bottom-1 justify-stretch flex-1">
          <div className="flex flex-row gap-1">
            <label className="text-left mb-[8px] font-inter font-normal text-sm">{label}</label>
            {asterisk && <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>}
          </div>
          <textarea
            disabled={plainText}
            placeholder={placeholder}
            className={
              plainText
                ? `bg-[#E4F0FF] p-[10px] border border-[#E4F0FF] font-inter font-extrabold rounded-md text-base`
                : `bg-[#F6F6F6] p-[10px] py-[50px] border border-gray-300 rounded-md outline-none focus:bg-white`
            }
            value={valueInput || value}
            onChange={(text) => onChange(text)}
            onBlur={() => onBlur()}
          />
          {error && <p className="text-left mt-1 text-[red] text-sm font-inter font-normal">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default CustomAreaText;
