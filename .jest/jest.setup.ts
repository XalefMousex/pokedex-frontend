import * as mockRouter from 'next-router-mock';

import '@testing-library/jest-dom';

import { TextEncoder } from 'util';
import preloadAll from 'jest-next-dynamic';
import ResizeObserver from 'resize-observer-polyfill';

const { useRouter } = mockRouter;

export const MockNextNavigation = {
  ...mockRouter,
  notFound: jest.fn(),
  usePathname: () => {
    const router = useRouter();

    return router.asPath;
  },
  redirect: jest.fn().mockImplementation((url: string) => {
    mockRouter.memoryRouter.setCurrentUrl(url);
  }),
  useSearchParams: () => {
    const router = useRouter();
    const path = router.query;

    return new URLSearchParams(path as any);
  },
};

jest.mock('next-intl', () => ({
  useLocale: () => 'en-US',
  useTranslations: () => (key: string) => key,
}));

jest.mock('next/navigation', () => MockNextNavigation);
jest.mock('i18n/navigation', () => MockNextNavigation);

global.TextEncoder = TextEncoder as any;

global.ResizeObserver = ResizeObserver;

Object.defineProperty(global.SVGElement.prototype, 'getScreenCTM', {
  writable: true,
  value: jest.fn(),
});

global.matchMedia = jest.fn(query => ({
  media: query,
  matches: false,
  onchange: null,
  addListener: jest.fn(),
  dispatchEvent: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

Object.defineProperty(global.SVGElement.prototype, 'getBBox', {
  writable: true,
  value: jest.fn().mockReturnValue({
    x: 0,
    y: 0,
  }),
});

Object.defineProperty(global.SVGElement.prototype, 'getComputedTextLength', {
  writable: true,
  value: jest.fn().mockReturnValue(0),
});

Object.defineProperty(global.SVGElement.prototype, 'createSVGMatrix', {
  writable: true,
  value: jest.fn().mockReturnValue({
    x: 10,
    y: 10,
    inverse: () => {},
    multiply: () => {},
  }),
});

beforeAll(async () => {
  await preloadAll();
  jest.useFakeTimers({ advanceTimers: true });
  jest.setSystemTime(new Date('2024-03-01'));
});
