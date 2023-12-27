/* src/app/_components/_ui/LinkButton.tsx */

import React from 'react';
import CustomLink from '../Link';
import { Button, Props as ButtonProps } from './Button';

interface LinkButtonProps extends ButtonProps {
  href: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children, ...buttonProps }) => {
  return (
    <CustomLink href={href}>
      <Button {...buttonProps}>{children}</Button>
    </CustomLink>
  );
};

export default LinkButton;
