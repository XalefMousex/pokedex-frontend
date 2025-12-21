import Link from 'next/link';

import { ChevronRight } from 'lucide-react';

import { useSidebarStore } from 'stores/useSidebarStore';

import { NavBadge } from 'components/atoms/NavBadge';
import { Collapsible } from 'components/atoms/Collapsible';
import { checkIsActive } from 'components/atoms/SidebarMenuLink';
import { SidebarMenuSub } from 'components/atoms/SidebarMenuSub';
import { SidebarMenuItem } from 'components/atoms/SidebarMenuItem';
import { SidebarMenuButton } from 'components/atoms/SidebarMenuButton';
import { CollapsibleTrigger } from 'components/atoms/CollapsibleTrigger';
import { CollapsibleContent } from 'components/atoms/CollapsibleContent';
import { SidebarMenuSubItem } from 'components/atoms/SidebarMenuSubItem';
import { SidebarMenuSubButton } from 'components/atoms/SidebarMenuSubButton';

import { type SidebarMenuCollapsibleProps } from './types';

export const SidebarMenuCollapsible = ({
  item,
  href,
}: SidebarMenuCollapsibleProps) => {
  const { setIsOpenMobile } = useSidebarStore();

  return (
    <Collapsible
      className="group/collapsible"
      defaultOpen={checkIsActive(href, item, true)}
      asChild
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title}>
            {item.icon && <item.icon />}

            <span>{item.title}</span>

            {item.badge && <NavBadge>{item.badge}</NavBadge>}

            <ChevronRight
              className={`
                ms-auto transition-transform duration-200
                group-data-[state=open]/collapsible:rotate-90
              `}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenuSub>
            {item?.items?.map(subItem => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  isActive={checkIsActive(href, subItem)}
                  asChild
                >
                  <Link
                    href={subItem.url ?? ''}
                    onClick={() => setIsOpenMobile(false)}
                  >
                    {subItem.icon && <subItem.icon />}

                    <span>{subItem.title}</span>

                    {subItem.badge && <NavBadge>{subItem.badge}</NavBadge>}
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};
