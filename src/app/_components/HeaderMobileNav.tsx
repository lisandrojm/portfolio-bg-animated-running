/* src/app/_components/MobileNav.tsx */

'use client';

import styles from '@/_styles/_components/MobileNav.module.css';
import { useState } from 'react';
import siteMetadata from '@/_data/siteMetadata';
import Link from './Link';
import headerNavLinks from '@/_data/headerNavLinks';
import { Button } from '@/_components/_ui';

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
    <div>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="lg:hidden pl-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8 text-white">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
      <div className={`fixed left-0 top-0 z-10 h-full w-full transform inset-0 backdrop-blur-lg border-l-[1px] border-orange duration-300 ease-in-out ${navShow ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center pl-8 pr-6 pt-7">
          <div>
            <Link onClick={onToggleNav} className="m-0 leading-5 text-orange font-serif italic text-2xl" href="/" aria-label={siteMetadata.headerTitle}>
              FullStackDev <br />
              <span className="text-sm">lisandrojm </span>
            </Link>
          </div>
          <div>
            <button className="h-8 w-8" aria-label="Toggle Menu" onClick={onToggleNav}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-white">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="fixed h-full">
          {headerNavLinks.map((link, index) => (
            <div key={link.title} className="pl-8 py-4">
              <Link href={link.href} className="text-xl tracking-widest text-white" onClick={onToggleNav}>
                {link.title}
                {index < headerNavLinks.length - 0 && <span className="text-orange mx-3">→</span>}
              </Link>
            </div>
          ))}
          <div className="pl-8 py-4 ">
            <Button size="xxl" font="mono">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
