import React from "react";

function Input({ label, type, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-zinc-700">
        {label}
      </label>
      <input
        type={type}
        {...props}
        className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-orange-500"
      />
    </div>
  );
}

export default Input;
