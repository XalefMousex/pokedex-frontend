import { Main } from 'components/atoms/Main';
import { Header } from 'components/organisms/Header';
import { Search } from 'components/molecules/Search';
import { MyTeams } from 'components/organisms/MyTeams';
import { ModeSwitcher } from 'components/molecules/ModeSwitcher';
import { ConfigDrawer } from 'components/organisms/ConfigDrawer';
import { ProfileDropdown } from 'components/molecules/ProfileDropdown';
import { LanguageSelector } from 'components/molecules/LanguageSelector';

import { type TeamsProps } from './types';

export const Teams = async ({ ...props }: TeamsProps) => (
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

        <ConfigDrawer />
        <ProfileDropdown />
      </div>
    </Header>

    <Main {...props} isFluid>
      <MyTeams />
    </Main>
  </>
);
