import { forwardRef } from "react";
import { NumericFormat, type NumericFormatProps } from "react-number-format";
import { cn } from "../../utils/cn";

export interface NumericInputProps extends NumericFormatProps {
  label: string;
  labelFor: string;
  required?: boolean;
}

const NumericInput = forwardRef<HTMLInputElement, NumericInputProps>(
  ({ label, className, labelFor, required, ...props }, ref) => (
    <div className={cn("relative", className)}>
      <NumericFormat
        id="floating_outlined"
        className={cn(
          "peer block w-full appearance-none rounded-3xl border-2 border-[#d4d4d2] bg-transparent p-3 outline-none placeholder:text-[#8b8b8b] focus:ring-0",
        )}
        placeholder=" "
        {...props}
        getInputRef={ref}
      />
      <label
        htmlFor={labelFor}
        className="absolute start-1 top-2 z-10 ml-2 origin-[0] -translate-y-[1.1rem] scale-75 transform bg-light px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-[1.1rem] peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#8b8b8b] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
        {required && <span className="text-sm text-red-500">*</span>}{" "}
      </label>
    </div>
  ),
);

NumericInput.displayName = "NumericInput";

export { NumericInput };
