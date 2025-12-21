import { routing } from 'i18n/routing';

export const stripLocale = (pathname: string) => {
  const localePattern = new RegExp(
    `^/(${routing.locales.join('|')})(/|$)`,
    'i',
  );

  return pathname.replace(localePattern, '/');
};
