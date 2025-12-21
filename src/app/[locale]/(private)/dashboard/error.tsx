'use client';

import Link from 'next/link';

import { Button } from 'components/atoms/Button';

const Error = () => (
  <div
    className={`flex w-full flex-1 flex-col items-center justify-center gap-7`}
  >
    <div className="text-center">
      <h2 className={`mb-3 text-2xl font-bold text-main`}>
        Ops, algo de errado não está certo
      </h2>

      <p className={`mb-7 font-medium text-subtitle transition-all`}>
        A página que você procurava parece ter sido movida, excluída ou não
        existe.
      </p>

      <Link href="/dashboard">
        <Button>Voltar para Home</Button>
      </Link>
    </div>
  </div>
);

export default Error;
