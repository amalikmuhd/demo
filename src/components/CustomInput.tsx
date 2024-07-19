import { useState } from "react";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
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
  trailingIcon?: boolean;
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
  trailingIcon,
}: CustomInput) => {
  const [show, setShow] = useState(false);
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
          <div className="flex flex-row">
            <input
              type={type}
              disabled={plainText}
              placeholder={placeholder}
              className={
                plainText
                  ? `${
                      plainStyle || "bg-[#E4F0FF] border border-[#E4F0FF] rounded-md font-extrabold "
                    } p-[10px]  font-inter text-base flex-1`
                  : `bg-[#F6F6F6] p-[10px] border border-gray-300 rounded-md outline-none focus:bg-white flex-1`
              }
              value={valueInput || value}
              onChange={(text) => onChange(text)}
              onBlur={() => onBlur()}
            />
            {
              trailingIcon &&
                (show ? <FiEye onClick={() => setShow(!show)} /> : <FiEyeOff onClick={() => setShow(!show)} />)

              // <TouchableOpacity onPress={() => setShow(!show)}>
              //   <Feather
              //     name={show ? "eye" : "eye-off"}
              //     size={DesignSystem.spacing.rekka_spacing_4x}
              //     color={Theme[colorScheme ?? "light"].colors.iconColor}
              //   />
              // </TouchableOpacity>
            }
          </div>
          {error && <p className="text-left mt-1 text-[red] text-sm font-inter font-normal">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default CustomInput;
