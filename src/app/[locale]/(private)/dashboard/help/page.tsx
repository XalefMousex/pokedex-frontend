import { Telescope } from 'lucide-react';

const Page = async () => (
  <div className="h-svh">
    <div
      className={`
        m-auto flex size-full flex-col items-center justify-center gap-2
      `}
    >
      <Telescope size={72} />

      <h1 className="text-4xl leading-tight font-bold text-main">
        Coming Soon!
      </h1>

      <p className="text-center text-subtitle">
        This page has not been created yet. <br />
        Stay tuned though!
      </p>
    </div>
  </div>
);

export default Page;
