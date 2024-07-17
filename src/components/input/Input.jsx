export default function Input({ label, ...props }) {
  return (
    <div class="relative">
      <input
        type="text"
        id="floating_outlined"
        class="peer block w-full appearance-none rounded-3xl border-2 border-[#d4d4d2] bg-transparent p-4 outline-none placeholder:text-[#8b8b8b] focus:ring-0"
        placeholder=" "
        {...props}
      />
      <label
        for="floating_outlined"
        className="absolute left-5 start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-light px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#8b8b8b] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400"
      >
        {label}
      </label>
    </div>
  );
}
