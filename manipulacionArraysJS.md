# Curso de Manipulación de Arrays

Por: Nicolas Molina

## 1. Curso de manipulación de Arrays

Aprenderemos los diversos métodos para manipular arrays.

Trabajamos backend y frontend

Configuración inicial del proyecto:

- `git init`
- `npm init`
- `http-server`
- Iniciar servidor: `npx http-server client`

## 2. forEach()

Sirve para recorrer cada uno de los elementos de un **Array**.

```js
const letters = ['a', 'b', 'c'];
```

Usando el método `forEach()`, podemos mostrar cada uno de los elementos del arreglo en la consola.

```js
letters.forEach(element => console.log(element));

//Resultado
//a
//b
//c
```

Este recorrido por cada uno de los elementos también se puede lograr con un  **for loop**.

```js
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log(element);
}

//Resultado
//a
//b
//c
```

Cabe resaltar que al hacer el recorrido por cada elemento, se puede manipular cada uno de ellos para obtener un cierto resultado.

## 3. Mutable e Inmutable

**Mutable** es un tipo de variable que puede ser modificada. En *JavaScript*, solo los objetos y arrays son mutables, los valores primitivos no lo son.

Un objeto mutable es un objeto cuyo estado puede ser modificado después de haber sido creado.

Un objeto inmutable, es un objeto cuyo estado no puede ser cambiado una vez que el objeto ha sido creado.

Las cadenas de texto (Strings) y los números (Numbers) son inmutables.

## 4. Map()

El método `map` nos permite transformar a cada uno de los elementos, obteniéndose otro array con los elementos modificados. Este método es inmutable, es decir no modifica el array original. El nuevo array tendrá la misma cantidad de elementos que el array original.

```js
const letter = ['a', 'b', 'c', 'c'];
```



