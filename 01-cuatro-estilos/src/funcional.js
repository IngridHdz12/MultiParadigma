import { EMBARQUES, TARIFA_BASE, DESTINO, KG_MINIMO } from './datos.js';

// ESTILO FUNCIONAL
// El programa es una composición de funciones puras.
// No hay variables que cambien. Cada función se puede probar y razonar por separado.
const RECARGO = { normal: 0, peligrosa: 0.15, refrigerada: 0.10 };

const esDelDestino = (destino) => (e) => e.destino === destino;
const pesaAlMenos  = (kg)      => (e) => e.kg >= kg;
const cargoDe      = (e) => e.kg * TARIFA_BASE * (1 + (RECARGO[e.tipo] ?? 0));
const sumar        = (a, b) => a + b;

export function total() {
  return EMBARQUES
    .filter(esDelDestino(DESTINO))
    .filter(pesaAlMenos(KG_MINIMO))
    .map(cargoDe)
    .reduce(sumar, 0);                                // <- ningún estado mutable
}
