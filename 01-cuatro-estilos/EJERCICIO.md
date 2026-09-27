# Ejercicio de la sesión — jueves 27 de agosto

Ya viste el mismo cálculo escrito de cuatro formas. Los cuatro dan **$42,500**.
Si el resultado es idéntico, ¿para qué existen cuatro estilos?

Este ejercicio contesta esa pregunta. **No lo resuelvas con IA todavía**: primero
predice, y hasta después escribe código.

---

## Parte 1 — Predice (5 minutos, sin tocar el teclado)

Llega un cambio de normativa: **se agrega el tipo de carga `sobredimensionada`,
con un recargo del 22 %**.

Para cada estilo, escribe en tu cuaderno:

| Estilo | ¿Cuántos archivos tocas? | ¿Modificas código que ya funcionaba? |
|---|---|---|
| Imperativo | | |
| Objetos | | |
| Funcional | | |
| Declarativo | | |

## Parte 2 — Hazlo

Implementa el cambio en los cuatro archivos. Cronométrate.

## Parte 3 — El segundo cambio

Ahora llega otro: **los embarques con destino `colombia` pagan 8 % adicional,
sin importar el tipo de carga.**

Vuelve a predecir antes de escribir. Este cambio es distinto al anterior:
el primero agregaba un *caso* dentro de una dimensión que ya existía;
este agrega una *dimensión nueva*.

## Parte 4 — La pregunta que importa

Responde por escrito, en cinco líneas:

1. ¿Qué estilo absorbió mejor el **primer** cambio y por qué?
2. ¿Qué estilo absorbió mejor el **segundo** y por qué?
3. ¿Fue el mismo? Si no, ¿qué te dice eso?

> Lo que se busca que descubras: **ningún paradigma gana siempre.**
> El estilo de objetos absorbe sin dolor los cambios que agregan un tipo nuevo,
> y sufre cuando se agrega una operación nueva sobre todos los tipos.
> El estilo funcional hace justo lo contrario.
> El declarativo absorbe ambos sin recompilar, pero paga con un motor más abstracto
> y más difícil de depurar cuando falla.
>
> Elegir paradigma es elegir **qué cambio quieres que sea barato**.

## Entrega

Un commit en tu repositorio con los cuatro archivos modificados y un archivo
`respuestas.md` con la Parte 4. Mensaje del commit en formato Conventional Commits.
