/* src/app/_components/_icons/LinkIcons.tsx */

import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaSun, FaMoon } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss } from 'react-icons/si';
import Link from 'next/link';

const components = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope,
  react: FaReact,
  nextjs: TbBrandNextjs,
  tailwind: SiTailwindcss,
  sun: FaSun,
  moon: FaMoon,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
  size?: number;
  color?: string; // Nueva propiedad para el color del icono
  role?: string; // Nueva propiedad para el color del icono
  onClick?: () => void; // Corregido el nombre de la propiedad a onClick
};

const Icon = ({ kind, href, size = 8, color = 'orange', onClick }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))) return null;

  const IconComponent = components[kind];

  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <IconComponent className={`text-${color} text-${size}xl`} onClick={onClick} />
    </Link>
  );
};

export default Icon;
