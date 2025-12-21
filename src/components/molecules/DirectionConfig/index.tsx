import { type ComponentProps } from 'react';

import { Root as Radio } from '@radix-ui/react-radio-group';

import { useDirectionStore } from 'stores/useDirectionStore';

import { SectionTitle } from 'components/atoms/SectionTitle';
import { DirectionIcon } from 'components/atoms/DirectionIcon';
import { ConfigRadioGroupItem } from 'components/atoms/ConfigRadioGroupItem';

import { type DirectionConfigProps } from './types';

const DirectionLeft = ({
  ...props
}: Omit<ComponentProps<'svg'>, 'direction'>) => (
  <DirectionIcon direction="ltr" {...props} />
);

const DirectionRight = ({
  ...props
}: Omit<ComponentProps<'svg'>, 'direction'>) => (
  <DirectionIcon direction="rtl" {...props} />
);

export const DirectionConfig = ({ ...props }: DirectionConfigProps) => {
  const { direction, setDirection, defaultDirection } = useDirectionStore();

  return (
    <div {...props}>
      <SectionTitle
        title="Direction"
        showReset={defaultDirection !== direction}
        onReset={() => setDirection(defaultDirection)}
      />
      <Radio
        value={direction}
        onValueChange={setDirection}
        aria-label="Select site direction"
        aria-describedby="direction-description"
        className="grid w-full max-w-md grid-cols-3 gap-4"
      >
        {[
          {
            value: 'ltr',
            icon: DirectionLeft,
            label: 'Left to Right',
          },
          {
            value: 'rtl',
            icon: DirectionRight,
            label: 'Right to Left',
          },
        ].map(item => (
          <ConfigRadioGroupItem item={item} key={item.value} />
        ))}
      </Radio>

      <div className="sr-only" id="direction-description">
        Choose between left-to-right or right-to-left site direction
      </div>
    </div>
  );
};
