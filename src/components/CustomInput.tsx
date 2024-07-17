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
  type?: React.HTMLInputTypeAttribute | undefined;
  plainStyle?: string;
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  plainText = false,
  asterisk = false,
  valueInput,
  type = "text",
  plainStyle,
}: CustomInput) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col border-red-100 bottom-1 flex-1">
          <div className="flex flex-row gap-1">
            <label className="text-left mb-[8px] font-inter font-normal text-sm">{label}</label>
            {asterisk && <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>}
          </div>
          <input
            type={type}
            disabled={plainText}
            placeholder={placeholder}
            className={
              plainText
                ? `${
                    plainStyle || "bg-[#E4F0FF] border border-[#E4F0FF] rounded-md font-extrabold "
                  } p-[10px]  font-inter text-base`
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
