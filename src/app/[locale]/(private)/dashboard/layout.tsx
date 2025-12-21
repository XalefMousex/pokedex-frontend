import { type ReactNode } from 'react';

import { Base } from 'templates/Base';

const Layout = async ({ children }: { children: ReactNode }) => (
  <Base>{children}</Base>
);

export default Layout;
