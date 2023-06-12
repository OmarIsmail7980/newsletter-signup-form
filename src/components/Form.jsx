import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-bold text-[12px]">Email Address</label>

      <div className="border p-4 rounded-lg mb-4">
        <input
          className="w-full outline-none cursor-pointer"
          type="email"
          placeholder="email@company.com"
        />
      </div>

      <button
        className="p-4 bg-[var(--dark-navy)] rounded-lg text-[var(--white)] font-bold 
      sm:mb-4 hover:bg-[var(--gradient-1)]"
      >
        Subscribe to monthly newsletter
      </button>
    </div>
  );
};

export default Form;
