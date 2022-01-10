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

- Recorre cada uno de los elementos del array
- Por cada elemento realiza una acción que le indiquemos
- Método inmutable, no modifica el array original.

```js
const letters = ['a', 'b', 'c'];

//Mostrando cada elemento del arreglo con forEach()
letters.forEach(element => console.log(element));
//a
//b
//c

//El mismo resultado se puede obtener usando un for loop
for(let index = 0; index < letters.length; index++){
    const element = letters[index];
    console.log(element);
}
//a
//b
//c
```

Cabe resaltar que al hacer el recorrido por cada elemento, se puede manipular cada uno de ellos para obtener un cierto resultado, que puede ser el mismo elemento u otro elemento modificado.

## 3. Mutable e Inmutable

**Mutable** es un tipo de variable que puede ser modificada. En *JavaScript*, solo los objetos y arrays son mutables, los valores primitivos no lo son.

Un objeto **mutable** es un objeto cuyo estado puede ser modificado después de haber sido creado.

Un objeto **inmutable**, es un objeto cuyo estado no puede ser cambiado una vez que el objeto ha sido creado.

Las cadenas de texto (Strings) y los números (Numbers) son *inmutables*.

## 4. Map()

- Transforma cada uno de los elementos
- Nos **devuelve otro array** con los elementos modificados (transformados)
- **Método inmutable**, no modifica el array original
- La cantidad de elementos del array final, será igual al del array original

```js
const letters = ['a', 'b', 'c'];

//usando el método map() para obtener un nuevo array
const letterPlus = letters.map(item => item + '++');
console.log(letterPlus); //['a++', 'b++', 'c++']

//El mismo resultado se puede obtener usando un for loop
const newArray = [];
for (let i = 0; i < letters.length; i++){
    const letter = letters[i];
    newArray.push(letter + '++');
}
console.log(newArray); //['a++', 'b++', 'c++']
```

## 5. Map() reloaded

- El array final puede contener cualquier resultado según el algoritmo
- Por tanto podemos usarlo para limpiar datos o filtrar (ciencia de datos)
- Se puede añadir nuevos elementos a un objeto dentro del array, tener cuidado con la mutabilidad

```js
const people = [
    {
        name: "rem",
        age: 33,
        weight: 84,
    },
    {
        name: "kim",
        age: 40,
        weight: 70
    },
    {
        name: "jan",
        age: 25,
        weight: 62,
    },
];

//obteniendo un array de edades
const ages = people.map(person => person.age);
console.log(ages); //[33, 40, 25]
```

Por más que map() sea un método que no causa mutabilidad en el array, se debe tener cuidado, ya que el array en este caso es de objetos, y al devolver el objeto puede causar mutabilidad (ya que estamos modificando la referencia en memoria directamente):

```js
const peoplePeru = people.map(person => {
    person.country = 'Perú';
    return person;
});

//Al retornar el objeto, causa mutabilidad en el array orginal 'People'
console.log('peoplePeru', peoplePeru);
/*
peoplePeru [
  { name: 'rem', age: 33, weight: 84, country: 'Perú' },
  { name: 'kim', age: 40, weight: 70, country: 'Perú' },
  { name: 'jan', age: 25, weight: 62, country: 'Perú' }
]
*/

//Al renderizar el array original, vemos que ha mutado
console.log('people', people);
/*
people [
  { name: 'rem', age: 33, weight: 84, country: 'Perú' },
  { name: 'kim', age: 40, weight: 70, country: 'Perú' },
  { name: 'jan', age: 25, weight: 62, country: 'Perú' }
]
*/
```

Para evitar la mutabilidad se debe devolver una referencia al objeto original y añadir la nueva propiedad, de la siguiente manera:

```js
//Para evitar que el objeto original mute, se debe retornar un nuevo objeto, haciendo referencia al objeto original:
const peopleSpain = people.map((person) => {
    //Se retorna un objeto nuevo, uso de spread operator (...person)
    return {
        ...person,
        country: 'Spain',
    };
});

// Se genera un nuevo objeto sin mutar el original
console.log('peopleSpain', peopleSpain);
/*
peopleSpain [
    { name: 'rem', age: 33, weight: 84, country: 'Spain' },
    { name: 'kim', age: 40, weight: 70, country: 'Spain' },
    { name: 'jan', age: 25, weight: 62, country: 'Spain' }
  ]
*/

//El objeto original ya no muta
console.log('people', people);
/*
people [
    { name: 'rem', age: 33, weight: 84 },
    { name: 'kim', age: 40, weight: 70 },
    { name: 'jan', age: 25, weight: 62 }
  ]
*/
```



