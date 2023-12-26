/* src/app/_components/Footer.tsx */
import { FaBeer } from 'react-icons/fa';

import Link from 'next/link';
import styles from '@/_styles/_components/Footer.module.css';
import HeaderFooterContainer from '@/_components/HeaderFooterContainer';
import { FaGithub } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';

export default function Footer() {
  return (
    <HeaderFooterContainer>
      <footer className={`${styles.footer}`}>
        <div className="container mx-auto">
          <div className="border-t border-white pt-2 px-3 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex justify-center items-center">
              <h6 className="font-serif text-xl text-orange">
                site stack <span className="px-2">|</span>
              </h6>
              <ul className="flex gap-3">
                <li>
                  <Link href={'https://legacy.reactjs.org/'} target="_blank" rel="noopener noreferrer">
                    <FaReact className="text-2xl text-orange" />
                  </Link>
                </li>
                <li>
                  <Link href={'https://nextjs.org/'} target="_blank" rel="noopener noreferrer">
                    <TbBrandNextjs className="text-2xl text-orange" />
                  </Link>
                </li>
                <li>
                  <Link href={'https://tailwindcss.com/'} target="_blank" rel="noopener noreferrer">
                    <SiTailwindcss className="text-2xl text-orange" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex">
              <Link href={'https://github.com/lisandrojm/portfolio'} className="flex justify-center items-center font-serif italic text-white text-md gap-3">
                <div>
                  <FaGithub className="text-2xl" />
                </div>
                <div>site code →</div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </HeaderFooterContainer>
  );
}
