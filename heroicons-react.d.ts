declare module '@heroicons/react/solid' {
  import { FunctionComponent, SVGAttributes } from 'react';

  interface IconProps extends SVGAttributes<SVGElement> {
    size?: number;
  }

  export const MoonIcon: FunctionComponent<IconProps>;
  export const SunIcon: FunctionComponent<IconProps>;
  // Agrega otras declaraciones según sea necesario para otros íconos.
}
