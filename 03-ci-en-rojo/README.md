# CI en rojo — las tres puertas

Este repositorio no compila, no pasa el linter y no pasa las pruebas.
Hay **tres defectos**, y cada uno lo atrapa una herramienta distinta.

```bash
npm install
npm run verificar
```

## Las tres puertas

| Puerta | Comando | Qué atrapa |
|---|---|---|
| Tipos | `npm run typecheck` | Que las piezas no embonan |
| Análisis estático | `npm run lint` | Que el código es riesgoso aunque compile |
| Pruebas | `npm test` | Que el comportamiento no es el que pide el negocio |

Ninguna sustituye a las otras. Un programa puede compilar perfecto, pasar el linter
sin una queja, y estar mal.

## Tu trabajo

1. Corre `npm run verificar` y **lee el error completo antes de tocar nada**.
2. Arregla un defecto a la vez, en su propio commit.
3. Cada commit en formato Conventional Commits, describiendo el propósito.
4. Abre un PR cuando `npm run verificar` esté en verde.

## La pregunta que se entrega con el PR

En dos o tres líneas: **¿cuál de los tres defectos habría llegado a producción?**
¿Por qué ese y no los otros?
