'use client';

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';
import { motion, AnimatePresence } from 'framer-motion';

import { cn } from 'utils/tailwind/cn';

import { type ButtonProps } from './types';

export const buttonVariants = cva(
  `
    relative inline-flex cursor-pointer items-center justify-center gap-2
    rounded-md font-medium whitespace-nowrap transition-all duration-200
    ease-in-out
    focus:outline-none
    focus-visible:ring-2 focus-visible:ring-primary-500
    focus-visible:ring-offset-2
    disabled:pointer-events-none disabled:opacity-50
  `,
  {
    defaultVariants: {
      size: 'medium',
      variant: 'label',
      color: 'primary',
      isLoading: false,
      isFullWidth: true,
      isDisabled: false,
    },
    variants: {
      isFullWidth: {
        true: 'w-full',
        false: 'w-fit',
      },
      isLoading: {
        false: '',
        true: 'pointer-events-none cursor-wait opacity-50',
      },
      isDisabled: {
        false: '',
        true: `pointer-events-none cursor-not-allowed opacity-50`,
      },
      variant: {
        label: '',
        soft: 'text-inherit',
        link: 'h-auto p-0 underline',
        solid: 'text-white shadow-sm',
        outline: 'border bg-transparent',
        ghost: 'border-none bg-transparent',
      },
      size: {
        icon: 'size-9',
        medium: `
          h-9 px-4 py-2
          has-[>svg]:px-3
        `,
        large: `
          h-10 rounded-md px-6
          has-[>svg]:px-4
        `,
        small: `
          h-8 gap-1.5 rounded-md px-3
          has-[>svg]:px-2.5
        `,
      },
      color: {
        sky: 'text-sky-600',
        red: 'text-red-600',
        lime: 'text-lime-600',
        teal: 'text-teal-600',
        cyan: 'text-cyan-600',
        blue: 'text-blue-600',
        pink: 'text-pink-600',
        rose: 'text-rose-600',
        zinc: 'text-zinc-600',
        green: 'text-green-600',
        stone: 'text-stone-600',
        slate: 'text-slate-600',
        amber: 'text-amber-600',
        danger: 'text-danger-600',
        purple: 'text-purple-600',
        orange: 'text-orange-600',
        yellow: 'text-yellow-600',
        indigo: 'text-indigo-600',
        violet: 'text-violet-600',
        primary: 'text-primary-600',
        neutral: 'text-neutral-600',
        success: 'text-success-600',
        warning: 'text-warning-600',
        emerald: 'text-emerald-600',
        fuchsia: 'text-fuchsia-600',
      },
    },
    compoundVariants: [
      // Solid
      {
        variant: 'solid',
        color: 'primary',
        className: `
          bg-primary-600 text-white
          hover:bg-primary-700
        `,
      },
      {
        variant: 'solid',
        color: 'neutral',
        className: `
          bg-neutral-500 text-white
          hover:bg-neutral-600
        `,
      },
      {
        color: 'danger',
        variant: 'solid',
        className: `
          bg-danger-600 text-white
          hover:bg-danger-700
        `,
      },
      {
        variant: 'solid',
        color: 'success',
        className: `
          bg-success-600 text-white
          hover:bg-success-700
        `,
      },
      {
        variant: 'solid',
        color: 'warning',
        className: `
          bg-warning-600 text-white
          hover:bg-warning-700
        `,
      },
      {
        color: 'sky',
        variant: 'solid',
        className: `
          bg-sky-500 text-white
          hover:bg-sky-600
        `,
      },
      {
        color: 'purple',
        variant: 'solid',
        className: `
          bg-purple-600 text-white
          hover:bg-purple-700
        `,
      },
      {
        color: 'red',
        variant: 'solid',
        className: `
          bg-red-600 text-white
          hover:bg-red-700
        `,
      },
      {
        color: 'orange',
        variant: 'solid',
        className: `
          bg-orange-600 text-white
          hover:bg-orange-700
        `,
      },
      {
        color: 'yellow',
        variant: 'solid',
        className: `
          bg-yellow-600 text-white
          hover:bg-yellow-700
        `,
      },
      {
        color: 'lime',
        variant: 'solid',
        className: `
          bg-lime-600 text-white
          hover:bg-lime-700
        `,
      },
      {
        color: 'green',
        variant: 'solid',
        className: `
          bg-green-600 text-white
          hover:bg-green-700
        `,
      },
      {
        variant: 'solid',
        color: 'emerald',
        className: `
          bg-emerald-600 text-white
          hover:bg-emerald-700
        `,
      },
      {
        color: 'teal',
        variant: 'solid',
        className: `
          bg-teal-600 text-white
          hover:bg-teal-700
        `,
      },
      {
        color: 'cyan',
        variant: 'solid',
        className: `
          bg-cyan-600 text-white
          hover:bg-cyan-700
        `,
      },
      {
        color: 'blue',
        variant: 'solid',
        className: `
          bg-blue-600 text-white
          hover:bg-blue-700
        `,
      },
      {
        color: 'indigo',
        variant: 'solid',
        className: `
          bg-indigo-600 text-white
          hover:bg-indigo-700
        `,
      },
      {
        color: 'violet',
        variant: 'solid',
        className: `
          bg-violet-600 text-white
          hover:bg-violet-700
        `,
      },
      {
        variant: 'solid',
        color: 'fuchsia',
        className: `
          bg-fuchsia-600 text-white
          hover:bg-fuchsia-700
        `,
      },
      {
        color: 'pink',
        variant: 'solid',
        className: `
          bg-pink-600 text-white
          hover:bg-pink-700
        `,
      },
      {
        color: 'rose',
        variant: 'solid',
        className: `
          bg-rose-600 text-white
          hover:bg-rose-700
        `,
      },
      {
        color: 'stone',
        variant: 'solid',
        className: `
          bg-stone-600 text-white
          hover:bg-stone-700
        `,
      },
      {
        color: 'zinc',
        variant: 'solid',
        className: `
          bg-zinc-600 text-white
          hover:bg-zinc-700
        `,
      },
      {
        color: 'slate',
        variant: 'solid',
        className: `
          bg-slate-600 text-white
          hover:bg-slate-700
        `,
      },
      {
        color: 'amber',
        variant: 'solid',
        className: `
          bg-amber-600 text-white
          hover:bg-amber-700
        `,
      },

      // Outline
      {
        color: 'primary',
        variant: 'outline',
        className: `
          border-primary-600 text-primary-600
          hover:bg-primary-500/10
        `,
      },
      {
        color: 'neutral',
        variant: 'outline',
        className: `
          border-neutral-600 text-neutral-600
          hover:bg-neutral-500/10
        `,
      },
      {
        color: 'danger',
        variant: 'outline',
        className: `
          border-danger-600 text-danger-600
          hover:bg-danger-500/10
        `,
      },
      {
        color: 'success',
        variant: 'outline',
        className: `
          border-success-600 text-success-600
          hover:bg-success-500/10
        `,
      },
      {
        color: 'warning',
        variant: 'outline',
        className: `
          border-warning-600 text-warning-600
          hover:bg-warning-500/10
        `,
      },
      {
        color: 'sky',
        variant: 'outline',
        className: `
          border-sky-600 text-sky-600
          hover:bg-sky-500/10
        `,
      },
      {
        color: 'purple',
        variant: 'outline',
        className: `
          border-purple-600 text-purple-600
          hover:bg-purple-500/10
        `,
      },
      {
        color: 'red',
        variant: 'outline',
        className: `
          border-red-600 text-red-600
          hover:bg-red-500/10
        `,
      },
      {
        color: 'orange',
        variant: 'outline',
        className: `
          border-orange-600 text-orange-600
          hover:bg-orange-500/10
        `,
      },
      {
        color: 'yellow',
        variant: 'outline',
        className: `
          border-yellow-600 text-yellow-600
          hover:bg-yellow-500/10
        `,
      },
      {
        color: 'lime',
        variant: 'outline',
        className: `
          border-lime-600 text-lime-600
          hover:bg-lime-500/10
        `,
      },
      {
        color: 'green',
        variant: 'outline',
        className: `
          border-green-600 text-green-600
          hover:bg-green-500/10
        `,
      },
      {
        color: 'emerald',
        variant: 'outline',
        className: `
          border-emerald-600 text-emerald-600
          hover:bg-emerald-500/10
        `,
      },
      {
        color: 'teal',
        variant: 'outline',
        className: `
          border-teal-600 text-teal-600
          hover:bg-teal-500/10
        `,
      },
      {
        color: 'cyan',
        variant: 'outline',
        className: `
          border-cyan-600 text-cyan-600
          hover:bg-cyan-500/10
        `,
      },
      {
        color: 'blue',
        variant: 'outline',
        className: `
          border-blue-600 text-blue-600
          hover:bg-blue-500/10
        `,
      },
      {
        color: 'indigo',
        variant: 'outline',
        className: `
          border-indigo-600 text-indigo-600
          hover:bg-indigo-500/10
        `,
      },
      {
        color: 'violet',
        variant: 'outline',
        className: `
          border-violet-600 text-violet-600
          hover:bg-violet-500/10
        `,
      },
      {
        color: 'fuchsia',
        variant: 'outline',
        className: `
          border-fuchsia-600 text-fuchsia-600
          hover:bg-fuchsia-500/10
        `,
      },
      {
        color: 'pink',
        variant: 'outline',
        className: `
          border-pink-600 text-pink-600
          hover:bg-pink-500/10
        `,
      },
      {
        color: 'rose',
        variant: 'outline',
        className: `
          border-rose-600 text-rose-600
          hover:bg-rose-500/10
        `,
      },
      {
        color: 'stone',
        variant: 'outline',
        className: `
          border-stone-600 text-stone-600
          hover:bg-stone-500/10
        `,
      },
      {
        color: 'zinc',
        variant: 'outline',
        className: `
          border-zinc-600 text-zinc-600
          hover:bg-zinc-500/10
        `,
      },
      {
        color: 'slate',
        variant: 'outline',
        className: `
          border-slate-600 text-slate-600
          hover:bg-slate-500/10
        `,
      },
      {
        color: 'amber',
        variant: 'outline',
        className: `
          border-amber-600 text-amber-600
          hover:bg-amber-500/10
        `,
      },

      // Soft
      {
        variant: 'soft',
        color: 'primary',
        className: `
          bg-primary-100 text-primary-700
          hover:bg-primary-200
        `,
      },
      {
        variant: 'soft',
        color: 'neutral',
        className: `
          bg-neutral-100 text-neutral-700
          hover:bg-neutral-200
        `,
      },
      {
        variant: 'soft',
        color: 'danger',
        className: `
          bg-danger-100 text-danger-700
          hover:bg-danger-200
        `,
      },
      {
        variant: 'soft',
        color: 'success',
        className: `
          bg-success-100 text-success-700
          hover:bg-success-200
        `,
      },
      {
        variant: 'soft',
        color: 'warning',
        className: `
          bg-warning-100 text-warning-700
          hover:bg-warning-200
        `,
      },
      {
        color: 'sky',
        variant: 'soft',
        className: `
          bg-sky-100 text-sky-700
          hover:bg-sky-200
        `,
      },
      {
        variant: 'soft',
        color: 'purple',
        className: `
          bg-purple-100 text-purple-700
          hover:bg-purple-200
        `,
      },
      {
        color: 'red',
        variant: 'soft',
        className: `
          bg-red-100 text-red-700
          hover:bg-red-200
        `,
      },
      {
        variant: 'soft',
        color: 'orange',
        className: `
          bg-orange-100 text-orange-700
          hover:bg-orange-200
        `,
      },
      {
        variant: 'soft',
        color: 'yellow',
        className: `
          bg-yellow-100 text-yellow-700
          hover:bg-yellow-200
        `,
      },
      {
        color: 'lime',
        variant: 'soft',
        className: `
          bg-lime-100 text-lime-700
          hover:bg-lime-200
        `,
      },
      {
        color: 'green',
        variant: 'soft',
        className: `
          bg-green-100 text-green-700
          hover:bg-green-200
        `,
      },
      {
        variant: 'soft',
        color: 'emerald',
        className: `
          bg-emerald-100 text-emerald-700
          hover:bg-emerald-200
        `,
      },
      {
        color: 'teal',
        variant: 'soft',
        className: `
          bg-teal-100 text-teal-700
          hover:bg-teal-200
        `,
      },
      {
        color: 'cyan',
        variant: 'soft',
        className: `
          bg-cyan-100 text-cyan-700
          hover:bg-cyan-200
        `,
      },
      {
        color: 'blue',
        variant: 'soft',
        className: `
          bg-blue-100 text-blue-700
          hover:bg-blue-200
        `,
      },
      {
        variant: 'soft',
        color: 'indigo',
        className: `
          bg-indigo-100 text-indigo-700
          hover:bg-indigo-200
        `,
      },
      {
        variant: 'soft',
        color: 'violet',
        className: `
          bg-violet-100 text-violet-700
          hover:bg-violet-200
        `,
      },
      {
        variant: 'soft',
        color: 'fuchsia',
        className: `
          bg-fuchsia-100 text-fuchsia-700
          hover:bg-fuchsia-200
        `,
      },
      {
        color: 'pink',
        variant: 'soft',
        className: `
          bg-pink-100 text-pink-700
          hover:bg-pink-200
        `,
      },
      {
        color: 'rose',
        variant: 'soft',
        className: `
          bg-rose-100 text-rose-700
          hover:bg-rose-200
        `,
      },
      {
        color: 'stone',
        variant: 'soft',
        className: `
          bg-stone-100 text-stone-700
          hover:bg-stone-200
        `,
      },
      {
        color: 'zinc',
        variant: 'soft',
        className: `
          bg-zinc-100 text-zinc-700
          hover:bg-zinc-200
        `,
      },
      {
        color: 'slate',
        variant: 'soft',
        className: `
          bg-slate-100 text-slate-700
          hover:bg-slate-200
        `,
      },
      {
        color: 'amber',
        variant: 'soft',
        className: `
          bg-amber-100 text-amber-700
          hover:bg-amber-200
        `,
      },

      // Ghost
      {
        variant: 'ghost',
        color: 'primary',
        className: `
          hover:bg-primary-500/10
          dark:hover:bg-primary-600/20
        `,
      },
      {
        variant: 'ghost',
        color: 'neutral',
        className: `
          hover:bg-neutral-500/10
          dark:hover:bg-neutral-600/20
        `,
      },
      {
        color: 'danger',
        variant: 'ghost',
        className: `
          hover:bg-danger-500/10
          dark:hover:bg-danger-600/20
        `,
      },
      {
        variant: 'ghost',
        color: 'success',
        className: `
          hover:bg-success-500/10
          dark:hover:bg-success-600/20
        `,
      },
      {
        variant: 'ghost',
        color: 'warning',
        className: `
          hover:bg-warning-500/10
          dark:hover:bg-warning-600/20
        `,
      },
      {
        color: 'sky',
        variant: 'ghost',
        className: `
          hover:bg-sky-500/10
          dark:hover:bg-sky-600/20
        `,
      },
      {
        color: 'purple',
        variant: 'ghost',
        className: `
          hover:bg-purple-500/10
          dark:hover:bg-purple-600/20
        `,
      },
      {
        color: 'red',
        variant: 'ghost',
        className: `
          hover:bg-red-500/10
          dark:hover:bg-red-600/20
        `,
      },
      {
        color: 'orange',
        variant: 'ghost',
        className: `
          hover:bg-orange-500/10
          dark:hover:bg-orange-600/20
        `,
      },
      {
        color: 'yellow',
        variant: 'ghost',
        className: `
          hover:bg-yellow-500/10
          dark:hover:bg-yellow-600/20
        `,
      },
      {
        color: 'lime',
        variant: 'ghost',
        className: `
          hover:bg-lime-500/10
          dark:hover:bg-lime-600/20
        `,
      },
      {
        color: 'green',
        variant: 'ghost',
        className: `
          hover:bg-green-500/10
          dark:hover:bg-green-600/20
        `,
      },
      {
        variant: 'ghost',
        color: 'emerald',
        className: `
          hover:bg-emerald-500/10
          dark:hover:bg-emerald-600/20
        `,
      },
      {
        color: 'teal',
        variant: 'ghost',
        className: `
          hover:bg-teal-500/10
          dark:hover:bg-teal-600/20
        `,
      },
      {
        color: 'cyan',
        variant: 'ghost',
        className: `
          hover:bg-cyan-500/10
          dark:hover:bg-cyan-600/20
        `,
      },
      {
        color: 'blue',
        variant: 'ghost',
        className: `
          hover:bg-blue-500/10
          dark:hover:bg-blue-600/20
        `,
      },
      {
        color: 'indigo',
        variant: 'ghost',
        className: `
          hover:bg-indigo-500/10
          dark:hover:bg-indigo-600/20
        `,
      },
      {
        color: 'violet',
        variant: 'ghost',
        className: `
          hover:bg-violet-500/10
          dark:hover:bg-violet-600/20
        `,
      },
      {
        variant: 'ghost',
        color: 'fuchsia',
        className: `
          hover:bg-fuchsia-500/10
          dark:hover:bg-fuchsia-600/20
        `,
      },
      {
        color: 'pink',
        variant: 'ghost',
        className: `
          hover:bg-pink-500/10
          dark:hover:bg-pink-600/20
        `,
      },
      {
        color: 'rose',
        variant: 'ghost',
        className: `
          hover:bg-rose-500/10
          dark:hover:bg-rose-600/20
        `,
      },
      {
        color: 'stone',
        variant: 'ghost',
        className: `
          hover:bg-stone-500/10
          dark:hover:bg-stone-600/20
        `,
      },
      {
        color: 'zinc',
        variant: 'ghost',
        className: `
          hover:bg-zinc-500/10
          dark:hover:bg-zinc-600/20
        `,
      },
      {
        color: 'slate',
        variant: 'ghost',
        className: `
          hover:bg-slate-500/10
          dark:hover:bg-slate-600/20
        `,
      },
      {
        color: 'amber',
        variant: 'ghost',
        className: `
          hover:bg-amber-500/10
          dark:hover:bg-amber-600/20
        `,
      },

      // Label
      {
        variant: 'label',
        color: 'primary',
        className: `
          bg-primary-500/10 text-primary-600
          hover:bg-primary-500/15
        `,
      },
      {
        variant: 'label',
        color: 'neutral',
        className: `
          bg-neutral-500/10 text-neutral-600
          hover:bg-neutral-500/15
        `,
      },
      {
        color: 'danger',
        variant: 'label',
        className: `
          bg-danger-500/10 text-danger-600
          hover:bg-danger-500/15
        `,
      },
      {
        variant: 'label',
        color: 'success',
        className: `
          bg-success-500/10 text-success-600
          hover:bg-success-500/15
        `,
      },
      {
        variant: 'label',
        color: 'warning',
        className: `
          bg-warning-500/10 text-warning-600
          hover:bg-warning-500/15
        `,
      },
      {
        color: 'sky',
        variant: 'label',
        className: `
          bg-sky-500/10 text-sky-600
          hover:bg-sky-500/15
        `,
      },
      {
        color: 'purple',
        variant: 'label',
        className: `
          bg-purple-500/10 text-purple-600
          hover:bg-purple-500/15
        `,
      },
      {
        color: 'red',
        variant: 'label',
        className: `
          bg-red-500/10 text-red-600
          hover:bg-red-500/15
        `,
      },
      {
        color: 'orange',
        variant: 'label',
        className: `
          bg-orange-500/10 text-orange-600
          hover:bg-orange-500/15
        `,
      },
      {
        color: 'yellow',
        variant: 'label',
        className: `
          bg-yellow-500/10 text-yellow-600
          hover:bg-yellow-500/15
        `,
      },
      {
        color: 'lime',
        variant: 'label',
        className: `
          bg-lime-500/10 text-lime-600
          hover:bg-lime-500/15
        `,
      },
      {
        color: 'green',
        variant: 'label',
        className: `
          bg-green-500/10 text-green-600
          hover:bg-green-500/15
        `,
      },
      {
        variant: 'label',
        color: 'emerald',
        className: `
          bg-emerald-500/10 text-emerald-600
          hover:bg-emerald-500/15
        `,
      },
      {
        color: 'teal',
        variant: 'label',
        className: `
          bg-teal-500/10 text-teal-600
          hover:bg-teal-500/15
        `,
      },
      {
        color: 'cyan',
        variant: 'label',
        className: `
          bg-cyan-500/10 text-cyan-600
          hover:bg-cyan-500/15
        `,
      },
      {
        color: 'blue',
        variant: 'label',
        className: `
          bg-blue-500/10 text-blue-600
          hover:bg-blue-500/15
        `,
      },
      {
        color: 'indigo',
        variant: 'label',
        className: `
          bg-indigo-500/10 text-indigo-600
          hover:bg-indigo-500/15
        `,
      },
      {
        color: 'violet',
        variant: 'label',
        className: `
          bg-violet-500/10 text-violet-600
          hover:bg-violet-500/15
        `,
      },
      {
        variant: 'label',
        color: 'fuchsia',
        className: `
          bg-fuchsia-500/10 text-fuchsia-600
          hover:bg-fuchsia-500/15
        `,
      },
      {
        color: 'pink',
        variant: 'label',
        className: `
          bg-pink-500/10 text-pink-600
          hover:bg-pink-500/15
        `,
      },
      {
        color: 'rose',
        variant: 'label',
        className: `
          bg-rose-500/10 text-rose-600
          hover:bg-rose-500/15
        `,
      },
      {
        color: 'stone',
        variant: 'label',
        className: `
          bg-stone-500/10 text-stone-600
          hover:bg-stone-500/15
        `,
      },
      {
        color: 'zinc',
        variant: 'label',
        className: `
          bg-zinc-500/10 text-zinc-600
          hover:bg-zinc-500/15
        `,
      },
      {
        color: 'slate',
        variant: 'label',
        className: `
          bg-slate-500/10 text-slate-600
          hover:bg-slate-500/15
        `,
      },
      {
        color: 'amber',
        variant: 'label',
        className: `
          bg-amber-500/10 text-amber-600
          hover:bg-amber-500/15
        `,
      },

      // Link
      {
        variant: 'link',
        color: 'primary',
        className: `
          text-primary-600
          hover:text-primary-700
        `,
      },
      {
        variant: 'link',
        color: 'neutral',
        className: `
          text-neutral-600
          hover:text-neutral-700
        `,
      },
      {
        variant: 'link',
        color: 'danger',
        className: `
          text-danger-600
          hover:text-danger-700
        `,
      },
      {
        variant: 'link',
        color: 'success',
        className: `
          text-success-600
          hover:text-success-700
        `,
      },
      {
        variant: 'link',
        color: 'warning',
        className: `
          text-warning-600
          hover:text-warning-700
        `,
      },
      {
        color: 'sky',
        variant: 'link',
        className: `
          text-sky-600
          hover:text-sky-700
        `,
      },
      {
        variant: 'link',
        color: 'purple',
        className: `
          text-purple-600
          hover:text-purple-700
        `,
      },
      {
        color: 'red',
        variant: 'link',
        className: `
          text-red-600
          hover:text-red-700
        `,
      },
      {
        variant: 'link',
        color: 'orange',
        className: `
          text-orange-600
          hover:text-orange-700
        `,
      },
      {
        variant: 'link',
        color: 'yellow',
        className: `
          text-yellow-600
          hover:text-yellow-700
        `,
      },
      {
        color: 'lime',
        variant: 'link',
        className: `
          text-lime-600
          hover:text-lime-700
        `,
      },
      {
        color: 'green',
        variant: 'link',
        className: `
          text-green-600
          hover:text-green-700
        `,
      },
      {
        variant: 'link',
        color: 'emerald',
        className: `
          text-emerald-600
          hover:text-emerald-700
        `,
      },
      {
        color: 'teal',
        variant: 'link',
        className: `
          text-teal-600
          hover:text-teal-700
        `,
      },
      {
        color: 'cyan',
        variant: 'link',
        className: `
          text-cyan-600
          hover:text-cyan-700
        `,
      },
      {
        color: 'blue',
        variant: 'link',
        className: `
          text-blue-600
          hover:text-blue-700
        `,
      },
      {
        variant: 'link',
        color: 'indigo',
        className: `
          text-indigo-600
          hover:text-indigo-700
        `,
      },
      {
        variant: 'link',
        color: 'violet',
        className: `
          text-violet-600
          hover:text-violet-700
        `,
      },
      {
        variant: 'link',
        color: 'fuchsia',
        className: `
          text-fuchsia-600
          hover:text-fuchsia-700
        `,
      },
      {
        color: 'pink',
        variant: 'link',
        className: `
          text-pink-600
          hover:text-pink-700
        `,
      },
      {
        color: 'rose',
        variant: 'link',
        className: `
          text-rose-600
          hover:text-rose-700
        `,
      },
      {
        color: 'stone',
        variant: 'link',
        className: `
          text-stone-600
          hover:text-stone-700
        `,
      },
      {
        color: 'zinc',
        variant: 'link',
        className: `
          text-zinc-600
          hover:text-zinc-700
        `,
      },
      {
        color: 'slate',
        variant: 'link',
        className: `
          text-slate-600
          hover:text-slate-700
        `,
      },
      {
        color: 'amber',
        variant: 'link',
        className: `
          text-amber-600
          hover:text-amber-700
        `,
      },
    ],
  },
);

const buttonAnimations = {
  initial: { scale: 1 },
  tap: {
    scale: 0.98,
    transition: {
      damping: 25,
      stiffness: 400,
      type: 'spring' as const,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      damping: 25,
      stiffness: 400,
      type: 'spring' as const,
    },
  },
  disabled: {
    scale: 1,
    transition: {
      damping: 25,
      stiffness: 400,
      type: 'spring' as const,
    },
  },
};

const loadingSpinnerAnimations = {
  initial: { rotate: 0, opacity: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  animate: {
    opacity: 1,
    rotate: 360,
    transition: {
      opacity: {
        duration: 0.2,
      },
      rotate: {
        duration: 1,
        ease: 'linear' as const,
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  },
};

const contentAnimations = {
  initial: { y: 0, opacity: 1 },
  loading: {
    y: -2,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  loaded: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};

const iconAnimations = {
  initial: { scale: 1, rotate: 0 },
  tap: {
    scale: 0.9,
    transition: {
      damping: 25,
      stiffness: 400,
      type: 'spring' as const,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      damping: 25,
      stiffness: 400,
      type: 'spring' as const,
    },
  },
};

export const Button = ({
  icon,
  children,
  className,
  size = 'medium',
  color = 'primary',
  variant = 'label',
  isLoading = false,
  iconAlign = 'left',
  isDisabled = false,
  isFullWidth = false,
  ...props
}: ButtonProps) => {
  const isInteractive = !isDisabled && !isLoading && variant !== 'link';

  return (
    <motion.button
      className={twMerge(
        cn(
          buttonVariants({
            size,
            color,
            variant,
            isLoading,
            isDisabled,
            isFullWidth,
          }),
        ),
        className,
      )}
      type="button"
      initial="initial"
      variants={buttonAnimations}
      disabled={isDisabled || isLoading}
      whileTap={isInteractive ? 'tap' : 'disabled'}
      whileHover={isInteractive ? 'hover' : 'disabled'}
      {...props}
    >
      {variant === 'label' && (
        <motion.span
          initial={{ opacity: 0.16 }}
          transition={{ duration: 0.2 }}
          whileHover={isInteractive ? { opacity: 0.24 } : { opacity: 0.16 }}
          className="absolute inset-0 -z-10 rounded-md bg-current opacity-[16%]"
          aria-hidden
        />
      )}

      <motion.div
        className={clsx(
          `relative z-10 flex w-full items-center justify-center gap-2`,
          {
            'flex-row': iconAlign === 'left',
            'flex-row-reverse': iconAlign === 'right',
          },
        )}
      >
        <AnimatePresence mode="wait">
          {icon && (
            <motion.span
              animate={
                isLoading ? contentAnimations.loading : contentAnimations.loaded
              }
              className={clsx({
                'pointer-events-none opacity-0': isLoading,
                'pointer-events-auto opacity-100': !isLoading,
              })}
              key="icon-first"
              initial="initial"
              aria-label="button-icon"
              variants={iconAnimations}
              whileTap={isInteractive ? 'tap' : 'initial'}
              whileHover={isInteractive ? 'hover' : 'initial'}
            >
              {icon}
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {children && (
            <motion.span
              animate={
                isLoading ? contentAnimations.loading : contentAnimations.loaded
              }
              className={cn(
                `leading-[1.125rem] font-medium tracking-[0.027rem]`,
                {
                  'text-sm': size === 'small',
                  'text-lg': size === 'large',
                  'text-[0.9375rem]': size === 'medium',
                  'pointer-events-none opacity-0': isLoading,
                },
              )}
              key="button-text"
            >
              {children}
            </motion.span>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isLoading && (
            <motion.svg
              width="18"
              height="18"
              fill="none"
              exit="exit"
              initial="initial"
              animate="animate"
              viewBox="0 0 22 22"
              aria-label="Loading"
              key="loading-spinner"
              className="absolute z-20"
              xmlns="http://www.w3.org/2000/svg"
              variants={loadingSpinnerAnimations}
            >
              <path
                strokeWidth="2"
                stroke="currentColor"
                strokeLinecap="round"
                d="M14.4375 3.4375C15.8767 4.10872 17.0942 5.17707 17.9468 6.51682C18.7993 7.85658 19.2515 9.41198 19.25 11C19.25 13.188 18.3808 15.2865 16.8336 16.8336C15.2865 18.3808 13.188 19.25 11 19.25C8.81197 19.25 6.71355 18.3808 5.16637 16.8336C3.6192 15.2865 2.75 13.188 2.75 11C2.74851 9.41198 3.20066 7.85658 4.05323 6.51682C4.9058 5.17707 6.12331 4.10872 7.5625 3.4375"
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};
