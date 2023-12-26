/* src/app/_components/SectionContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SectionContainer({ children }: Props) {
  return <section className="py-5 mx-3 sm:mx-40">{children}</section>;
}
