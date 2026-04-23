import { setupManifest } from '@start9labs/start-sdk'
import { long, short, bitcoindDescription } from './i18n'

export const manifest = setupManifest({
  id: 'next-block',
  title: 'Next Block',
  license: 'AGPL-3.0',
  packageRepo: 'https://github.com/4rkad/next-block-startos',
  upstreamRepo: 'https://github.com/Dojo-Open-Source-Project/next-block',
  marketingUrl: 'https://nextblock.st',
  donationUrl: null,
  docsUrls: [
    'https://github.com/Dojo-Open-Source-Project/next-block/blob/develop/README.md',
  ],
  description: { short, long },
  volumes: ['main'],
  images: {
    main: {
      source: { dockerBuild: { dockerfile: './Dockerfile' } },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {
    bitcoind: {
      description: bitcoindDescription,
      optional: false,
      metadata: {
        title: 'Bitcoin',
        icon: 'https://raw.githubusercontent.com/Start9Labs/bitcoin-core-startos/refs/heads/30.x/dep-icon.svg',
      },
    },
  },
})
