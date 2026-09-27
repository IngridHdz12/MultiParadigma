//El problema

//De un lote de embarques, obtén el total de cargos de los que van a Laredo y pesan 1000 kg o más.
export const EMBARQUES = [ 
    { id: 'E1', destino: 'laredo',   kg: 1200, tipo: 'normal'      },
    { id: 'E2', destino: 'laredo',   kg:  800, tipo: 'peligrosa'   },
    { id: 'E3', destino: 'colombia', kg: 1500, tipo: 'normal'      },
    { id: 'E4', destino: 'laredo',   kg: 2000, tipo: 'refrigerada' },
    { id: 'E5', destino: 'laredo',   kg:  500, tipo: 'normal'      },
];

//Tarifa base $12.50/kg · Recargo: normal 0 %, peligrosa 15 %, refrigerada 10 %


//Imperativo
//Una secuencia de pasos que modifican estado. El código responde: ¿CÓMO se llega al resultado?
let acumulado = 0;
for (let i = 0; i < EMBARQUES.length; i++) {
  const e = EMBARQUES[i];
  if (e.destino !== DESTINO) continue;
  if (e.kg < KG_MINIMO) continue;
  switch (e.tipo) { /* ... */ }
  acumulado += e.kg * TARIFA_BASE * (1 + recargo);
}

//Objetos
//Entidades que saben responder por sí mismas. Para agregar un tipo NO se toca ninguna función existente.
class Embarque {
  recargo() { return 0; }
  cargo()   { return this.kg * TARIFA_BASE * (1 + this.recargo()); }
}
class Peligrosa   extends Embarque { recargo() { return 0.15; } }
class Refrigerada extends Embarque { recargo() { return 0.10; } }


//Funcional
//Composición de funciones puras. Ninguna variable cambia; cada pieza se razona por separado.
const esDelDestino = (d) => (e) => e.destino === d;
const pesaAlMenos  = (k) => (e) => e.kg >= k;
const cargoDe      = (e) => e.kg * TARIFA_BASE * (1 + RECARGO[e.tipo]);
EMBARQUES.filter(esDelDestino(DESTINO))
         .filter(pesaAlMenos(KG_MINIMO))
         .map(cargoDe)
         .reduce(sumar, 0);


//Declarativo
//Se describe QUÉ se quiere. Las reglas son datos, no código: cambiarlas no toca el motor.
const CONSULTA = {
  donde: [ { campo: 'destino', op: '=', valor: 'laredo' },
           { campo: 'kg',      op: '>=', valor: 1000 } ],
  recargos: { normal: 0, peligrosa: 0.15, refrigerada: 0.10 }
};


// El ejercicio
// Cambio de normativa: se agrega el tipo de carga sobredimensionada, con 22 % de recargo.
// Primero predice, sin tocar el teclado
// Para cada estilo: ¿cuántos archivos tocas? todos menos el funcional
// ¿Modificas código que ya funcionaba? Si, en el imperactivo debe modificarse el switch se debe agregar el tipo. en el de objetos se debe agregar la clase nueva. y el declarativo se debe agregar el nuevo recargo
// Después impleméntalo en los cuatro
// Cronométrate. Compara con lo que predijiste.
// No uses IA todavía
// Hoy la predicción es el ejercicio. La IA te daría la respuesta sin el aprendizaje.

// Tarea: segundo cambio
// Los embarques con destino colombia pagan 8% adicional, sin importar el tipo de carga
// Este cambio no es como el anterior 
// El primero agregaba un caso 
// Un tipo mas, dentro de una dimesion que ya existia
// El segundo agrega una dimension
// Una regla nueva que atraviesa todos los tipos a la vez
// Para cada estilo: ¿cuántos archivos tocas? todos
// Modificas código que ya funcionaba? Si. En primer lugar debo establecer una regla nueva donde el destino colombia paga el 8% adicional. 
// Para el imperactivo debo agregar otra condicional donde si destino es igual colombia se debe aplicar el adicional
// Para objetos tendria que crear un nuevo metodo donde evalue el destino y de ser colombia agregue el adicional. este nuevo metodo debe ser aplicado dentro de "cargo()"
// Para funcional: agrego una funcion donde busque en el dicionario el valor asociado, si es colombia agrega de lo contrario no agrega nada
// en el declarativo debo agregar la nueva regla dentro de la consulta donde determine el adicional correspondiente a colombia
