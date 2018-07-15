# Motorola e4 plus

[![Build Status](https://travis-ci.org/kmiloarguello/moto-e4-plus.svg?branch=master)](https://travis-ci.org/kmiloarguello/moto-e4-plus)

Maquetación del sitio web del nuevo Moto e4 Plus, donde se resaltan las características principales del producto en cuanto a estética, diseño y ergonomía. Así como sus funcionalidades de cámara, batería y huella digital.

## Tecnologías

Este proyecto fue desarrollado con las siguientes tecnologías:
- React
- Webpack
- Jest
- Css-grid

## Estructura

El proyecto está dividido por componentes de la siguiente manera.

- El componente `Moto` es el padre de todos los demás. En él se encuentran los llamados a los hijos y la información pasada por medio de `props` y `states`.
- ...

## Contribuir al proyecto

1. Clonar o hacer "fork" del proyecto.
2. Instalar dependencias:
    - Para este paso se requiere tener instalado `NodeJS` con `npm` o `yarn` como administrador de dependencias. En la terminal de comandos correr uno de los siguientes códigos.
```
yarn install
```
o 
```
npm install
```
3. Una vez teniendo las dependencias instaladas, lanzar los comandos de Test para verificar que el proyecto esté corriendo correctamente.
```
yarn test

```
Por debajo de los test, se ejecutan con [jest](https://jest.io). Para hacer modificaciones de los mismos, dirigirse a su documentación.

4. Crear el paquete de distribución por medio de [webpack](https://webpack.js.org).
```
yarn run dev
```
5. Ver en el navegador. Una vez que se creó la carpeta `dist`, puede abrirla y ver los cambios en el navegador. También puede hacer uso de `node` para lanzar un servidor y ver el resultado.

## Pruebas

Este proyecto fue desarrollado de la mano de las pruebas unitarias y de control para prevenir "bugs" o funcionalidades inesperadas para el usuario.

Dentro de la carpeta `src` se encuentra la carpeta `__tests__` donde están separadas por archivo, los componentes y cada uno tiene un conjunto de pruebas donde se verifican las funcionalidades. Estas pruebas se realizaron con la libreria de Facebook: [jest](https://jest.io).

## Comentarios

Tomado como base el proyecto [Produt-page-jumbo](https://github.com/kmiloarguello/product-page-jumbo). Este proyecto se inicia con las configuraciones de Webpack, babelrc, jest, react correspondientes. Todo el desarrollo, la estructura y las configuraciones fueron hechas por mi.

El material de imágenes, videos, fuentes de texto y demás son propiedad de la empresa que me los brinda para el proyecto y yo no tengo propiedad alguna sobre dichos elementos.

El proyecto es con fines de aspiración a una reconocida empresa en Colombia.

## Acerca de mi

Puede ver más de mi trabajo en [mi sitio web](https://camiloarguello.xyz).
