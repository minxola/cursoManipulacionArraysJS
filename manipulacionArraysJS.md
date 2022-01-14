# Curso de Manipulación de Arrays

Por: Nicolas Molina
## Introducción
### 1. Curso de manipulación de Arrays

Aprenderemos los diversos métodos para manipular arrays.

Trabajamos backend y frontend

Configuración inicial del proyecto:

- `git init`
- `npm init`
- `http-server`
- Iniciar servidor: `npx http-server client`
## Fundamentos del manejo de Arrays
### 2. forEach

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

### 3. Mutable e Inmutable

**Mutable** es un tipo de variable que puede ser modificada. En *JavaScript*, solo los objetos y arrays son mutables, los valores primitivos no lo son.

Un objeto **mutable** es un objeto cuyo estado puede ser modificado después de haber sido creado.

Un objeto **inmutable**, es un objeto cuyo estado no puede ser cambiado una vez que el objeto ha sido creado.

Las cadenas de texto (Strings) y los números (Numbers) son *inmutables*.

### 4. Map

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

### 5. Map reloaded

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

### 6. Filter

- Sirve para filtrar elementos del array con una condición
- Genera un nuevo array
- Es un método inmutable, no cambia el array original
- Puede mostrar desde 0 elementos hasta la misma cantidad de elementos del array original, según las coincidencias dentro del array

```js
const words = ['spray', 'home', 'exuberant', 'manteinance'];

//Filtrar palabras de longitud mayor a 6
const filtered = words.filter(item => item.length >= 6);

//Mostrar filtered words
console.log(filtered); //['exuberant', 'manteinance']

//Mostrar original array
console.log(words); //['spray', 'home', 'exuberant', 'manteinance']

//Este mismo comportamiento se puede lograr usando for loops
//Creamos un array vacío
const filterWords = [];

for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >= 6){
        filterWords.push(element);
    }
}

//Mostrando el array generado
console.log(filterWords);//['exuberant', 'manteinance']

//Original array
console.log(words);//['spray', 'home', 'exuberant', 'manteinance']

/*
CONDICIONALES MAS COMPLEJAS
*/
//Se pueden hacer condiciones mas complejas para el filtrado

const people = [
    {
        name: 'Peter',
        age: 23,
        country: 'PE',
        vaccinated: true
    },
    {
        name: 'Kim',
        age: 35,
        country: 'ES',
        vaccinated: true
    },
    {
        name: 'Jim',
        age: 15,
        country: 'PE',
        vaccinated: false
    },
    {
        name: 'Tim',
        age: 12,
        country: 'ES',
        vaccinated: false
    },
    {
        name: 'Kate',
        age: 26,
        country: 'ES',
        vaccinated: false
    },
    {
        name: 'Janeth',
        age: 44,
        country: 'MX',
        vaccinated: true
    },
];

//Mostrar personavas vacunadas y de Perú
const vacPeru = people.filter(person => person.vaccinated && person.country === 'PE');
console.log(vacPeru); 
//[ { name: 'Peter', age: 23, country: 'PE', vaccinated: true } ]

//Mostrar personas de España no vacunadas
const esNoVac = people.filter(item => item.country === 'ES' && item.vaccinated === false);
console.log(esNoVac);
/*
[
  { name: 'Tim', age: 12, country: 'ES', vaccinated: false },
  { name: 'Kate', age: 26, country: 'ES', vaccinated: false }
]
*/

//Creando un buscador
const search = (query) => {
    return people.filter(item =>{
        return item.name.includes(query);
    });
};

console.log(search('im'));
/*
[
  { name: 'Kim', age: 35, country: 'ES', vaccinated: true },
  { name: 'Jim', age: 15, country: 'PE', vaccinated: false },
  { name: 'Tim', age: 12, country: 'ES', vaccinated: false }
]
*/
```

### 7. Reduce

- Devuelve solo un valor
- Es un método que no causa mutabilidad en el array original

```js
const numbers = [1, 2, 3, 4];

//reduce requiere un función
//Esta función tiene dos parametros
//Uno representa al acumulador => a
//El otro representa a los elementos => e
//Se debe pasar un estado inicial del acumulador => 0
const suma = numbers.reduce((a, e) => a + e, 0);
console.log(suma); //10

//si no se coloca el estado inicial del acumulador
//por defecto tomará el valor de 0
const sum = numbers.reduce((a, e) => a + e);
console.log(sum); //10
```

Veamos que valores toman el acumulador en cada iteración:

| Iteración | a    | e    | return (a + e) |
| --------- | ---- | ---- | -------------- |
| 1         | 0    | 1    | (0 + 1) = 1    |
| 2         | 1    | 2    | (1 + 2) = 3    |
| 3         | 3    | 3    | (3 + 3) = 6    |
| 4         | 6    | 4    | (6 + 4) = 10   |

El mismo resultado se puede lograr usando ciclos for:

```js
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    sum = sum + element;
}

console.log(sum); //10
```

### 8. Reduce Reloaded



## Métodos en JavaScript
### 9. Some
### 10. Every
### 11. Find y findIndex
### 12. Includes
### 13. Join
### 14. Concat
### 15. Flat
### 16. FlatMap
### 17. Mutable functions
### 18. Sort
## Despedida



