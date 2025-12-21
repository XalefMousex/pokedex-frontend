import { Suspense } from 'react';

import { Login } from 'templates/Login';

const Page = async () => (
  <Suspense>
    <Login />
  </Suspense>
);

export default Page;
