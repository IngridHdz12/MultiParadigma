# Instalación de Elixir

Para la **unidad 2**, que arranca el lunes 7 de septiembre.
Toma unos 15 minutos. Hazlo antes de esa sesión.

## Windows

La forma más simple es el instalador oficial:

1. Ve a elixir-lang.org, sección Install, y descarga el instalador de Windows.
2. Instálalo con las opciones por omisión. Trae Erlang incluido.
3. Cierra y vuelve a abrir la terminal.

Si usas Chocolatey:

```powershell
choco install elixir
```

## macOS

```bash
brew install elixir
```

## Linux (Ubuntu / Debian / WSL)

```bash
sudo apt-get update
sudo apt-get install -y elixir
```

## Comprueba que quedó

```bash
elixir --version
```

Debe imprimir algo como `Elixir 1.14.0` o mayor. Y ahora abre la consola interactiva:

```bash
iex
```

Vas a ver un prompt así:

```
iex(1)>
```

Escribe esto y presiona Enter:

```elixir
iex(1)> [1, 2, 3]
```

Si te responde `[1, 2, 3]`, ya está todo listo. Para salir: `Ctrl+C` dos veces.

## Pruébalo tú antes de la clase

Estas cuatro líneas son las que vamos a discutir el lunes. Córrelas y fíjate bien
en la última:

```elixir
iex> a = [1, 2, 3]
iex> b = a
iex> a = [9 | a]
iex> b
```

¿Qué esperabas que imprimiera `b`? ¿Qué imprimió? Trae tu respuesta a la clase.

## Si no puedes instalarlo

No te quedes fuera de la sesión. Hay consolas de Elixir que corren en el navegador
sin instalar nada: busca "Elixir online REPL". Sirve para las primeras dos semanas
de la unidad; para el proyecto sí vas a necesitarlo instalado.

Y si falla la instalación, trae **el mensaje de error completo** a clase. No una
descripción: el mensaje.

## Lo que NO hay que instalar

- **Phoenix** ni ningún framework. Solo el lenguaje.
- **Prolog** — se usa SWISH en el navegador, en la unidad 4. Nunca se instala.
