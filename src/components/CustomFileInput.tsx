import React, { useState } from "react";
import { Control, Controller, FieldValues, RegisterOptions } from "react-hook-form";
import { GrUpload } from "react-icons/gr";

interface CustomFileInputProps {
  style?: string;
  control: Control<FieldValues, unknown>;
  rules?: Omit<RegisterOptions<FieldValues, string>, "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs">;
  name: string;
  label?: string;
  asterisk?: boolean;
  tag?: string;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({ control, name, label, asterisk = false, rules, tag }) => {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onBlur, onChange }, fieldState: { error } }) => (
        <div className="flex flex-col border-red-100 bottom-1 flex-1">
          <div className="flex flex-row items-start gap-1">
            <label className="text-left mb-[8px] font-inter font-normal text-sm text-[14px]">{label}</label>
            {asterisk && <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">*</label>}
          </div>
          <div className="relative flex items-center">
            <input
              type="file"
              accept="image/*"
              className="absolute opacity-0 w-full h-full cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setFilePreview(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                  onChange(file);
                } else {
                  setFilePreview(null);
                }
              }}
              onBlur={onBlur}
            />
            <button
              type="button"
              className="flex items-center justify-center border border-black/30 rounded-md p-2 px-4 mr-[10px] bg-white hover:bg-gray-100 focus:bg-gray-100"
            >
              <GrUpload className="mr-2 text-blue-500" />
              <p className="text-[#1072E5] font-inter font-[14px]">Choose File</p>
            </button>
          </div>
          {filePreview ? (
            <img src={filePreview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-md" />
          ) : (
            <p className="text-left mt-1 text-sm font-inter font-normal text-gray-500">No file chosen</p>
          )}
          {error && <p className="text-left mt-1 text-[red] text-sm font-inter font-normal">{error.message}</p>}
          {tag && <p className="text-left text-sm font-inter font-normal mt-[16px] text-black/30">{tag}</p>}
        </div>
      )}
    />
  );
};

export default CustomFileInput;
