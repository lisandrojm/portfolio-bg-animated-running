/* src/app/_components/Footer.tsx */

import Link from 'next/link';
import styles from '@/_styles/_components/Footer.module.css';
import HeaderFooterContainer from '@/_components/HeaderFooterContainer';
import LinkIcon from '@/_components/_icons/LinksIcons';

export default function Footer() {
  return (
    <HeaderFooterContainer>
      <footer className={`${styles.footer}`}>
        <div className="container mx-auto">
          <div className="border-t border-white pt-3 px-3 flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
            <div className="flex justify-center items-center">
              <h6 className="font-serif text-xl text-orange">
                site stack <span className="px-2">|</span>
              </h6>
              <ul className="flex gap-3">
                <li>
                  <LinkIcon kind="react" href="https://legacy.reactjs.org/" size={2} color="orange" />
                </li>
                <li>
                  <LinkIcon kind="nextjs" href="https://nextjs.org/" size={2} color="orange" />
                </li>
                <li>
                  <LinkIcon kind="tailwind" href="https://tailwindcss.com/" size={2} color="orange" />
                </li>
              </ul>
            </div>
            <div className="flex">
              <LinkIcon kind="github" href="https://github.com/lisandrojm/portfolio" size={2} color="white" />
              <Link href={'https://github.com/lisandrojm/portfolio'} className="font-serif italic text-white text-md ml-3">
                site code →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </HeaderFooterContainer>
  );
}
