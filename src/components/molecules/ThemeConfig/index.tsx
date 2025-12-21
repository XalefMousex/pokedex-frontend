import { useTheme } from 'next-themes';

import { Root as Radio } from '@radix-ui/react-radio-group';

import { SectionTitle } from 'components/atoms/SectionTitle';
import { ThemeDarkIcon } from 'components/atoms/ThemeDarkIcon';
import { ThemeLightIcon } from 'components/atoms/ThemeLightIcon';
import { ThemeSystemIcon } from 'components/atoms/ThemeSystemIcon';
import { ConfigRadioGroupItem } from 'components/atoms/ConfigRadioGroupItem';

import { type ThemeConfigProps } from './types';

export const ThemeConfig = ({ ...props }: ThemeConfigProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div {...props}>
      <SectionTitle
        title="Theme"
        showReset={theme !== 'system'}
        onReset={() => setTheme('system')}
      />

      <Radio
        value={theme}
        onValueChange={setTheme}
        aria-label="Select theme preference"
        aria-describedby="theme-description"
        className="grid w-full max-w-md grid-cols-3 gap-4"
      >
        {[
          {
            value: 'system',
            label: 'System',
            icon: ThemeSystemIcon,
          },
          {
            value: 'light',
            label: 'Light',
            icon: ThemeLightIcon,
          },
          {
            value: 'dark',
            label: 'Dark',
            icon: ThemeDarkIcon,
          },
        ].map(item => (
          <ConfigRadioGroupItem item={item} key={item.value} isTheme />
        ))}
      </Radio>

      <div className="sr-only" id="theme-description">
        Choose between system preference, light mode, or dark mode
      </div>
    </div>
  );
};
