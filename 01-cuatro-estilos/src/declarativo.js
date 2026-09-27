import { EMBARQUES, TARIFA_BASE } from './datos.js';

// ESTILO DECLARATIVO
// El programa describe QUÉ se quiere. Las reglas son DATOS, no código.
// Cambiar una regla no requiere tocar ni una línea del motor.
const CONSULTA = {
  donde:    [ { campo: 'destino', op: '=',  valor: 'laredo' },
              { campo: 'kg',      op: '>=', valor: 1000 } ],
  recargos: { normal: 0, peligrosa: 0.15, refrigerada: 0.10 },
  calcular: 'kg * tarifaBase * (1 + recargo)'
};

const OPS = { '=': (a, b) => a === b, '>=': (a, b) => a >= b, '<': (a, b) => a < b };

// Motor genérico: no sabe nada de embarques, destinos ni recargos.
function evaluar(filas, consulta) {
  return filas
    .filter(f => consulta.donde.every(c => OPS[c.op](f[c.campo], c.valor)))
    .reduce((suma, f) =>
      suma + f.kg * TARIFA_BASE * (1 + (consulta.recargos[f.tipo] ?? 0)), 0);
}

export function total() { return evaluar(EMBARQUES, CONSULTA); }
