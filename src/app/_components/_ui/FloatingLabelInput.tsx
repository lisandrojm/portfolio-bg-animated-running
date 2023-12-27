/* src/app/_components/_ui/FloatingLabelInput.tsx */

import React, { useState } from 'react';

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function FloatingLabelInput({ label, ...props }: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <label className={`absolute left-3.5 top-1.5 py-0 transition-all duration-300 uppercase ${isFocused || (props.value && props.value.toString().trim() !== '') ? 'text-orange text-xs' : 'text-white text-sm'}`} htmlFor={props.id}>
        {label}
      </label>
      <input {...props} className="block w-full border-0 px-4.5 pt-5 bg-transparent text-orange shadow-sm ring-1 ring-inset ring-white focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
    </div>
  );
}
