import { Root as Radio } from '@radix-ui/react-radio-group';

import { useSidebarStore } from 'stores/useSidebarStore';
import { useLayoutStore, type CollapsibleProps } from 'stores/useLayoutStore';

import { SectionTitle } from 'components/atoms/SectionTitle';
import { LayoutFullIcon } from 'components/atoms/LayoutFullIcon';
import { LayoutDefaultIcon } from 'components/atoms/LayoutDefaultIcon';
import { LayoutCompactIcon } from 'components/atoms/LayoutCompactIcon';
import { ConfigRadioGroupItem } from 'components/atoms/ConfigRadioGroupItem';

import { cn } from 'utils/tailwind/cn';

import { type LayoutConfigProps } from './types';

export const LayoutConfig = ({ className, ...props }: LayoutConfigProps) => {
  const { isOpen, setIsOpen } = useSidebarStore();

  const { collapsible, setCollapsible, defaultCollapsible } = useLayoutStore();

  const radioState = isOpen ? 'default' : collapsible;

  return (
    <div className={cn('max-md:hidden', className)} {...props}>
      <SectionTitle
        onReset={() => {
          setIsOpen(true);
          setCollapsible(defaultCollapsible);
        }}
        title="Layout"
        showReset={radioState !== 'default'}
      />
      <Radio
        onValueChange={value => {
          if (value === 'default') {
            setIsOpen(true);

            return;
          }

          setIsOpen(false);
          setCollapsible(value as CollapsibleProps);
        }}
        value={radioState}
        aria-label="Select layout style"
        aria-describedby="layout-description"
        className="grid w-full max-w-md grid-cols-3 gap-4"
      >
        {[
          {
            value: 'default',
            label: 'Default',
            icon: LayoutDefaultIcon,
          },
          {
            value: 'icon',
            label: 'Compact',
            icon: LayoutCompactIcon,
          },
          {
            value: 'offcanvas',
            label: 'Full layout',
            icon: LayoutFullIcon,
          },
        ].map(item => (
          <ConfigRadioGroupItem item={item} key={item.value} />
        ))}
      </Radio>

      <div className="sr-only" id="layout-description">
        Choose between default expanded, compact icon-only, or full layout mode
      </div>
    </div>
  );
};
