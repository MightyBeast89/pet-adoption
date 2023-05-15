import React from 'react';

const Input = ({ type, label }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder=" "
        className="peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70"
      />
      <label
        className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5 z-10
        left-3
        origin-[0]
        peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0
        peer-focus:scale-75  peer-focus:-translate-y-4
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
