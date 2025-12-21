'use client';

import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';

import { useTransition } from 'react';
import { useForm, useWatch } from 'react-hook-form';

import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';

import { Card } from 'components/atoms/Card';
import { Input } from 'components/molecules/Input';
import { SimpleButton } from 'components/atoms/SimpleButton';
import { ModeSwitcher } from 'components/molecules/ModeSwitcher';
import { LanguageSelector } from 'components/molecules/LanguageSelector';

import { signIn, signUp } from 'lib/auth';

import { cn } from 'utils/tailwind/cn';

import { loginSchema } from './schema';
import { type LoginProps, type LoginSchemaProps } from './types';

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

export const Login = ({ ...props }: LoginProps) => {
  const router = useRouter();
  const searchParameters = useSearchParams();

  const [isLoading, startLoadTransition] = useTransition();

  const t = useTranslations('login');

  const {
    control,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaProps>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      type: 'signIn',
    },
  });

  const type = useWatch({
    control,
    name: 'type',
  });

  const handleSignIn = async (data: LoginSchemaProps) => {
    const result = await signIn.email({
      email: data.email!,
      password: data.password!,
      callbackURL: `${searchParameters.get('callbackUrl') || '/dashboard'}`,
    });

    if (result?.error) {
      toast.error(result.error.message || 'Error during sign in');

      return;
    }

    if (result?.data && result?.data?.url) {
      router.replace(result?.data?.url || '/dashboard');

      return;
    }

    router.push('/dashboard');
  };

  const handleSignUp = async (data: LoginSchemaProps) => {
    const result = await signUp.email({
      name: data.name!,
      email: data.email!,
      password: data.password!,
      callbackURL: `${searchParameters.get('callbackUrl') || '/dashboard'}`,
    });

    if (result?.error) {
      toast.error(result.error.message || 'Error during sign in');

      return;
    }

    if (result?.data && result?.data?.token) {
      router.replace(
        `${window.location.origin}${searchParameters.get('callbackUrl') || '/dashboard'}`,
      );

      return;
    }

    router.push('/dashboard');
  };

  const onSubmit = async (data: LoginSchemaProps) => {
    startLoadTransition(async () => {
      if (data.type === 'signIn') {
        await handleSignIn(data);
      }

      if (data.type === 'signUp') {
        await handleSignUp(data);
      }
    });
  };

  return (
    <div
      className={`
        flex min-h-screen items-center justify-center bg-white p-4
        transition-colors
        dark:bg-background-950
      `}
      {...props}
    >
      <div className="absolute top-4 left-4">
        <LanguageSelector />
      </div>

      <div className="absolute top-4 right-4">
        <ModeSwitcher start="top-right" />
      </div>

      <motion.div
        className="w-full max-w-md"
        transition={{ duration: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
      >
        <div className="mb-8 text-center">
          <motion.div
            transition={{
              duration: 2,
              repeatDelay: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
            animate={{ rotate: [0, 10, -10, 0] }}
            className="mb-4 inline-block text-6xl"
          >
            <svg
              xmlSpace="preserve"
              className={`size-20`}
              viewBox="0 0 511.985 511.985"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ed5564"
                d="M491.859 156.348c-12.891-30.483-31.342-57.865-54.842-81.372-23.516-23.5-50.904-41.96-81.373-54.85C324.084 6.775 290.553.001 255.992.001c-34.554 0-68.083 6.773-99.645 20.125-30.483 12.89-57.865 31.351-81.373 54.85-23.499 23.507-41.959 50.889-54.85 81.372C6.774 187.91 0 221.44 0 255.993c0 34.56 6.773 68.091 20.125 99.652 12.89 30.469 31.351 57.857 54.85 81.357 23.507 23.516 50.889 41.967 81.373 54.857 31.562 13.344 65.091 20.125 99.645 20.125 34.561 0 68.092-6.781 99.652-20.125 30.469-12.891 57.857-31.342 81.373-54.857 23.5-23.5 41.951-50.889 54.842-81.357 13.344-31.561 20.125-65.092 20.125-99.652-.001-34.553-6.782-68.083-20.126-99.645z"
              />
              <path
                fill="#e6e9ed"
                d="M.102 263.18c.875 32.014 7.593 63.092 20.023 92.465 12.89 30.469 31.351 57.857 54.85 81.357 23.507 23.516 50.889 41.967 81.373 54.857 31.562 13.344 65.091 20.125 99.645 20.125 34.561 0 68.092-6.781 99.652-20.125 30.469-12.891 57.857-31.342 81.373-54.857 23.5-23.5 41.951-50.889 54.842-81.357 12.438-29.373 19.156-60.451 20.031-92.465H.102z"
              />
              <path
                fill="#434a54"
                d="M510.765 281.211a260.21 260.21 0 001.219-25.218c0-9.516-.516-18.953-1.531-28.289-12.719 1.961-30.984 4.516-53.998 7.054-43.688 4.82-113.904 10.57-200.463 10.57-86.552 0-156.776-5.75-200.455-10.57-23.022-2.539-41.28-5.093-53.998-7.054A259.638 259.638 0 000 255.993c0 8.468.406 16.875 1.219 25.218 41.53 6.25 133.027 17.436 254.773 17.436s213.242-11.186 254.773-17.436z"
              />
              <path
                fill="#e6e9ed"
                d="M309.334 266.656c0 29.459-23.891 53.334-53.342 53.334-29.452 0-53.334-23.875-53.334-53.334 0-29.453 23.882-53.327 53.334-53.327 29.451.001 53.342 23.875 53.342 53.327z"
              />
              <path
                fill="#434a54"
                d="M255.992 170.66c-52.936 0-95.997 43.069-95.997 95.997s43.062 95.988 95.997 95.988 95.996-43.061 95.996-95.988c0-52.928-43.06-95.997-95.996-95.997zm0 138.675c-23.522 0-42.663-19.156-42.663-42.678 0-23.523 19.14-42.663 42.663-42.663 23.531 0 42.654 19.14 42.654 42.663 0 23.521-19.123 42.678-42.654 42.678z"
              />
              <path
                fill="#fff"
                opacity={0.2}
                d="M491.859 156.348c-12.891-30.483-31.342-57.865-54.842-81.372-23.516-23.5-50.904-41.96-81.373-54.85C324.084 6.775 290.553.001 255.992.001c-3.57 0-7.125.078-10.664.219 30.789 1.25 60.662 7.93 88.974 19.906 30.498 12.89 57.873 31.351 81.371 54.85 23.5 23.507 41.969 50.889 54.857 81.372 13.359 31.562 20.109 65.092 20.109 99.646 0 34.56-6.75 68.091-20.109 99.652-12.889 30.469-31.357 57.857-54.857 81.357-23.498 23.516-50.873 41.967-81.371 54.857-28.312 11.969-58.186 18.656-88.974 19.906 3.539.141 7.093.219 10.664.219 34.561 0 68.092-6.781 99.652-20.125 30.469-12.891 57.857-31.342 81.373-54.857 23.5-23.5 41.951-50.889 54.842-81.357 13.344-31.561 20.125-65.092 20.125-99.652 0-34.554-6.781-68.084-20.125-99.646z"
              />
              <path
                opacity={0.1}
                d="M20.125 355.645c12.89 30.469 31.351 57.857 54.85 81.357 23.507 23.516 50.889 41.967 81.373 54.857 31.562 13.344 65.091 20.125 99.645 20.125 3.57 0 7.125-.078 10.664-.219-30.789-1.25-60.67-7.938-88.982-19.906-30.483-12.891-57.857-31.342-81.364-54.857-23.507-23.5-41.96-50.889-54.858-81.357-13.352-31.56-20.117-65.091-20.117-99.652 0-34.554 6.765-68.084 20.116-99.646C54.35 125.864 72.803 98.481 96.31 74.983c23.507-23.507 50.881-41.968 81.364-54.858C205.986 8.149 235.867 1.469 266.656.219c-3.539-.14-7.094-.218-10.664-.218-34.554 0-68.083 6.773-99.645 20.125-30.483 12.89-57.865 31.351-81.373 54.858-23.499 23.499-41.959 50.881-54.85 81.364C6.774 187.91 0 221.44 0 255.993c0 34.56 6.774 68.092 20.125 99.652z"
              />
            </svg>
          </motion.div>

          <h1 className={`mb-2 text-4xl font-bold text-main`}>{t('title')}</h1>
          <p className="text-subtitle">{t('description')}</p>
        </div>

        <Card className="p-6 shadow-2xl">
          <div className="mb-6 flex gap-2">
            <SimpleButton
              className={cn('flex-1', {
                'text-white': type === 'signIn',
                'text-shark-950': type !== 'signIn',
              })}
              onClick={() => setValue('type', 'signIn')}
              variant={type === 'signIn' ? 'default' : 'outline'}
            >
              {t('card.buttons.sign-in')}
            </SimpleButton>

            <SimpleButton
              className={cn('flex-1', {
                'text-white': type !== 'signIn',
                'text-shark-950': type === 'signIn',
              })}
              onClick={() => setValue('type', 'signUp')}
              variant={type === 'signUp' ? 'default' : 'outline'}
            >
              {t('card.buttons.sign-up')}
            </SimpleButton>
          </div>

          <form className="space-y-4">
            <AnimatePresence mode="wait">
              {type === 'signUp' && (
                <motion.div
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                >
                  <Input
                    {...register('name')}
                    animate={false}
                    labelType="default"
                    label={t('card.inputs.name')}
                    placeholder={t('card.inputs.name')}
                    errorMessage={errors.name?.message}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Input
              {...register('email')}
              type="email"
              animate={false}
              labelType="default"
              placeholder="joe@email.com"
              label={t('card.inputs.email')}
              errorMessage={errors.email?.message}
              required
            />

            <Input
              {...register('password')}
              type="password"
              labelType="default"
              placeholder="••••••••"
              label={t('card.inputs.password')}
              errorMessage={errors.password?.message}
              required
            />

            <SimpleButton
              size="lg"
              type="submit"
              className="w-full text-white"
              onClick={handleSubmit(onSubmit)}
            >
              {type === 'signIn' &&
                !isLoading &&
                t('card.buttons-submit.sign-in')}

              {type === 'signUp' &&
                !isLoading &&
                t('card.buttons-submit.sign-up')}

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
            </SimpleButton>
          </form>
        </Card>
      </motion.div>
    </div>
  );
};
