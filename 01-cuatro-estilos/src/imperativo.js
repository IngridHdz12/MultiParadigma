import { EMBARQUES, TARIFA_BASE, DESTINO, KG_MINIMO } from './datos.js';

// ESTILO IMPERATIVO
// El programa es una secuencia de pasos que modifican estado.
// La pregunta que responde el código es: ¿CÓMO se llega al resultado?
export function total() {
  let acumulado = 0;                                  // <- estado nombrado, mutable
  for (let i = 0; i < EMBARQUES.length; i++) {        // <- el programador controla el recorrido
    const e = EMBARQUES[i];
    if (e.destino !== DESTINO) continue;
    if (e.kg < KG_MINIMO) continue;

    let recargo;                                      // <- otra variable mutable
    switch (e.tipo) {                                 // <- condicional sobre el tipo
      case 'normal':      recargo = 0;    break;
      case 'peligrosa':   recargo = 0.15; break;
      case 'refrigerada': recargo = 0.10; break;
      default:            recargo = 0;
    }
    acumulado += e.kg * TARIFA_BASE * (1 + recargo);  // <- mutación en cada vuelta
  }
  return acumulado;
}
