/* src/app/_components/HeaderFooterContainer.tsx */

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function HeaderFooterContainer({ children }: Props) {
  return <section className="py-6 mx-3 xl:mx-40">{children}</section>;
}
