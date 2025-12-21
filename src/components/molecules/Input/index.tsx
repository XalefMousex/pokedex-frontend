'use client';

import { useId, useState } from 'react';

import clsx from 'clsx';
import { AlertCircleIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Label } from 'components/atoms/Label';
import { EyeIcon } from 'components/atoms/EyeIcon';
import { EyeSlashIcon } from 'components/atoms/EyeSlashIcon';

import { cn } from 'utils/tailwind/cn';

import { type InputProps } from './types';

export const Input = ({
  label,
  className,
  icon: Icon,
  errorMessage,
  type = 'text',
  labelClassName,
  animate = true,
  isRequired = false,
  isDisabled = false,
  containerClassName,
  isFullWidth = false,
  labelType = 'default',
  isShowRequired = false,
  ...props
}: InputProps) => {
  const id = useId();

  const [isVisible, setIsVisible] = useState(false);

  const inputType = type === 'password' && isVisible ? 'text' : type;

  const input = (
    <input
      className={cn(
        clsx(
          `
            peer w-full rounded-lg border-2 bg-transparent text-sm
            text-neutral-500 transition-all outline-none
            dark:border-shark-950 dark:text-white
          `,
          {
            'p-3': !Icon && type !== 'password',
            'cursor-not-allowed opacity-50': isDisabled,
            'py-3 pr-8 pl-3': !!Icon || type === 'password',
            'placeholder:opacity-0': labelType === 'floating',
            'border-danger-500 dark:border-danger-500': !!errorMessage,
            'focus:border-primary-300 focus:placeholder:opacity-100 dark:focus:border-primary-500':
              !errorMessage,
          },
        ),
        className,
      )}
      id={id}
      type={inputType}
      autoComplete="on"
      disabled={isDisabled}
      readOnly={isDisabled}
      required={isRequired}
      {...props}
    />
  );

  const renderInput = () => (
    <div className="relative">
      {input}

      {label && labelType === 'floating' && (
        <Label
          className={cn(
            clsx(
              `
                pointer-events-none absolute top-1/2 left-4 z-10
                -translate-y-1/2 px-[3px] text-sm text-neutral-500
                transition-all
                peer-valid:top-[-35%] peer-valid:translate-y-1/2
                peer-read-only:top-[-35%] peer-read-only:translate-y-1/2
                peer-focus:top-[-35%] peer-focus:translate-y-1/2
                before:absolute before:inset-0 before:-z-10 before:w-full
                before:bg-white before:transition-all
                dark:text-gray-400 dark:before:bg-background-950
              `,
              {
                'text-danger-500': !!errorMessage,
                'peer-focus:text-primary-500': !errorMessage,
              },
            ),
            labelClassName,
          )}
          htmlFor={id}
        >
          {label}
          {isRequired && isShowRequired && (
            <span className="absolute -top-1 -right-2 text-danger-500">*</span>
          )}
        </Label>
      )}

      {type === 'password' && (
        <button
          className={clsx(
            `
              absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer p-1
              text-neutral-500 outline-primary-500 transition-all
              hover:text-primary-500
              focus:text-primary-500
              dark:text-neutral-400
              hover:dark:text-primary-500
              focus:dark:text-primary-500
            `,
          )}
          type="button"
          aria-label="Toggle Password Visibility"
          onClick={() => setIsVisible(previous => !previous)}
        >
          {isVisible ? <EyeIcon size={18} /> : <EyeSlashIcon size={18} />}
        </button>
      )}

      {Icon && type !== 'password' && labelType === 'floating' && (
        <div
          className={`
            absolute top-1/2 right-2 -translate-y-1/2 p-1 text-neutral-500
            dark:text-neutral-400
          `}
          aria-label="Input Icon"
        >
          <Icon size={18} />
        </div>
      )}
    </div>
  );

  return (
    <div
      className={cn(
        clsx('relative flex flex-col gap-2', {
          'w-full': isFullWidth,
        }),
        containerClassName,
      )}
    >
      {animate ? (
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-2"
          initial={{ y: 20, opacity: 0 }}
        >
          {label && labelType === 'default' && (
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              initial={{ x: -10, opacity: 0 }}
            >
              <Label
                className={cn(
                  `
                    flex items-center gap-2 text-sm font-medium
                    transition-colors duration-200
                    dark:text-gray-200
                  `,
                  {
                    'text-danger-600 dark:text-danger-400': !!errorMessage,
                  },
                  labelClassName,
                )}
                htmlFor={id}
              >
                {Icon && (
                  <motion.div
                    transition={{ duration: 0.5 }}
                    animate={errorMessage ? { rotate: [0, -5, 5, 0] } : {}}
                  >
                    <Icon size={18} />
                  </motion.div>
                )}
                {label}
                {isRequired && isShowRequired && (
                  <motion.span
                    className={`
                      text-danger-500
                      dark:text-danger-500
                    `}
                    transition={{ duration: 0.3 }}
                    animate={{ scale: [1, 1.2, 1] }}
                  >
                    *
                  </motion.span>
                )}
              </Label>
            </motion.div>
          )}
          {renderInput()}
        </motion.div>
      ) : (
        <>
          {label && labelType === 'default' && (
            <Label
              className={cn(
                `
                  mb-1 text-sm font-medium
                  dark:text-gray-200
                `,
                {
                  'text-danger-600 dark:text-danger-400': !!errorMessage,
                },
                labelClassName,
              )}
              htmlFor={id}
            >
              {label}
              {isRequired && isShowRequired && (
                <span className="ml-1 text-danger-500">*</span>
              )}
            </Label>
          )}
          {renderInput()}
        </>
      )}

      <AnimatePresence mode="wait" initial={false}>
        {errorMessage && (
          <motion.div
            key="error-message"
            transition={{ duration: 0.3 }}
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-1 flex items-center gap-2 text-sm"
          >
            <motion.div
              className={`
                text-danger-600
                dark:text-danger-500
              `}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <AlertCircleIcon size={16} />
            </motion.div>

            <motion.span
              className={`
                text-danger-600
                dark:text-danger-500
              `}
              exit={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              initial={{ x: -10, opacity: 0 }}
            >
              {errorMessage}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
