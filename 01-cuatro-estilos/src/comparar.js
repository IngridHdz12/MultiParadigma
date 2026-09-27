import * as imperativo  from './imperativo.js';
import * as objetos     from './objetos.js';
import * as funcional   from './funcional.js';
import * as declarativo from './declarativo.js';

const estilos = [
  ['Imperativo',  imperativo],
  ['Objetos',     objetos],
  ['Funcional',   funcional],
  ['Declarativo', declarativo]
];

console.log('\nMismo problema, cuatro formas de pensarlo:\n');
const resultados = estilos.map(([nombre, m]) => {
  const r = m.total();
  console.log(`  ${nombre.padEnd(14)} $${r.toLocaleString('es-MX')}`);
  return r;
});

const iguales = resultados.every(r => r === resultados[0]);
console.log(`\n  ${iguales ? 'Los cuatro coinciden.' : 'NO coinciden.'}`);
console.log('  El resultado es el mismo. Lo que cambia es qué se vuelve fácil y qué se vuelve difícil.\n');
process.exit(iguales ? 0 : 1);
