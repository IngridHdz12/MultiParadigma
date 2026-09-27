import { EMBARQUES, TARIFA_BASE, DESTINO, KG_MINIMO } from './datos.js';

// ESTILO ORIENTADO A OBJETOS
// El programa es un conjunto de objetos que saben responder por sí mismos.
// Para agregar un tipo de carga NO se toca ninguna función existente: se agrega una clase.
class Embarque {
  constructor(id, destino, kg) {
    this.id = id; this.destino = destino; this.kg = kg;
  }
  recargo() { return 0; }                             // <- comportamiento por omisión
  cargo()   { return this.kg * TARIFA_BASE * (1 + this.recargo()); }
  aplica()  { return this.destino === DESTINO && this.kg >= KG_MINIMO; }
}

class Peligrosa   extends Embarque { recargo() { return 0.15; } }  // <- despacho polimórfico
class Refrigerada extends Embarque { recargo() { return 0.10; } }

const CLASES = { normal: Embarque, peligrosa: Peligrosa, refrigerada: Refrigerada };

export function total() {
  return EMBARQUES
    .map(e => new CLASES[e.tipo](e.id, e.destino, e.kg))
    .filter(e => e.aplica())
    .reduce((suma, e) => suma + e.cargo(), 0);
}
