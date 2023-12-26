/* src/app/_components/MobileNav.tsx */

'use client';

import { useState } from 'react';
import Link from './Link';
import headerNavLinks from '@/_data/headerNavLinks';

export default function MobileNav() {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }
      return !status;
    });
  };

  return (
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="lg:hidden pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-white">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h09a1 1 0 100 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`fixed left-0 top-0 z-10 h-full w-full transform inset-0 backdrop-blur-lg border-l-[1px] border-orange duration-300 ease-in-out ${navShow ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end">
          <button className="mr-4 mt-8 h-8 w-8" aria-label="Toggle Menu" onClick={onToggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-white">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12 py-4">
              <Link href={link.href} className="text-xl tracking-widest text-white" onClick={onToggleNav}>
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
