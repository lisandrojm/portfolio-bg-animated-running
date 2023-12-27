/* src/app/_components/_icons/LinkIcons.tsx */

import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import Link from 'next/link';

const components = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  react: FaReact,
  nextjs: TbBrandNextjs,
  tailwind: SiTailwindcss,
  vercel: IoLogoVercel,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
  color?: string;
  role?: string;
  onClick?: () => void;
  // Add new props for margin and padding
  margin?: string;
  padding?: string;
};

const Icon = ({ kind, href, size = 8, color = 'orange', onClick, margin, padding }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))) return null;

  const IconComponent = components[kind];

  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <IconComponent className={`text-${color} text-${size}xl ${margin} ${padding}`} onClick={onClick} />
    </Link>
  );
};

export default Icon;
