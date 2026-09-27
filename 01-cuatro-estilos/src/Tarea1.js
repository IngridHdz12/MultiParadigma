
export const EMBARQUES = [ 
    { id: 'E1', destino: 'laredo',   kg: 1200, tipo: 'normal'      },
    { id: 'E2', destino: 'laredo',   kg:  800, tipo: 'peligrosa'   },
    { id: 'E3', destino: 'colombia', kg: 1500, tipo: 'normal'      }, 
    { id: 'E4', destino: 'laredo',   kg: 2000, tipo: 'refrigerada' },
    { id: 'E5', destino: 'laredo',   kg:  500, tipo: 'normal'      },
];

const TARIFA_BASE = 12.5;
const KG_MINIMO = 1000;
const RECARGO_TIPO = { 
  normal: 0, 
  peligrosa: 0.15, 
  refrigerada: 0.10, 
};
const RECARGO_DESTINO = { 
  colombia: 0.08 
}; 

const sumar = (a, b) => a + b;


// 1. IMPERATIVO
let acumulado = 0;
for (let i = 0; i < EMBARQUES.length; i++) {
  const e = EMBARQUES[i];
  if (e.kg < KG_MINIMO) continue; 

  let recargoTipo = 0;
  switch (e.tipo) {
    case 'peligrosa':         recargoTipo = 0.15; break;
    case 'refrigerada':       recargoTipo = 0.10; break;
    default:                  recargoTipo = 0;
  }

  let recargoDestino = (e.destino === 'colombia') ? 0.08 : 0; 

  acumulado += e.kg * TARIFA_BASE * (1 + recargoTipo + recargoDestino);
}
console.log('1. Imperativo:', acumulado);


// 2. OBJETOS
class Embarque {
  constructor(kg, destino) { this.kg = kg; this.destino = destino; }
  recargoTipo() { return 0; }
  recargoDestino() { return this.destino === 'colombia' ? 0.08 : 0; }
  cargo() { 
    if (this.kg < KG_MINIMO) return 0;
    return this.kg * TARIFA_BASE * (1 + this.recargoTipo() + this.recargoDestino()); 
  }
}
class Peligrosa extends Embarque { recargoTipo() { return 0.15; } }
class Refrigerada extends Embarque { recargoTipo() { return 0.10; } }

const objetosEmbarques = EMBARQUES.map(e => {
  if (e.tipo === 'peligrosa') return new Peligrosa(e.kg, e.destino);
  if (e.tipo === 'refrigerada') return new Refrigerada(e.kg, e.destino);
  return new Embarque(e.kg, e.destino);
});
console.log('2. Objetos:', objetosEmbarques.reduce((acc, obj) => acc + obj.cargo(), 0));



// 3. FUNCIONAL
const pesaAlMenos = (k) => (e) => e.kg >= k;
const getRecargoTipo = (e) => RECARGO_TIPO[e.tipo] || 0;
const getRecargoDestino = (e) => RECARGO_DESTINO[e.destino] || 0;
const cargoDe = (e) => e.kg * TARIFA_BASE * (1 + getRecargoTipo(e) + getRecargoDestino(e));

console.log('3. Funcional:', 
  EMBARQUES
    .filter(pesaAlMenos(KG_MINIMO)) 
    .map(cargoDe)
    .reduce(sumar, 0)
);


// 4. DECLARATIVO
const CONSULTA = {
  donde: [ { campo: 'kg', op: '>=', valor: 1000 } ], 
  recargosPorTipo: { normal: 0, peligrosa: 0.15, refrigerada: 0.10 },
  recargosPorDestino: { colombia: 0.08 } 
};

const ejecutarConsulta = (datos, config) => {
  return datos
    .filter(e => e.kg >= config.donde[0].valor)
    .reduce((acc, e) => {
      let extraTipo = config.recargosPorTipo[e.tipo] || 0;
      let extraDestino = config.recargosPorDestino[e.destino] || 0;
      return acc + (e.kg * TARIFA_BASE * (1 + extraTipo + extraDestino));
    }, 0);
};

console.log('4. Declarativo:', ejecutarConsulta(EMBARQUES, CONSULTA));