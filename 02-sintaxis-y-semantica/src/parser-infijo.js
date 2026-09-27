import { num, op } from './ast.js';

// SINTAXIS CONCRETA #1 — infija:   2 + 3 * 4
// Precedencia: * y / antes que + y -
function tokenizar(s) { return s.match(/\d+(\.\d+)?|[+\-*/()]/g) ?? []; }

export function parsear(texto) {
  const t = tokenizar(texto);
  let i = 0;
  const ver = () => t[i];
  const comer = () => t[i++];

  function expresion() {                       // suma y resta
    let n = termino();
    while (ver() === '+' || ver() === '-') n = op(comer(), n, termino());
    return n;
  }
  function termino() {                          // producto y división
    let n = factor();
    while (ver() === '*' || ver() === '/') n = op(comer(), n, factor());
    return n;
  }
  function factor() {
    if (ver() === '(') { comer(); const n = expresion(); comer(); return n; }
    return num(Number(comer()));
  }
  return expresion();
}
