/* src/app/_components/Footer.tsx */

import Link from 'next/link';
import styles from '@/_styles/_components/Footer.module.css';

export default function Footer() {
  return (
    <header className={`${styles.navbar}`}>
      <nav>
        <div className="container mx-auto">
          <div className="pt-2 pb-10 border-t border-white mx-3 xl:mx-40 px-3">
            <h2>Footer</h2>
          </div>
        </div>
      </nav>
    </header>
  );
}
