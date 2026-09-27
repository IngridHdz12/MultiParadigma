import { parsear as infijo }  from './parser-infijo.js';
import { parsear as prefijo } from './parser-prefijo.js';
import { evaluar, aPrefijo, costo } from './semanticas.js';

const A = '2 + 3 * 4';
const B = '(+ 2 (* 3 4))';

const arbolA = infijo(A);
const arbolB = prefijo(B);

console.log('\nDos formas de ESCRIBIR lo mismo:\n');
console.log(`  infija    ${A}`);
console.log(`  prefija   ${B}\n`);

console.log('El árbol que produce cada una:\n');
console.log('  A:', JSON.stringify(arbolA));
console.log('  B:', JSON.stringify(arbolB));
console.log(`\n  ¿Idénticos?  ${JSON.stringify(arbolA) === JSON.stringify(arbolB)}\n`);

console.log('Un árbol, tres semánticas distintas:\n');
console.log(`  evaluar    ${evaluar(arbolA)}`);
console.log(`  aPrefijo   ${aPrefijo(arbolA)}`);
console.log(`  costo      ${costo(arbolA)} operaciones\n`);

console.log('  La sintaxis es la superficie. El paradigma vive en el árbol y en lo');
console.log('  que decides que el árbol signifique.\n');
