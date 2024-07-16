import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";

interface CustomInput {
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

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  plainText = false,
  asterisk = false,
  valueInput,
}: CustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col justify- border-red-100 bottom-1">
          <div className="flex flex-row items-start gap-1">
            <label className="text-left mb-[8px] font-inter font-normal text-sm">{label}</label>
            {asterisk && <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>}
          </div>
          <input
            type="text"
            disabled={plainText}
            placeholder={placeholder}
            className={
              plainText
                ? `bg-[#E4F0FF] p-[10px] border border-[#E4F0FF] font-inter font-extrabold rounded-md text-base`
                : `bg-[#F6F6F6] p-[10px] border border-gray-300 rounded-md outline-none focus:bg-white`
            }
            value={valueInput || value?.toLowerCase()}
            onChange={(text) => onChange(text)}
            onBlur={() => onBlur()}
          />
          {error && <p className="text-left mt-1 text-[red] text-sm font-inter font-normal">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default CustomInput;
