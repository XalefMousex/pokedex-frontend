import { Main } from 'components/atoms/Main';
import { Header } from 'components/organisms/Header';
import { Search } from 'components/molecules/Search';
import { ModeSwitcher } from 'components/molecules/ModeSwitcher';
import { ConfigDrawer } from 'components/organisms/ConfigDrawer';
import { GridPokemons } from 'components/organisms/GridPokemons';
import { ProfileDropdown } from 'components/molecules/ProfileDropdown';
import { LanguageSelector } from 'components/molecules/LanguageSelector';

import { type DashboardProps } from './types';

export const Dashboard = async ({ ...props }: DashboardProps) => (
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
      <GridPokemons />
    </Main>
  </>
);
