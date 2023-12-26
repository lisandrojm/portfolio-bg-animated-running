/* src/app/_/Navbar.tsx */

import siteMetadata from '@/_data/siteMetadata';
import headerNavLinks from '@/_data/headerNavLinks';
import Image from 'next/image';
import Link from '@/_components/Link';
import MobileNav from '@/_components/MobileNav';
import ThemeSwitcher from '@/_components/ThemeSwitcher';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface NavLink {
  title: string;
  href: string;
}
export default function Navbar() {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-end justify-between pt-5 sm:pt-8 pb-2 border-b border-white mx-3 xl:mx-40 px-3 ">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                {' '}
                <div className="flex items-center justify-center text-white">
                  <div className="mr-3 mb-1">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                  </div>
                  <div>
                    <h2>
                      <span className="sm:hidden">F.S.Dev</span>
                      <span className="hidden sm:inline-flex">FullStackDev</span>
                      <br />
                      <span className="text-sm">lisandrojm </span>
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center leading-5 ">
            {headerNavLinks
              .filter((link: NavLink) => link.href !== '/')
              .map((link: NavLink, index: number) => (
                <div key={link.title} className="hidden lg:inline">
                  <div className="flex">
                    {index > 0 && <span className="text-white mx-3">|</span>}
                    <Link href={link.href} className="hidden text-white lg:inline">
                      {link.title}
                    </Link>
                  </div>
                </div>
              ))}
            <Link className="text-white" href={siteMetadata.github}>
              <FontAwesomeIcon className="ml-4 sm:ml-5 text-3xl" icon={faGithub} />
            </Link>
            <Link className="text-white" href={siteMetadata.linkedin}>
              <FontAwesomeIcon className="ml-4 mr-3 sm:ml-5 sm:mr-4 text-3xl" icon={faLinkedin} />
            </Link>
            <ThemeSwitcher />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
