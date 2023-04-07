# ¿Qué es el DOM? El significado del Modelo de Objeto del documento.

##### DOM significa Document Object Model en español sería Modelo de Objetos del Documento. Es una interfaz de programación que nos permite crear. Es una interfaz de programación para los documentos HTML y XML

# Que es un nodo

##### un nodo en el DOM es  cualquier etiqueta del cuerpo, como parrafo, el mismo body, o incluso las etiquetas de una lista

- **document** es el nodo raíz, de este derivan los demas nodos
- **element** definidos por etiquetas HTML
- **text** el texto dentro de un nodo element se considera nodo hijo de tipo text
- **attributes** 
- **comentarios y otros**

## document. - Metodos de seleccion de elementos

- document.getElementById() selecciona un elemento por id
- document.getElementsTagName() selecciona todos los elementos que coincidan con el mismo nombre
- document.getElementById() selecciona un elemento por id
- document.querySelecto() devuelve el primer elemento que coincida con el grupo especificado de selectores
- document.querySelectoAll() devuelve todos los elementos que coincidan con el grupo especificado de selectores

## Metodos para definir, obtener  y eliminar atributos

- element.setAttribute() -- Modifica el valor de un atributo
- element.getAttribute() -- Obtiene el valor de un atributo
- element.removeAttribute() -- Remueve el valor de un atributo

## Clases, classList y metodos classList

- Definicion y usos
- add() añade una clase
- remove() remueve
- item() devuelve el indice
- contains() verifica si posee la clase especificada
- replace() reemplaza
- toggle() si no tiene la clase la agrega, y si ya la tiene la elimina



Esto es `Plantilla básica de HTML`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>Document</title>
</head>
<body>
    <script src="codigo.js"></script>
</body>
</html>
```  

A continuación se muestra un [Link](https://ejemplo.com/ "Título opcional del enlace").

<https://ejemplo.com>
`https://ejemplo.com`

[![Esta es una imagen de ejemplo](https://ejemplo.com/imagen.jpg)](https://ejemplo.com)

Puedes colocar [^1] notas en el pie de página [^2] fácilmente.
[^1]: Aquí encuentras el texto de la nota al pie de página.
[^2]: **Las notas de pie de página** pueden *formatearse* también.
Estas pueden ocupar varias líneas.

Esto es un \*ejemplo con asteriscos\*.
