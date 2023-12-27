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
    <section id="animated-cta-bar" className={`${styles.testing}`}>
      <div className="cta-content">
        <SectionContainer>
          <div className="flex flex-col items-center justify-between">
            {/* Fonts test */}
            <div className="border rounded p-3 my-1 mb-3">
              <h1 className="font-serif italic text-3xl">Home</h1>
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
      </div>
      <ul className="floating-icons">
        <li className="drift drift-1 delay-1">
          <div className="float float-1">
            <BgIcons kind="github" textColor="orange" size={1} />
          </div>
        </li>
        <li className="drift drift-2 delay-3">
          <div className="float float-2">
            <BgIcons kind="github" textColor="orange" size={2} />
          </div>
        </li>
        <li className="drift drift-3">
          <div className="float float-3">
            <i className="fa fa-internet-explorer lg"></i>
          </div>
        </li>
        <li className="drift drift-4 delay-2">
          <div className="float float-4">
            <i className="fa fa-edge lg"></i>
          </div>
        </li>
        <li className="drift drift-5">
          <div className="float float-5">
            <i className="fa fa-opera lg"></i>
          </div>
        </li>
        <li className="drift drift-6 delay-2">
          <div className="float float-6">
            <i className="fa fa-android lg"></i>
          </div>
        </li>
        <li className="drift drift-7">
          <div className="float float-7">
            <i className="fa fa-apple lg"></i>
          </div>
        </li>
        <li className="drift drift-8 delay-5">
          <div className="float float-8">
            <i className="fa fa-windows lg"></i>
          </div>
        </li>
        <li className="drift drift-9 delay-5">
          <div className="float float-9">
            <i className="fa fa-safari lg"></i>
          </div>
        </li>
        <li className="drift drift-10 delay-3">
          <div className="float float-10">
            <i className="fa fa-safari sm"></i>
          </div>
        </li>

        <li className="drift drift-5 delay-4">
          <div className="float float-7">
            <i className="fa fa-chrome md"></i>
          </div>
        </li>
        <li className="drift drift-2 delay-5">
          <div className="float float-3">
            <i className="fa fa-firefox sm"></i>
          </div>
        </li>
        <li className="drift drift-3 delay-1">
          <div className="float float-9">
            <i className="fa fa-windows sm"></i>
          </div>
        </li>
        <li className="drift drift-6 delay-5">
          <div className="float float-1">
            <i className="fa fa-edge md"></i>
          </div>
        </li>
        <li className="drift drift-9 delay-2">
          <div className="float float-10">
            <i className="fa fa-apple sm"></i>
          </div>
        </li>
      </ul>
    </section>
  );
}
