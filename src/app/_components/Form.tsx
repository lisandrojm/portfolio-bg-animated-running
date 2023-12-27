/* src/app/_components/Form.tsx */

'use client';

import styles from '@/_styles/_components/Form.module.css';
import { useState } from 'react';
import { Button, FloatingLabelInput, FloatingLabelTextarea } from '@/_components/_ui';
import SectionContainer from '@/_components/SectionContainer';

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <SectionContainer>
      <div className="px-6 lg:px-8">
        <div className="mx-auto uppercase max-w-md">
          <h2 className="text-3xl font-bold tracking-tight text-orange sm:text-4xl">
            {' '}
            Let&apos;s go <br />
            to the point
          </h2>
        </div>
        <form action="#" method="POST" className="mx-auto mt-6 max-w-md sm:mt-6">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <div>
                <FloatingLabelInput id="name" label="Name" type="text" name="name" autoComplete="name" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div>
                <FloatingLabelInput id="email" label="Email" type="email" name="email" autoComplete="email" required />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div>
                <FloatingLabelTextarea id="message" label="Message" name="message" autoComplete="message" rows={4} defaultValue={''} />
              </div>
            </div>
          </div>
          <div className="mt-6 text-end">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
}
