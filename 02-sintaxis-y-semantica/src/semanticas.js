// UN MISMO ÁRBOL, TRES SEMÁNTICAS.
// La semántica es lo que el árbol SIGNIFICA. No está en la sintaxis.

const APLICAR = { '+': (a, b) => a + b, '-': (a, b) => a - b,
                  '*': (a, b) => a * b, '/': (a, b) => a / b };

// 1. Calcular
export function evaluar(n) {
  if (n.tipo === 'num') return n.valor;
  return APLICAR[n.operador](evaluar(n.izq), evaluar(n.der));
}

// 2. Reescribir en la OTRA sintaxis
export function aPrefijo(n) {
  if (n.tipo === 'num') return String(n.valor);
  return `(${n.operador} ${aPrefijo(n.izq)} ${aPrefijo(n.der)})`;
}

// 3. Contar operaciones sin ejecutarlas: análisis estático en miniatura
export function costo(n) {
  if (n.tipo === 'num') return 0;
  return 1 + costo(n.izq) + costo(n.der);
}
