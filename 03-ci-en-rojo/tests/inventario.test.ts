import { describe, it, expect } from 'vitest';
import { pesoTotal, normalizarDestino, aplicaConsolidado } from '../src/inventario.js';

const LOTE = [
  { id: 'E1', kg: 1200, destino: ' Laredo ' },
  { id: 'E2', kg: 800, destino: 'COLOMBIA' },
  { id: 'E3', kg: 2000, destino: 'laredo' }
];

describe('pesoTotal', () => {
  it('suma solo los embarques que alcanzan el mínimo', () => {
    expect(pesoTotal(LOTE, 1000)).toBe(3200);
  });
});

describe('normalizarDestino', () => {
  it('recorta y pasa a minúsculas', () => {
    expect(normalizarDestino(' Laredo ')).toBe('laredo');
  });
});

describe('aplicaConsolidado', () => {
  it('no aplica con 2 embarques', () => {
    expect(aplicaConsolidado(2)).toBe(false);
  });
  // Regla de negocio: el consolidado aplica A PARTIR DE 3 embarques.
  it('aplica EXACTAMENTE con 3 embarques', () => {
    expect(aplicaConsolidado(3)).toBe(true);
  });
});
