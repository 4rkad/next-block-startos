import { VersionInfo } from '@start9labs/start-sdk'

export const v_1_6_0_1 = VersionInfo.of({
  version: '1.6.0:1',
  releaseNotes: {
    en_US: 'Initial StartOS release of Next Block fee estimator',
    es_ES: 'Primera versión para StartOS del estimador de comisiones Next Block',
    de_DE: 'Erste StartOS-Version des Next-Block-Gebührenschätzers',
    pl_PL: 'Pierwsze wydanie estymatora opłat Next Block dla StartOS',
    fr_FR: 'Première version StartOS de l’estimateur de frais Next Block',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: async ({ effects }) => {},
  },
})
