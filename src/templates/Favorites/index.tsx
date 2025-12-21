import { Main } from 'components/atoms/Main';
import { Header } from 'components/organisms/Header';
import { Search } from 'components/molecules/Search';
import { MyFavorites } from 'components/organisms/MyFavorites';
import { ModeSwitcher } from 'components/molecules/ModeSwitcher';
import { ConfigDrawer } from 'components/organisms/ConfigDrawer';
import { ProfileDropdown } from 'components/molecules/ProfileDropdown';
import { LanguageSelector } from 'components/molecules/LanguageSelector';

import { type FavoritesProps } from './types';

export const Favorites = async ({ ...props }: FavoritesProps) => (
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
      <MyFavorites />
    </Main>
  </>
);
