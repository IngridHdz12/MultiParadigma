export type Embarque = {
  id: string;
  kg: number;
  destino: string;
};

// DEFECTO 1 — de TIPOS.
// El parámetro se declara string pero se usa como número.
// Lo detecta: npm run typecheck
export function pesoTotal(embarques: Embarque[], minimo: string): number {
  return embarques
    .filter((e) => e.kg >= minimo)
    .reduce((suma, e) => suma + e.kg, 0);
}

// DEFECTO 2 — de ANÁLISIS ESTÁTICO.
// Usa == en lugar de ===, y reasigna un parámetro.
// Lo detecta: npm run lint
export function normalizarDestino(destino: string): string {
  if (destino == null) return 'desconocido';
  destino = destino.trim().toLowerCase();
  return destino;
}

// DEFECTO 3 — de COMPORTAMIENTO.
// La regla dice "a partir de 3 embarques"; el código exige más de 3.
// No lo detecta ni el compilador ni el linter: solo la prueba.
export function aplicaConsolidado(cantidad: number): boolean {
  return cantidad > 3;
}
