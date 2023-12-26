/* src/app/_components/NavLinks.tsx */

import Link from 'next/link';

export default function NavLinks() {
  return (
    <ul className=" lg:inline">
      <div className="flex gap-5 flex-col">
        <li>
          <Link className="text-white" href="#">
            works
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link className="text-white" href="#">
            skills
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link className="text-white" href="#">
            about
          </Link>
        </li>
        <span>|</span>
        <li>
          <Link className="text-white" href="#">
            contact
          </Link>
        </li>
      </div>
    </ul>
  );
}
