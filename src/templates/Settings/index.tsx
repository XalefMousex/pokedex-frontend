import { Main } from 'components/atoms/Main';
import { Header } from 'components/organisms/Header';
import { Search } from 'components/molecules/Search';
import { Separator } from 'components/atoms/Separator';
import { SidebarNav } from 'components/molecules/SidebarNav';
import { ConfigDrawer } from 'components/organisms/ConfigDrawer';
import { ModeSwitcher } from 'components/molecules/ModeSwitcher';
import { Notifications } from 'components/molecules/Notifications';
import { ProfileDropdown } from 'components/molecules/ProfileDropdown';
import { LanguageSelector } from 'components/molecules/LanguageSelector';

import { type SettingsProps } from './types';

export const Settings = async ({ children, ...props }: SettingsProps) => (
  <>
    <Header>
      <Search />

      <div className="ms-auto flex items-center gap-2">
        <LanguageSelector
          className={`
            hidden
            lg:flex
          `}
        />

        <ModeSwitcher
          className={`
            hidden
            lg:flex
          `}
          start="top-right"
        />

        <Notifications />

        <ConfigDrawer />

        <ProfileDropdown />
      </div>
    </Header>

    <Main {...props}>
      <div className="space-y-0.5">
        <h1
          className={`
            text-2xl font-bold tracking-tight
            md:text-3xl
          `}
        >
          Settings
        </h1>

        <p className="text-subtitle">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      <Separator
        className={`
          my-4
          lg:my-6
        `}
      />

      <div
        className={`
          flex flex-1 flex-col space-y-2 overflow-hidden
          md:space-y-2
          lg:flex-row lg:space-y-0 lg:space-x-12
        `}
      >
        <aside
          className={`
            top-0
            lg:sticky lg:w-1/5
          `}
        >
          <SidebarNav />
        </aside>

        <div className="flex w-full overflow-y-hidden p-1">{children}</div>
      </div>
    </Main>
  </>
);
