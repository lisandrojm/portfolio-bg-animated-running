/* src/app/(routes)/not-found.tsx */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-10">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        Return <span className="underline">Home</span>
      </Link>
    </div>
  );
}
