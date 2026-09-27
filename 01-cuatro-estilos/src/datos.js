// Lote de embarques de cruce fronterizo. Los cuatro estilos usan EXACTAMENTE estos datos.
export const EMBARQUES = [
  { id: 'E1', destino: 'laredo',   kg: 1200, tipo: 'normal' },
  { id: 'E2', destino: 'laredo',   kg:  800, tipo: 'peligrosa' },
  { id: 'E3', destino: 'colombia', kg: 1500, tipo: 'normal' },
  { id: 'E4', destino: 'laredo',   kg: 2000, tipo: 'refrigerada' },
  { id: 'E5', destino: 'laredo',   kg:  500, tipo: 'normal' }
];

export const TARIFA_BASE = 12.5;   // MXN por kilogramo
export const DESTINO = 'laredo';
export const KG_MINIMO = 1000;
