import { type ReactNode } from 'react';

import { Settings } from 'templates/Settings';

const Layout = async ({ children }: { children: ReactNode }) => (
  <Settings>{children}</Settings>
);

export default Layout;
