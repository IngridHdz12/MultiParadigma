# El repositorio de su equipo — 11 pasos

Miércoles 23 de septiembre · Unidad 1

El proyecto se trabaja **en pareja** y el repositorio es **de los dos**: uno solo para las
cinco unidades. Al terminar la sesión tienen que tener el repositorio del equipo, la prueba
de 1000 kg **en verde**, y un **pull request revisado por el compañero e integrado con CI en
verde**. Eso es la mitad de la competencia **C1.2**, que se verifica el viernes.


## Antes de empezar

- Los dos con cuenta de GitHub y sesión iniciada
- Node 22: compruébenlo con `node --version`
- Git configurado:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@correo"
```

- Decidan quién es **A** y quién es **B**. Hoy A escribe y B revisa; en la unidad 3 se
  invierte

## 1 · A crea el repositorio del equipo a partir de la plantilla

1. Abre <https://github.com/tecnm-nlaredo-multiparadigma/plantilla-cotizador>
2. Botón verde **Use this template** → **Create a new repository**
3. **Owner:** la cuenta de A · **Repository name:** `cotizador-eNN` (el número de su equipo: `cotizador-e01`, `cotizador-e02`…)
4. Visibilidad: **Public** → **Create repository**

> **Público no es opcional:** sin eso no corre la verificación automática en el plan gratuito.

## 2 · A agrega a B como colaborador, y B acepta

- En el repositorio: **Settings → Collaborators → Add people** → usuario de GitHub de B
- B acepta la invitación desde su correo o desde <https://github.com/notifications>
- Hasta que B acepte no puede subir nada: háganlo primero

## 3 · Registren el repositorio

Peguen la liga en el canal de Teams, con el número de equipo y los dos nombres. Una sola vez
por equipo. Sin ese paso, para mí no existe.

## 4 · Los dos lo bajan a su máquina

```bash
git clone https://github.com/USUARIO-DE-A/cotizador-eNN.git
cd cotizador-eNN
npm install
```

Aunque hoy solo escriba A, B necesita el repositorio en su máquina para revisar.

## 5 · Compruébenlo ANTES de tocar nada

```bash
npm run verificar
```

Falla una prueba: *"aplica descuento EXACTAMENTE en 1000 kg"*. Léanla completa: dice qué
esperaba (11500) y qué recibió (12500). No abran el código antes de leerla.

## 6 · A crea la rama y arregla el defecto

```bash
git switch -c fix/descuento-en-1000
```

Nunca se trabaja directo en `main`: es la regla 1 del README. El defecto está en
`src/cotizador.ts` y es de **un solo carácter**. La regla de negocio dice que el descuento
aplica **a partir de** 1000 kg, y "a partir de" incluye al 1000. Borren también el
comentario `TODO`.

## 7 · A verifica y guarda el cambio

```bash
npm run verificar
git add -A
git commit -m "fix: aplica el descuento por volumen exactamente en 1000 kg"
git push -u origin fix/descuento-en-1000
```

Las tres puertas en verde antes del commit. `fix: arreglo`, `cambios` o `wip` no cuentan: el
mensaje dice el **propósito**.

## 8 · A abre el pull request

- En GitHub aparece el aviso **Compare & pull request**
- Título: el mismo mensaje del commit
- En la descripción: qué resolvieron, cómo lo verificaron y qué descartaron
- En **Reviewers**, a la derecha, A pide la revisión de B

## 9 · B revisa de verdad

- B entra a **Files changed** y lee el cambio
- B deja un comentario contestando: ¿por qué esta línea arregla la regla de negocio?
- **Review changes → Approve**

> Aprobar sin leer les va a costar en la defensa: a cada quien se le pregunta sobre lo que
> escribió el otro, y el coeficiente es de los dos.

## 10 · Esperen el check verde e intégrenlo

El check de CI tarda un minuto. Si sale rojo, ábranlo y lean el error. Con el check en verde
y la aprobación de B: **Merge pull request** → **Confirm merge**.

## 11 · Verifiquen que quedó

```bash
git switch main
git pull
npm run verificar
```

## Lista de verificación — esto es lo que se revisa el jueves

- [ ] El repositorio es público y se llama `cotizador-eNN`
- [ ] Los dos integrantes tienen acceso (B aceptó la invitación)
- [ ] Pegamos la liga en Teams
- [ ] `npm run verificar` pasa las tres puertas
- [ ] El trabajo fue en una rama, no en `main`
- [ ] El commit describe el propósito, en formato Conventional Commits
- [ ] El PR tiene la aprobación del compañero y el check de CI en verde, y está integrado

## Si algo falla

| Si pasa esto | Haz esto |
|---|---|
| `git: command not found` / `npm: command not found` | No están instalados. Ve `INSTALACION.md`. Hoy trabajen en la máquina del compañero y termina en casa |
| Al hacer push me pide usuario y contraseña | GitHub ya no acepta contraseña. Plan B sin instalar nada: hagan el cambio desde el navegador (paso 6, botón del lápiz) y al guardar elijan **Create a new branch**; ahí mismo se abre el pull request |
| B no puede subir nada | No ha aceptado la invitación: <https://github.com/notifications> |
| El PR no muestra ningún check | Pestaña **Actions** del repositorio → habiliten los workflows. Regresen a **Checks** en el PR |
| CI en rojo y en nuestra máquina pasa | Casi siempre no subieron el arreglo: `git status`, luego `add`, `commit` y `push` otra vez |
| Nos equivocamos de nombre al crear el repo | Settings → Rename. No hay que volver a empezar |
