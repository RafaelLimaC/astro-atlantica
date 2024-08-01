import { forwardRef } from "react";
import { cn } from "../../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelFor: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, labelFor, type, required, ...props }, ref) => (
    <div className={cn("relative", className)}>
      <input
        type={type}
        id="floating_outlined"
        className={cn(
          "peer block w-full appearance-none rounded-3xl border-2 border-[#d4d4d2] bg-transparent p-3 outline-none placeholder:text-[#8b8b8b] focus:ring-0",
        )}
        placeholder=" "
        {...props}
        ref={ref}
      />
      <label
        htmlFor={labelFor}
        // className="absolute left-5 start-4 top-1 z-10 origin-[0] -translate-y-3 scale-75 transform bg-light px-1 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/5 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-1.5 peer-focus:text-[#8b8b8b] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 "
        className="absolute start-1 top-2 z-10 ml-2 origin-[0] -translate-y-[1.1rem] scale-75 transform bg-light px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-[1.1rem] peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#8b8b8b] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {label}
        {required && <span className="text-sm text-red-500">*</span>}
      </label>
    </div>
  ),
);

Input.displayName = "Input";

export { Input };
