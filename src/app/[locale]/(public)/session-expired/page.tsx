'use client';

import Link from 'next/link';

import { useEffect } from 'react';

import { Button } from 'components/atoms/Button';

import { signOut } from 'lib/auth';

const Page = () => {
  useEffect(() => {
    signOut();
  }, []);

  return (
    <div
      className={`flex w-full flex-1 flex-col items-center justify-center gap-7`}
    >
      <div className="text-center">
        <h2 className={`mb-3 text-2xl font-bold text-main`}>
          Sua sessão expirou
        </h2>

        <p className={`mb-7 font-medium text-subtitle`}>
          Por favor, faça login novamente para continuar usando o sistema.
        </p>

        <Link href="/">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
