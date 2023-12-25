/* src/app/_components/Footer.tsx */

import Link from 'next/link';
import styles from '@/_styles/_components/Footer.module.css';

export default function Footer() {
  return (
    <footer className={`${styles.footer} m-3`}>
      <div className="border rounded p-3 my-4 flex justify-between items-end">
        <h1 className="m-1 tertiary__font italic text-3xl">Footer</h1>
        <ul className="flex">
          <li className="m-1 pb-1">
            <Link className="underline text-white" href="/">
              Home
            </Link>
          </li>
          <li className="m-1">
            <Link className="underline text-white" href="/form">
              Form
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
