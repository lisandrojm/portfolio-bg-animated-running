// src/app/_components/_icons/BgIcons.tsx
import React from 'react';
import PropTypes from 'prop-types';
import { FaHtml5, FaGithub, FaReact } from 'react-icons/fa';
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';

type BgIconsProps = {
  kind: keyof typeof components;
  textColor: string;
  size?: number;
};

const components = {
  github: FaGithub,
  react: FaReact,
  nextjs: TbBrandNextjs,
  tailwind: SiTailwindcss,
  vercel: TbBrandVercel,
};

const BgIcons: React.FC<BgIconsProps> = ({ kind, textColor, size = 8 }) => {
  const IconComponent = components[kind];

  return (
    <span className={`text-${textColor} text-${size}xl`}>
      <IconComponent />
    </span>
  );
};

BgIcons.propTypes = {
  kind: PropTypes.oneOf(Object.keys(components) as (keyof typeof components)[]).isRequired,
  textColor: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default BgIcons;
