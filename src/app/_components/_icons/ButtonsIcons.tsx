/* src/app/_components/_icons/ButtonsIcons.tsx */

import { FaSun, FaMoon } from 'react-icons/fa';

const components = {
  sun: FaSun,
  moon: FaMoon,
};

type SocialIconProps = {
  kind: keyof typeof components;
  size?: number;
  color?: string;
  onClick?: () => void;
};

const Icon = ({ kind, size, color, onClick }: SocialIconProps) => {
  const IconComponent = components[kind];

  return (
    <button type="button" onClick={onClick}>
      <span className="sr-only">{kind}</span>
      <IconComponent className={`text-${color} text-${size}xl`} />
    </button>
  );
};

export default Icon;
