/* src/app/_/Navbar.tsx */

import siteMetadata from '@/_data/siteMetadata';
import headerNavLinks from '@/_data/headerNavLinks';
import Image from 'next/image';
import Link from '@/_components/Link';
import MobileNav from '@/_components/MobileNav';
import ThemeSwitcher from '@/_components/ThemeSwitcher';

interface NavLink {
  title: string;
  href: string;
}
export default function Navbar() {
  return (
    <header className="flex container mx-auto items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {' '}
            <div className="mr-3">
              <div className="mr-3">
                <Image src="/logo.svg" alt="logo" width={40} height={40} />
              </div>
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? <div className="hidden h-6 text-1xl text-white font-semibold sm:block">{siteMetadata.headerTitle}</div> : siteMetadata.headerTitle}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link: NavLink) => link.href !== '/')
          .map((link: NavLink) => (
            <Link key={link.title} href={link.href} className="hidden text-white sm:block">
              {link.title}
            </Link>
          ))}
        <ThemeSwitcher />
        <MobileNav />
      </div>
    </header>
  );
}
