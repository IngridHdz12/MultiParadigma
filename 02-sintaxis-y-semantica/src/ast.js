// EL ÁRBOL. Esto es la sintaxis ABSTRACTA: la estructura del programa,
// sin comas, sin paréntesis, sin decisiones de escritura.
export const num = (v)       => ({ tipo: 'num', valor: v });
export const op  = (o, i, d) => ({ tipo: 'op', operador: o, izq: i, der: d });
