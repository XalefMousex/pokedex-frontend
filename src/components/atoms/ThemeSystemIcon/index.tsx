import { cn } from 'utils/tailwind/cn';

import { type ThemeSystemIconProps } from './types';

export const ThemeSystemIcon = ({
  className,
  ...props
}: ThemeSystemIconProps) => (
  <svg
    className={cn(
      'overflow-hidden rounded-[6px]',
      `
        fill-primary-500 stroke-primary-500
        group-data-[state=unchecked]:fill-neutral-500
        group-data-[state=unchecked]:stroke-neutral-500
        dark:group-data-[state=unchecked]:fill-neutral-400
        dark:group-data-[state=unchecked]:stroke-neutral-400
      `,
      className,
    )}
    viewBox="0 0 79.86 51.14"
    data-name="icon-theme-system"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path opacity={0.2} d="M0 0.03H22.88V51.17H0z" />
    <circle
      cx={6.7}
      r={3.54}
      cy={7.04}
      fill="#fff"
      opacity={0.8}
      stroke="#fff"
      strokeLinecap="round"
      strokeMiterlimit={10}
    />
    <path
      fill="#fff"
      stroke="none"
      opacity={0.75}
      d="M18.12 6.39h-5.87c-.6 0-1.09-.45-1.09-1s.49-1 1.09-1h5.87c.6 0 1.09.45 1.09 1s-.49 1-1.09 1zM16.55 9.77h-4.24c-.55 0-1-.45-1-1s.45-1 1-1h4.24c.55 0 1 .45 1 1s-.45 1-1 1z"
    />
    <path
      fill="#fff"
      stroke="none"
      opacity={0.72}
      d="M18.32 17.37H4.59c-.69 0-1.25-.47-1.25-1.05s.56-1.05 1.25-1.05h13.73c.69 0 1.25.47 1.25 1.05s-.56 1.05-1.25 1.05z"
    />
    <path
      fill="#fff"
      stroke="none"
      opacity={0.55}
      d="M15.34 21.26h-11c-.55 0-1-.41-1-.91s.45-.91 1-.91h11c.55 0 1 .41 1 .91s-.45.91-1 .91z"
    />
    <path
      fill="#fff"
      stroke="none"
      opacity={0.67}
      d="M16.46 25.57H4.43c-.6 0-1.09-.44-1.09-.98s.49-.98 1.09-.98h12.03c.6 0 1.09.44 1.09.98s-.49.98-1.09.98z"
    />
    <rect
      x={33.36}
      y={19.73}
      rx={0.33}
      ry={0.33}
      width={2.75}
      height={3.42}
      stroke="none"
      opacity={0.31}
    />
    <rect
      x={29.64}
      y={16.57}
      rx={0.33}
      ry={0.33}
      width={2.75}
      height={6.58}
      opacity={0.4}
      stroke="none"
    />
    <rect
      x={37.16}
      y={14.44}
      rx={0.33}
      ry={0.33}
      width={2.75}
      height={8.7}
      stroke="none"
      opacity={0.26}
    />
    <rect
      x={41.19}
      y={10.75}
      rx={0.33}
      ry={0.33}
      width={2.75}
      height={12.4}
      stroke="none"
      opacity={0.37}
    />
    <g>
      <circle r={8} cx={62.74} cy={16.32} opacity={0.25} />
      <path
        opacity={0.45}
        d="M62.74 16.32l4.1-6.87c1.19.71 2.18 1.72 2.86 2.92s1.04 2.57 1.04 3.95h-8z"
      />
    </g>
    <rect
      x={29.64}
      y={27.75}
      rx={1.69}
      ry={1.69}
      width={41.62}
      opacity={0.3}
      stroke="none"
      height={18.62}
      strokeLinecap="round"
      strokeMiterlimit={10}
    />
  </svg>
);
