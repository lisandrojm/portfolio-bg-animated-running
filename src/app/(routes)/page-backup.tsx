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
    <section id="animated-cta-bar">
      <div className="cta-content">
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
      </div>
      <ul className="floating-icons">
        <li className="drift drift-1 delay-1">
          <div className="float float-1">
            {/*GitHub */}
            <BgIcons kind="github" size={2} />
          </div>
        </li>
        <li className="drift drift-2 delay-3">
          <div className="float float-2">
            {/*React */}
            <BgIcons kind="react" size={3} />
          </div>
        </li>
        <li className="drift drift-3">
          <div className="float float-3">
            {/*Html */}
            <BgIcons kind="html" size={1} />
          </div>
        </li>
        <li className="drift drift-4 delay-2">
          <div className="float float-4">
            {/*Nextjs */}
            <BgIcons kind="nextjs" size={3} />
          </div>
        </li>
        <li className="drift drift-5">
          <div className="float float-5">
            {/*Tailwind */}
            <BgIcons kind="tailwind" size={2} />
          </div>
        </li>
        <li className="drift drift-6 delay-2">
          <div className="float float-6">
            {/*Nextjs */}
            <BgIcons kind="nextjs" size={3} />
          </div>
        </li>
        <li className="drift drift-7">
          <div className="float float-7">
            {/*Vercel */}
            <BgIcons kind="vercel" size={2} />
          </div>
        </li>
        <li className="drift drift-8 delay-5">
          <div className="float float-8">
            {/*Js */}
            <BgIcons kind="js" size={1} />
          </div>
        </li>
        <li className="drift drift-9 delay-5">
          <div className="float float-9">
            {/*Boostrap*/}
            <BgIcons kind="bootstrap" size={2} />
          </div>
        </li>
        <li className="drift drift-10 delay-3">
          <div className="float float-10">
            {/*Nodejs*/}
            <BgIcons kind="nodejs" size={1} />
          </div>
        </li>
        <li className="drift drift-5 delay-4">
          <div className="float float-7">
            {/*Nestjs*/}
            <BgIcons kind="nestjs" size={3} />
          </div>
        </li>
        <li className="drift drift-2 delay-5">
          <div className="float float-3">
            {/*Express*/}
            <BgIcons kind="express" size={3} />
          </div>
        </li>
        <li className="drift drift-3 delay-1 mt-5">
          <div className="float float-8">
            {/*MongoDb*/}
            <BgIcons kind="mongodb" size={1} />
          </div>
        </li>
        <li className="drift drift-6 delay-5">
          <div className="float float-1">
            {/*Typescript*/}
            <BgIcons kind="ts" size={3} />
          </div>
        </li>
        <li className="drift drift-9 delay-2">
          <div className="float float-10">
            {/*Git*/}
            <BgIcons kind="git" size={1} />
          </div>
        </li>
      </ul>
    </section>
  );
}
