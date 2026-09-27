# Ejercicio — miércoles 2 de septiembre

Corre `npm start`. Dos textos distintos produjeron **el mismo árbol**.

## Parte 1 — Predice (sin tocar el teclado)

En `src/semanticas.js` hay tres funciones que reciben el mismo árbol y hacen cosas
distintas. Sin ejecutar nada, escribe qué devuelve cada una para `2 + 3 * 4`:

| Semántica | Tu predicción |
|---|---|
| `evaluar` | |
| `aPrefijo` | |
| `costo` | |

## Parte 2 — Una semántica nueva

Agrega a `src/semanticas.js` una función `profundidad(n)` que devuelva qué tan
hondo es el árbol. Para `2 + 3 * 4` debe dar **2**; para `2 + 3`, **1**; para un
número solo, **0**.

Fíjate en algo: **no tocaste ningún parser.** Le agregaste un significado nuevo al
mismo árbol.

## Parte 3 — Una sintaxis nueva

Escribe `src/parser-postfijo.js` que lea notación postfija: `2 3 4 * +`.
No lleva paréntesis y se resuelve con una pila.

Debe producir exactamente el mismo árbol que los otros dos. Compruébalo:

```js
JSON.stringify(postfijo('2 3 4 * +')) === JSON.stringify(infijo('2 + 3 * 4'))
```

Fíjate en algo: **no tocaste ninguna semántica.** Las tres funciones de
`semanticas.js` funcionan con tu parser nuevo sin cambiarles una línea.

## Parte 4 — La pregunta

Responde en cinco líneas:

1. Al agregar una semántica nueva, ¿qué archivos tocaste?
2. Al agregar una sintaxis nueva, ¿qué archivos tocaste?
3. ¿Qué separa el árbol, que hace que esas dos cosas no se estorben?

> **La idea:** el árbol es una frontera. De un lado, cómo se escribe. Del otro, qué
> significa. Un paradigma no se define por su sintaxis — se define por qué conceptos
> puede representar el árbol y qué se decide que signifiquen.
>
> Esto es también lo que hace un compilador, y es de lo que trata Lenguajes y Autómatas.
> Aquí lo estás usando para otra cosa: para ver dónde vive realmente un paradigma.

## Entrega

Un PR a tu repositorio con `profundidad`, `parser-postfijo.js` y `respuestas.md`.
Mensajes en formato Conventional Commits.
