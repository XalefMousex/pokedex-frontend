import { Root as Radio } from '@radix-ui/react-radio-group';

import { useLayoutStore } from 'stores/useLayoutStore';

import { SectionTitle } from 'components/atoms/SectionTitle';
import { SidebarSidebar } from 'components/atoms/SidebarSidebar';
import { SidebarInsetIcon } from 'components/atoms/SidebarInsetIcon';
import { SidebarFloatingIcon } from 'components/atoms/SidebarFloatingIcon';
import { ConfigRadioGroupItem } from 'components/atoms/ConfigRadioGroupItem';

import { cn } from 'utils/tailwind/cn';

import { type SidebarConfigProps } from './types';

export const SidebarConfig = ({ className, ...props }: SidebarConfigProps) => {
  const { variant, setVariant, defaultVariant } = useLayoutStore();

  return (
    <div className={cn('max-md:hidden', className)} {...props}>
      <SectionTitle
        title="Sidebar"
        showReset={defaultVariant !== variant}
        onReset={() => setVariant(defaultVariant)}
      />

      <Radio
        value={variant}
        onValueChange={setVariant}
        aria-label="Select sidebar style"
        aria-describedby="sidebar-description"
        className="grid w-full max-w-md grid-cols-3 gap-4"
      >
        {[
          {
            value: 'inset',
            label: 'Inset',
            icon: SidebarInsetIcon,
          },
          {
            value: 'floating',
            label: 'Floating',
            icon: SidebarFloatingIcon,
          },
          {
            value: 'sidebar',
            label: 'Sidebar',
            icon: SidebarSidebar,
          },
        ].map(item => (
          <ConfigRadioGroupItem item={item} key={item.value} />
        ))}
      </Radio>
      <div className="sr-only" id="sidebar-description">
        Choose between inset, floating, or standard sidebar layout
      </div>
    </div>
  );
};
