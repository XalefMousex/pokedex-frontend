import { type ReactNode, type ComponentProps } from 'react';

import { type Main } from 'components/atoms/Main';

export type SettingsProps = {
  children: ReactNode;
} & ComponentProps<typeof Main>;
