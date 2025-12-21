import { getTranslations } from 'next-intl/server';

import { Telescope } from 'lucide-react';

const Page = async () => {
  const t = await getTranslations('help');

  return (
    <div className="h-svh">
      <div
        className={`
          m-auto flex size-full flex-col items-center justify-center gap-2
        `}
      >
        <Telescope size={72} />

        <h1 className="text-4xl leading-tight font-bold text-main">
          {t('title')}
        </h1>

        <p className="text-center text-subtitle">
          {t('description')} <br />
          {t('subtitle')}
        </p>
      </div>
    </div>
  );
};

export default Page;
