// El problema
// De un lote de embarques, obtén el total de cargos de los que van a Laredo y pesan 1000 kg o más.
export const EMBARQUES = [ 
    { id: 'E1', destino: 'laredo',   kg: 1200, tipo: 'normal'      },
    { id: 'E2', destino: 'laredo',   kg:  800, tipo: 'peligrosa'   },
    { id: 'E3', destino: 'colombia', kg: 1500, tipo: 'normal'      },
    { id: 'E4', destino: 'laredo',   kg: 2000, tipo: 'refrigerada' },
    { id: 'E5', destino: 'laredo',   kg:  500, tipo: 'normal'      },
];

// Tarifa base $12.50/kg · Recargo: normal 0 %, peligrosa 15 %, refrigerada 10 %, sobredimensionada 22%
const TARIFA_BASE = 12.5;
const DESTINO = 'laredo';
const KG_MINIMO = 1000;
const RECARGO = {
  normal: 0,
  peligrosa: 0.15,
  refrigerada: 0.10,
  sobredimensionada: 0.22
};
const sumar = (a, b) => a + b;

// Imperativo
let acumulado = 0;
for (let i = 0; i < EMBARQUES.length; i++) {
  const e = EMBARQUES[i];
  if (e.destino !== DESTINO) continue;
  if (e.kg < KG_MINIMO) continue;

  let recargo = 0;
  switch (e.tipo) {
    case 'peligrosa':   recargo = 0.15; break;
    case 'refrigerada': recargo = 0.10; break;
    case 'sobredimensionada': recargo = 0.22; break;
    default:            recargo = 0;
  }

  acumulado += e.kg * TARIFA_BASE * (1 + recargo);
}

console.log('1. Imperativo:', acumulado);


// 2. OBJETOS
class Embarque {
  constructor(kg, destino) { this.kg = kg; this.destino = destino; }
  recargo() { return 0; }
  cargo() { 
    if (this.destino !== DESTINO || this.kg < KG_MINIMO) return 0;
    return this.kg * TARIFA_BASE * (1 + this.recargo()); 
  }
}
class Peligrosa   extends Embarque { recargo() { return 0.15; } }
class Refrigerada extends Embarque { recargo() { return 0.10; } }
class sobredimensionada extends Embarque { recargo() { return 0.22; } }

const objetosEmbarques = EMBARQUES.map(e => {
  if (e.tipo === 'peligrosa') return new Peligrosa(e.kg, e.destino);
  if (e.tipo === 'refrigerada') return new Refrigerada(e.kg, e.destino);
  if (e.tipo === 'sobredimensionada') return new sobredimensionada(e.kg, e.destino);
  return new Embarque(e.kg, e.destino);
});

const totalObjetos = objetosEmbarques.reduce((acc, obj) => acc + obj.cargo(), 0);
console.log('2. Objetos:', totalObjetos); 


// 3. FUNCIONAL
const esDelDestino = (d) => (e) => e.destino === d;
const pesaAlMenos  = (k) => (e) => e.kg >= k;
const cargoDe      = (e) => e.kg * TARIFA_BASE * (1 + RECARGO[e.tipo]);

const totalFuncional = EMBARQUES
  .filter(esDelDestino(DESTINO))
  .filter(pesaAlMenos(KG_MINIMO))
  .map(cargoDe)
  .reduce(sumar, 0);

console.log('3. Funcional:', totalFuncional); 


// 4. DECLARATIVO
const CONSULTA = {
  donde: [ 
    { campo: 'destino', op: '=', valor: 'laredo' },
    { campo: 'kg',      op: '>=', valor: 1000 } 
  ],
  recargos: { normal: 0, peligrosa: 0.15, refrigerada: 0.10, sobredimensionada: 0.22}
};

const ejecutarConsulta = (datos, config) => {
  return datos
    .filter(e => e.destino === config.donde[0].valor && e.kg >= config.donde[1].valor)
    .reduce((acc, e) => acc + (e.kg * TARIFA_BASE * (1 + config.recargos[e.tipo])), 0);
};

console.log('4. Declarativo:', ejecutarConsulta(EMBARQUES, CONSULTA));