import { num, op } from './ast.js';

// SINTAXIS CONCRETA #2 — prefija:   (+ 2 (* 3 4))
// No hay precedencia: los paréntesis ya dicen todo. Es la sintaxis de Lisp.
function tokenizar(s) { return s.replace(/[()]/g, ' $& ').trim().split(/\s+/); }

export function parsear(texto) {
  const t = tokenizar(texto);
  let i = 0;
  function expresion() {
    const tk = t[i++];
    if (tk === '(') {
      const operador = t[i++];
      const izq = expresion();
      const der = expresion();
      i++;                                      // se come el ')'
      return op(operador, izq, der);
    }
    return num(Number(tk));
  }
  return expresion();
}
