# Vite + ReactTS + ESLint Airbnb + Prettier

## TODO

- [x] Crear proyecto en Vite + TypeScript
- [x] Agregar EsLint + algun estandar
- [x] Agregar Prettier y configurarlo con EsLint
- [ ] Agregar Tailwind

## Lineamientos a seguir

- Se usará `yarn` como gestor de paquetes de NodeJS.
- Los archivos de configuración serán en `YAML`, pero pueden optar por otras extensiones.

## Creación de Proyecto en Vite + TypeScript

Vamos a empezar creando un proyecto desde cero con Vite utilizando TypeScript.

```bash
yarn create vite
```

Este comando nos permite crear un proyecto desde cero, para ello solo debemos responder las preguntas que nos saldrá en la consola.

```bash
✔ Project name: › vrtsept-template
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC
```

Ahora instalamos las dependencias con el comando `yarn install`.

## Configurando ESLint

Por default Vite nos crea un archivo `.eslintrc.cjs` la cual configura los siguientes plugins:

- `eslint`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`

Por el momento vamos a eliminar el archivo `.eslintrc.cjs` (corriendo el comando `$ rm .eslintrc.cjs`) y vamos a configurar ESLint desde cero para no estar acomplados a las futuras actualizaciones que pueda tener el template de Vite.

Ahora vamos a instalar la configuración de ESLint de Airbnb, la cual es una conocida y aceptada en el mundo de React (mayor informacion https://www.npmjs.com/package/eslint-config-airbnb), vamos a instalar el plugin llamado `eslint-config-airbnb` con sus depenncias.

```bash
npx install-peerdeps --dev eslint-config-airbnb
```

Este comando instalara los siguientes plugins por default, los cuales son configurado por el plugin de airbnb:

- `eslint-config-airbnb`
- `eslint`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

Como nosotros estamos utilizando TypeScript entonces debemos extender esta configuración para que funcione con TS sin problemas, para ello ya se cuenta con un plugin llamdo `eslint-config-airbnb-typescript` el cual vamos a instalar de la misma manera que el anterior.

```bash
npx install-peerdeps --dev eslint-config-airbnb-typescript
```

Este compando instalará lo siguiente:

- `eslint-config-airbnb-typescript`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-plugin-import`

_Nota: Algunas dependencias fueron instalaras dos veces, no hay problema con esto ya que ambas mantienen la misma version._

Con esto ya podriamos crear nuestro archivo `.eslintrc.yaml` con la siguiente configuración.

```yaml
root: true
env:
  browser: true
  es2020: true
extends:
  - airbnb
  - airbnb-typescript
  - airbnb/hooks
ignorePatterns:
  - dist
parser: '@typescript-eslint/parser'
parserOptions:
  ecmaVersion: latest
  sourceType: module
  project: ./tsconfig.json
plugins:
  - react
rules:
  no-console: warn
  react/react-in-jsx-scope: off
  '@typescript-eslint/no-unused-vars': warn
```

Esta sería la configuración inicial necesaria para poder trabajar con ESLint.

## Configurando Prettier

Vamos a configurar Prettier para que nos ayude a automaticamente remover varios errores de ESLint que pueden aparecer por temas de formatos, a su vez vamos a configurar eslint para que muestre errores de prettier y no haya alguna inconsitencias entre las reglas de ESLint y el auto-formato de Prettier.

Vamos a instalar Prettier

```bash
yarn add -D prettier
```

Ahora vamos a crear un archivo `.prettierrc.yaml` donde vamos a configurar nuestras reglas de formato.

```yaml
semi: true
tabWidth: 2
printWidth: 120
singleQuote: true
trailingComma: es5
endOfLine: auto
```

Ahora vamos a configurar ESLint para que las reglas de formato de Prettier esten alineados con las reglas de ESLint. Primero, instalamos dos dependecias.

```
yarn add -D eslint-plugin-prettier eslint-config-prettier
```

Una vez instalado simplemente debemos extender nuestra configuración con `plugin:prettier/recommended`.

```yaml
... eslint configuration

extends:
  - ... other plugins
  - plugin:prettier/recommended

... eslint configuration
```

Ahora cuando tengamos un error de prettier este sera mostrando en el linter y algunos errores de formato que mostraba ESLint por default han sido desabilitados.
