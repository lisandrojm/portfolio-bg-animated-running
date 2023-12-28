/* src/app/(routes)/page.tsx */

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/_styles/page.module.css';
import SectionContainer from '@/_components/SectionContainer';
import BgIcons from '@/_components/_icons/BgIcons';

/* export default async function Home() { */
/* loading testing */
/*   await new Promise((resolve) => setTimeout(resolve, 1000)); */

export default function Home() {
  return (
    <SectionContainer>
      <div className="flex flex-col items-center justify-between">
        {/* Fonts test */}
        <div className="border rounded p-3 my-1 mb-3">
          <h1 className="font-serif italic text-3xl">Homes</h1>
        </div>
        <div className="border rounded p-3 my-1">
          <h1 className="font-serif italic text-3xl">Fonts</h1>
          <p>Roboto Mono</p>
          <p className={`font-flex`}>Roboto Flex</p>
          <p className={`font-serif`}>Roboto Serif</p>
          <p className={`font-serif font-bold`}>Roboto Serif bold</p>
          <p className={`font-serif italic`}>Roboto Serif italic</p>
          <p className={`font-serif italic font-bold uppercase`}>Roboto Serif italic bold uppercase</p>
        </div>
      </div>
    </SectionContainer>
  );
}
