import { cva } from 'class-variance-authority';

import { cn } from 'utils/tailwind/cn';

import { type BadgeProps } from './types';

export const badgeVariants = cva(
  `
    inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-md
    border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors
    focus-visible:ring-[3px]
    [&>svg]:pointer-events-none [&>svg]:size-3
  `,
  {
    defaultVariants: {
      variant: 'label',
      color: 'primary',
    },
    variants: {
      variant: {
        label: '',
        solid: '',
        outline: 'bg-transparent',
      },
      color: {
        sky: `
          border-sky-500/20
          dark:border-sky-600/30
        `,
        red: `
          border-red-500/20
          dark:border-red-600/30
        `,
        lime: `
          border-lime-500/20
          dark:border-lime-600/30
        `,
        teal: `
          border-teal-500/20
          dark:border-teal-600/30
        `,
        cyan: `
          border-cyan-500/20
          dark:border-cyan-600/30
        `,
        blue: `
          border-blue-500/20
          dark:border-blue-600/30
        `,
        pink: `
          border-pink-500/20
          dark:border-pink-600/30
        `,
        rose: `
          border-rose-500/20
          dark:border-rose-600/30
        `,
        zinc: `
          border-zinc-500/20
          dark:border-zinc-600/30
        `,
        green: `
          border-green-500/20
          dark:border-green-600/30
        `,
        stone: `
          border-stone-500/20
          dark:border-stone-600/30
        `,
        slate: `
          border-slate-500/20
          dark:border-slate-600/30
        `,
        amber: `
          border-amber-500/20
          dark:border-amber-600/30
        `,
        danger: `
          border-danger-500/20
          dark:border-danger-600/30
        `,
        purple: `
          border-purple-500/20
          dark:border-purple-600/30
        `,
        orange: `
          border-orange-500/20
          dark:border-orange-600/30
        `,
        yellow: `
          border-yellow-500/20
          dark:border-yellow-600/30
        `,
        indigo: `
          border-indigo-500/20
          dark:border-indigo-600/30
        `,
        violet: `
          border-violet-500/20
          dark:border-violet-600/30
        `,
        primary: `
          border-primary-500/20
          dark:border-primary-600/30
        `,
        neutral: `
          border-neutral-500/20
          dark:border-neutral-600/30
        `,
        success: `
          border-success-500/20
          dark:border-success-600/30
        `,
        warning: `
          border-warning-500/20
          dark:border-warning-600/30
        `,
        emerald: `
          border-emerald-500/20
          dark:border-emerald-600/30
        `,
        fuchsia: `
          border-fuchsia-500/20
          dark:border-fuchsia-600/30
        `,
      },
    },
    compoundVariants: [
      // Label
      {
        variant: 'label',
        color: 'primary',
        className: `
          bg-primary-500/10 text-primary-600
          dark:bg-primary-600/20 dark:text-primary-500
        `,
      },
      {
        color: 'neutral',
        variant: 'label',
        className: `
          bg-neutral-500/10 text-neutral-600
          dark:bg-neutral-600/20 dark:text-neutral-500
        `,
      },
      {
        color: 'danger',
        variant: 'label',
        className: `
          bg-danger-500/10 text-danger-600
          dark:bg-danger-600/20 dark:text-danger-500
        `,
      },
      {
        variant: 'label',
        color: 'success',
        className: `
          bg-success-500/10 text-success-600
          dark:bg-success-600/20 dark:text-success-500
        `,
      },
      {
        variant: 'label',
        color: 'warning',
        className: `
          bg-warning-500/10 text-warning-600
          dark:bg-warning-600/20 dark:text-warning-500
        `,
      },
      {
        color: 'sky',
        variant: 'label',
        className: `
          bg-sky-500/10 text-sky-600
          dark:bg-sky-600/20 dark:text-sky-500
        `,
      },
      {
        color: 'purple',
        variant: 'label',
        className: `
          bg-purple-500/10 text-purple-600
          dark:bg-purple-600/20 dark:text-purple-500
        `,
      },
      {
        color: 'red',
        variant: 'label',
        className: `
          bg-red-500/10 text-red-600
          dark:bg-red-600/20 dark:text-red-500
        `,
      },
      {
        color: 'orange',
        variant: 'label',
        className: `
          bg-orange-500/10 text-orange-600
          dark:bg-orange-600/20 dark:text-orange-500
        `,
      },
      {
        color: 'yellow',
        variant: 'label',
        className: `
          bg-yellow-500/10 text-yellow-600
          dark:bg-yellow-600/20 dark:text-yellow-500
        `,
      },
      {
        color: 'lime',
        variant: 'label',
        className: `
          bg-lime-500/10 text-lime-600
          dark:bg-lime-600/20 dark:text-lime-500
        `,
      },
      {
        color: 'green',
        variant: 'label',
        className: `
          bg-green-500/10 text-green-600
          dark:bg-green-600/20 dark:text-green-500
        `,
      },
      {
        color: 'emerald',
        variant: 'label',
        className: `
          bg-emerald-500/10 text-emerald-600
          dark:bg-emerald-600/20 dark:text-emerald-500
        `,
      },
      {
        color: 'teal',
        variant: 'label',
        className: `
          bg-teal-500/10 text-teal-600
          dark:bg-teal-600/20 dark:text-teal-500
        `,
      },
      {
        color: 'cyan',
        variant: 'label',
        className: `
          bg-cyan-500/10 text-cyan-600
          dark:bg-cyan-600/20 dark:text-cyan-500
        `,
      },
      {
        color: 'blue',
        variant: 'label',
        className: `
          bg-blue-500/10 text-blue-600
          dark:bg-blue-600/20 dark:text-blue-500
        `,
      },
      {
        color: 'indigo',
        variant: 'label',
        className: `
          bg-indigo-500/10 text-indigo-600
          dark:bg-indigo-600/20 dark:text-indigo-500
        `,
      },
      {
        color: 'violet',
        variant: 'label',
        className: `
          bg-violet-500/10 text-violet-600
          dark:bg-violet-600/20 dark:text-violet-500
        `,
      },
      {
        color: 'fuchsia',
        variant: 'label',
        className: `
          bg-fuchsia-500/10 text-fuchsia-600
          dark:bg-fuchsia-600/20 dark:text-fuchsia-500
        `,
      },
      {
        color: 'pink',
        variant: 'label',
        className: `
          bg-pink-500/10 text-pink-600
          dark:bg-pink-600/20 dark:text-pink-500
        `,
      },
      {
        color: 'rose',
        variant: 'label',
        className: `
          bg-rose-500/10 text-rose-600
          dark:bg-rose-600/20 dark:text-rose-500
        `,
      },
      {
        color: 'stone',
        variant: 'label',
        className: `
          bg-stone-500/10 text-stone-600
          dark:bg-stone-600/20 dark:text-stone-500
        `,
      },
      {
        color: 'zinc',
        variant: 'label',
        className: `
          bg-zinc-500/10 text-zinc-600
          dark:bg-zinc-600/20 dark:text-zinc-500
        `,
      },
      {
        color: 'slate',
        variant: 'label',
        className: `
          bg-slate-500/10 text-slate-600
          dark:bg-slate-600/20 dark:text-slate-500
        `,
      },
      {
        color: 'amber',
        variant: 'label',
        className: `
          bg-amber-500/10 text-amber-600
          dark:bg-amber-600/20 dark:text-amber-500
        `,
      },

      // Outline
      {
        color: 'primary',
        variant: 'outline',
        className: `
          border-primary-500 text-primary-600
          dark:border-primary-500 dark:text-primary-500
        `,
      },
      {
        color: 'neutral',
        variant: 'outline',
        className: `
          border-neutral-500 text-neutral-600
          dark:border-neutral-500 dark:text-neutral-500
        `,
      },
      {
        color: 'danger',
        variant: 'outline',
        className: `
          border-danger-500 text-danger-600
          dark:border-danger-500 dark:text-danger-500
        `,
      },
      {
        color: 'success',
        variant: 'outline',
        className: `
          border-success-500 bg-transparent text-success-600
          dark:border-success-500 dark:text-success-500
        `,
      },
      {
        color: 'warning',
        variant: 'outline',
        className: `
          border-warning-500 text-warning-600
          dark:border-warning-500 dark:text-warning-500
        `,
      },
      {
        color: 'sky',
        variant: 'outline',
        className: `
          border-sky-500 text-sky-600
          dark:border-sky-500 dark:text-sky-500
        `,
      },
      {
        color: 'purple',
        variant: 'outline',
        className: `
          border-purple-500 text-purple-600
          dark:border-purple-500 dark:text-purple-500
        `,
      },
      {
        color: 'red',
        variant: 'outline',
        className: `
          border-red-500 text-red-600
          dark:border-red-500 dark:text-red-500
        `,
      },
      {
        color: 'orange',
        variant: 'outline',
        className: `
          border-orange-500 text-orange-600
          dark:border-orange-500 dark:text-orange-500
        `,
      },
      {
        color: 'yellow',
        variant: 'outline',
        className: `
          border-yellow-500 text-yellow-600
          dark:border-yellow-500 dark:text-yellow-500
        `,
      },
      {
        color: 'lime',
        variant: 'outline',
        className: `
          border-lime-500 text-lime-600
          dark:border-lime-500 dark:text-lime-500
        `,
      },
      {
        color: 'green',
        variant: 'outline',
        className: `
          border-green-500 text-green-600
          dark:border-green-500 dark:text-green-500
        `,
      },
      {
        color: 'emerald',
        variant: 'outline',
        className: `
          border-emerald-500 text-emerald-600
          dark:border-emerald-500 dark:text-emerald-500
        `,
      },
      {
        color: 'teal',
        variant: 'outline',
        className: `
          border-teal-500 text-teal-600
          dark:border-teal-500 dark:text-teal-500
        `,
      },
      {
        color: 'cyan',
        variant: 'outline',
        className: `
          border-cyan-500 text-cyan-600
          dark:border-cyan-500 dark:text-cyan-500
        `,
      },
      {
        color: 'blue',
        variant: 'outline',
        className: `
          border-blue-500 text-blue-600
          dark:border-blue-500 dark:text-blue-500
        `,
      },
      {
        color: 'indigo',
        variant: 'outline',
        className: `
          border-indigo-500 text-indigo-600
          dark:border-indigo-500 dark:text-indigo-500
        `,
      },
      {
        color: 'violet',
        variant: 'outline',
        className: `
          border-violet-500 text-violet-600
          dark:border-violet-500 dark:text-violet-500
        `,
      },
      {
        color: 'fuchsia',
        variant: 'outline',
        className: `
          border-fuchsia-500 text-fuchsia-600
          dark:border-fuchsia-500 dark:text-fuchsia-500
        `,
      },
      {
        color: 'pink',
        variant: 'outline',
        className: `
          border-pink-500 text-pink-600
          dark:border-pink-500 dark:text-pink-500
        `,
      },
      {
        color: 'rose',
        variant: 'outline',
        className: `
          border-rose-500 text-rose-600
          dark:border-rose-500 dark:text-rose-500
        `,
      },
      {
        color: 'stone',
        variant: 'outline',
        className: `
          border-stone-500 text-stone-600
          dark:border-stone-500 dark:text-stone-500
        `,
      },
      {
        color: 'zinc',
        variant: 'outline',
        className: `
          border-zinc-500 text-zinc-600
          dark:border-zinc-500 dark:text-zinc-500
        `,
      },
      {
        color: 'slate',
        variant: 'outline',
        className: `
          border-slate-500 text-slate-600
          dark:border-slate-500 dark:text-slate-500
        `,
      },
      {
        color: 'amber',
        variant: 'outline',
        className: `
          border-amber-500 text-amber-600
          dark:border-amber-500 dark:text-amber-500
        `,
      },

      // Solid
      {
        variant: 'solid',
        color: 'primary',
        className: `
          bg-primary-500 text-white
          dark:bg-primary-500
        `,
      },
      {
        color: 'neutral',
        variant: 'solid',
        className: `
          bg-neutral-500 text-white
          dark:bg-neutral-500
        `,
      },
      {
        color: 'danger',
        variant: 'solid',
        className: `
          bg-danger-500 text-white
          dark:bg-danger-500
        `,
      },
      {
        variant: 'solid',
        color: 'success',
        className: `
          bg-success-500 text-white
          dark:bg-success-500
        `,
      },
      {
        variant: 'solid',
        color: 'warning',
        className: `
          bg-warning-500 text-white
          dark:bg-warning-500
        `,
      },
      {
        color: 'sky',
        variant: 'solid',
        className: `
          bg-sky-500 text-white
          dark:bg-sky-500
        `,
      },
      {
        color: 'purple',
        variant: 'solid',
        className: `
          bg-purple-500 text-white
          dark:bg-purple-500
        `,
      },
      {
        color: 'red',
        variant: 'solid',
        className: `
          bg-red-500 text-white
          dark:bg-red-500
        `,
      },
      {
        color: 'orange',
        variant: 'solid',
        className: `
          bg-orange-500 text-white
          dark:bg-orange-500
        `,
      },
      {
        color: 'yellow',
        variant: 'solid',
        className: `
          bg-yellow-500 text-white
          dark:bg-yellow-500
        `,
      },
      {
        color: 'lime',
        variant: 'solid',
        className: `
          bg-lime-500 text-white
          dark:bg-lime-500
        `,
      },
      {
        color: 'green',
        variant: 'solid',
        className: `
          bg-green-500 text-white
          dark:bg-green-500
        `,
      },
      {
        color: 'emerald',
        variant: 'solid',
        className: `
          bg-emerald-500 text-white
          dark:bg-emerald-500
        `,
      },
      {
        color: 'teal',
        variant: 'solid',
        className: `
          bg-teal-500 text-white
          dark:bg-teal-500
        `,
      },
      {
        color: 'cyan',
        variant: 'solid',
        className: `
          bg-cyan-500 text-white
          dark:bg-cyan-500
        `,
      },
      {
        color: 'blue',
        variant: 'solid',
        className: `
          bg-blue-500 text-white
          dark:bg-blue-500
        `,
      },
      {
        color: 'indigo',
        variant: 'solid',
        className: `
          bg-indigo-500 text-white
          dark:bg-indigo-500
        `,
      },
      {
        color: 'violet',
        variant: 'solid',
        className: `
          bg-violet-500 text-white
          dark:bg-violet-500
        `,
      },
      {
        color: 'fuchsia',
        variant: 'solid',
        className: `
          bg-fuchsia-500 text-white
          dark:bg-fuchsia-500
        `,
      },
      {
        color: 'pink',
        variant: 'solid',
        className: `
          bg-pink-500 text-white
          dark:bg-pink-500
        `,
      },
      {
        color: 'rose',
        variant: 'solid',
        className: `
          bg-rose-500 text-white
          dark:bg-rose-500
        `,
      },
      {
        color: 'stone',
        variant: 'solid',
        className: `
          bg-stone-500 text-white
          dark:bg-stone-500
        `,
      },
      {
        color: 'zinc',
        variant: 'solid',
        className: `
          bg-zinc-500 text-white
          dark:bg-zinc-500
        `,
      },
      {
        color: 'slate',
        variant: 'solid',
        className: `
          bg-slate-500 text-white
          dark:bg-slate-500
        `,
      },
      {
        color: 'amber',
        variant: 'solid',
        className: `
          bg-amber-500 text-white
          dark:bg-amber-500
        `,
      },
    ],
  },
);

export const Badge = ({
  color,
  variant,
  children,
  className,
  icon: Icon,
  ...props
}: BadgeProps) => (
  <span
    data-slot="badge"
    className={cn(badgeVariants({ color, variant }), className)}
    {...props}
  >
    {Icon && Icon}
    {children}
  </span>
);
