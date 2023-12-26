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
    <header className="container mx-auto px-4 flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {' '}
            <div className="mr-3 flex items-center justify-center font-semibold text-white">
              <div className="mr-3">
                <Image src="/logo.svg" alt="logo" width={40} height={40} />
              </div>
              <div>
                <h2>
                  lisandrojm <br className="md:hidden" />
                  <span className="hidden lg:inline">|</span> <span className="hidden md:inline">FullStackDev</span>
                </h2>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-0 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link: NavLink) => link.href !== '/')
          .map((link: NavLink) => (
            <Link key={link.title} href={link.href} className="hidden text-white md:block">
              {link.title}
            </Link>
          ))}
        <Link className="text-white" href="#">
          <FontAwesomeIcon className="text-2xl" icon={faGithub} />
        </Link>
        <Link className="text-white" href="#">
          <FontAwesomeIcon className="m-3 text-2xl" icon={faLinkedin} />
        </Link>
        <ThemeSwitcher />
        <MobileNav />
      </div>
    </header>
  );
}
