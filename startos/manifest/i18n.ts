export const short = {
  en_US: 'Bitcoin next-block fee estimator',
  es_ES: 'Estimador de comisiones del próximo bloque de Bitcoin',
  de_DE: 'Bitcoin Gebührenschätzer für den nächsten Block',
  pl_PL: 'Estymator opłat Bitcoin dla następnego bloku',
  fr_FR: 'Estimateur de frais Bitcoin pour le prochain bloc',
}

export const long = {
  en_US:
    'Next Block estimates the fee rate likely to get your Bitcoin transaction confirmed in the next block. It ingests mempool data via your own Bitcoin Core node and updates the UI live using Server-Sent Events.',
  es_ES:
    'Next Block estima la comisión necesaria para que tu transacción de Bitcoin se confirme en el próximo bloque. Lee los datos del mempool desde tu propio nodo Bitcoin Core y actualiza la interfaz en tiempo real mediante Server-Sent Events.',
  de_DE:
    'Next Block schätzt die Gebührenrate, die wahrscheinlich erforderlich ist, damit Ihre Bitcoin-Transaktion im nächsten Block bestätigt wird. Es liest Mempool-Daten über Ihren eigenen Bitcoin-Core-Knoten und aktualisiert die Benutzeroberfläche live über Server-Sent Events.',
  pl_PL:
    'Next Block szacuje stawkę opłaty potrzebną, aby Twoja transakcja Bitcoin została potwierdzona w następnym bloku. Pobiera dane mempool z Twojego własnego węzła Bitcoin Core i aktualizuje interfejs na żywo za pomocą Server-Sent Events.',
  fr_FR:
    "Next Block estime le taux de frais nécessaire pour que votre transaction Bitcoin soit confirmée dans le prochain bloc. Il lit les données du mempool depuis votre propre nœud Bitcoin Core et met à jour l'interface en direct via Server-Sent Events.",
}

export const bitcoindDescription = {
  en_US: 'Next Block reads mempool data from your Bitcoin Core node via RPC.',
  es_ES:
    'Next Block lee los datos del mempool desde tu nodo Bitcoin Core mediante RPC.',
  de_DE:
    'Next Block liest Mempool-Daten von Ihrem Bitcoin-Core-Knoten über RPC.',
  pl_PL:
    'Next Block odczytuje dane mempool z węzła Bitcoin Core za pomocą RPC.',
  fr_FR:
    'Next Block lit les données du mempool depuis votre nœud Bitcoin Core via RPC.',
}
