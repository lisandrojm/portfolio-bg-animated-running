/* src/app/_components/_ui/Button.tsx */

import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...props }: Props) {
  return (
    <button className={`ml-auto block bg-transparent border border-orange px-3.5 py-2.5 text-center text-sm font-semibold text-orange uppercase shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange`} {...props}>
      {children}
    </button>
  );
}
