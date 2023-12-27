// src/app/_components/_icons/BgIcons.tsx

import React from 'react';
import PropTypes from 'prop-types';
import { FaNodeJs, FaHtml5, FaGithub, FaReact, FaBootstrap, FaGit } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { TbBrandNextjs, TbBrandVercel } from 'react-icons/tb';
import { SiTailwindcss, SiExpress, SiNestjs, SiTypescript, SiMongodb } from 'react-icons/si';

type BgIconsProps = {
  kind: keyof typeof components;
  textColor: string;
  size?: number;
};

const components = {
  html: FaHtml5,
  github: FaGithub,
  react: FaReact,
  nextjs: TbBrandNextjs,
  tailwind: SiTailwindcss,
  vercel: TbBrandVercel,
  js: IoLogoJavascript,
  bootstrap: FaBootstrap,
  nodejs: FaNodeJs,
  express: SiExpress,
  nestjs: SiNestjs,
  ts: SiTypescript,
  git: FaGit,
  mongodb: SiMongodb,
};

const BgIcons: React.FC<BgIconsProps> = ({ kind, textColor, size = 2 }) => {
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
