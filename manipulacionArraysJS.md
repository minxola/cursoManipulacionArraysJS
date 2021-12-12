# Curso de Manipulación de Arrays

## Mutable e Inmutable

**Mutable** es un tipo de variable que puede ser modificada. En *JavaScript*, solo los objetos y arrays son mutables, los valores primitivos no lo són.

Un objeto mutable es un objeto cuyo estado puede ser modificado después de haber sido creado.

Un objeto inmutable, es un objeto cuyo estado no puede ser cambiado una vez que el objeto ha sido creado.

Las cadenas de texto (Strings) y los números (Numbers) son inmutables.

## forEach

Sirve para recorrer cada uno de los elementos de un **Array**.

```js
const letters = ['a', 'b', 'c', 'd'];
```

Usando el método `forEach()`, podemos mostrar cada uno de los elementos del arreglo en la consola.

```js
letters.forEach(element => console.log(element));
```

Este recorrido por cada uno de los elementos también se puede lograr con un  **for loop**.

```js
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log(element);
}
```

Cabe resaltar que al hacer el recorrido por cada elemento, se puede manipular cada uno de ellos para obtener un cierto resultado.

