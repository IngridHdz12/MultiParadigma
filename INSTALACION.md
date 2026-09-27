# Guía de instalación

Toma unos 20 minutos. Hazlo **antes** de la sesión del jueves 27.

## 1. Node.js 22 LTS

Descárgalo de nodejs.org y elige la versión **LTS**. Para verificar:

```bash
node --version    # debe decir v22.x
npm --version
```

## 2. Visual Studio Code

De code.visualstudio.com. Instala estas tres extensiones desde el panel de extensiones:

- **ESLint**
- **Vitest**
- **EditorConfig for VS Code**

## 3. Git

De git-scm.com. Configúralo **con tus datos reales**, porque de ahí sale tu autoría:

```bash
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tucorreo@ejemplo.com"
```

## 4. Cuenta de GitHub

Con tu nombre real o tu número de control. No un apodo: este repositorio es parte de
tu portafolio profesional y lo vas a poder enseñar cuando busques trabajo.

## 5. Comprueba que todo funciona

```bash
git clone https://github.com/tecnm-nlaredo-multiparadigma/programacion-multiparadigma-2026.git
cd programacion-multiparadigma-2026/01-cuatro-estilos
npm start
```

Debe imprimir cuatro veces `$42,500`. Si lo ves, ya está todo listo.

## Lo que NO hay que instalar todavía

- **Prolog** — se usa SWISH, que corre en el navegador. Nunca se instala.
- **Elixir** — se instala hasta la semana 3. Ya te avisaré.

## Si algo falla

Trae el mensaje de error completo a clase, no una descripción. El mensaje de error
es información; "no me sirvió" no lo es.
