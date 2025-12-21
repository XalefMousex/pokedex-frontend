import { type MetadataRoute } from 'next';

const manifest = (): MetadataRoute.Manifest => ({
  start_url: '/',
  name: 'Pokedex',
  short_name: 'Pokedex',
  display: 'standalone',
  theme_color: '#FFFFFF',
  orientation: 'portrait',
  background_color: '#FFFFFF',
  description:
    'Uma Pokedex moderna com TypeScript, React, Next.js e Tailwind CSS',
  icons: [
    {
      sizes: '192x192',
      type: 'image/png',
      purpose: 'maskable',
      src: 'images/icon-192.png',
    },
    {
      sizes: '512x512',
      type: 'image/png',
      src: 'images/icon-512.png',
    },
  ],
});

export default manifest;
