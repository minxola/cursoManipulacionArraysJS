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

- Devuelve solo un valor (no devuelve un array)
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

Con el método `reduce()` se puede devolver un solo valor, este valor incluye también objetos como en los siguientes ejemplos:

```js
//USANDO REDUCE CON OBJETOS
const data = [
    {
    name: "Nicolas",
    level: "low",
    },
    {
    name: "Andrea",
    level: "medium",
    },
    {
    name: "Zulema",
    level: "hight",
    },
    {
    name: "Santiago",
    level: "low",
    },
    {
    name: "Valentina",
    level: "medium",
    },
    {
    name: "Lucia",
    level: "hight",
    },
];

const levelCount = data.map(item => item.level).reduce((obj, item) =>{
    if(!obj[item]){
        obj[item] = 1;
    } else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(levelCount);

//HACIENDO RANGOS CON REDUCE
const arr = [1, 2, 4, 5, 6, 8, 4, 8, 10, 12, 15, 20, 22, 12, 25];

const ranges = arr.reduce((obj, i) => {
    if(i<=10){
        obj['1-10'] += 1;
    }else if(i<=20){
        obj['11-20'] += 1;
    } else{
        obj['21-30'] += 1;
    }
    return obj;
}, {
    '1-10': 0,
    '11-20': 0,
    '21-30': 0
});

console.log(ranges);

// OTRO EJEMPLO DE RANGOS
const n = [];

//Hacemos que el rango n sea aleatorio, también se puede escribir
//directament r = [1, 3, ....]
for (let i = 0; i < 40; i++) {
    n.push(Math.floor(Math.random()*40));
}

//Cración de los rangos
const r = ['0-10', '11-20', '21-30','31-40'];

//Reduciendo el array n a un objeto de rangos.
const ranges = n.reduce((s, j) => {
    if(j <= 10){
        !s[r[0]]
            ? s[r[0]] = 1
            : s[r[0]] += 1;
    } else if (j <= 20){
        !s[r[1]]
            ? s[r[1]] = 1
            : s[r[1]] += 1;
    }else if (j <= 30){
        !s[r[2]]
            ? s[r[2]] = 1
            : s[r[2]] += 1;
    } else {
        !s[r[3]]
            ? s[r[3]] = 1
            : s[r[3]] += 1;
    }
    return s;
}, {});

console.log(n);
console.log(ranges);
```

## Métodos en JavaScript
### 9. Some

- Muestra si al menos un elemento del array cumple con una condición
- Nos devuelve `true` o `false` según sea el caso

```js
const arr = [1, 2, 3, 4, 5, 6];

//Saber si hay numeros pares
const r = arr.some(item => item % 2 === 0);
console.log('Some: ', r); //Some: true

//Saber si hay pares con condicionales
let rta = false; //suponemos que no hay

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 === 0){
        rta = true;
        break;
    }
}

console.log('Loop: ', rta); //Loop: true

//Trabajando con objetos
const orders = [
    {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
    },
    {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    },
    {
    customerName: "Santiago",
    total: 180,
    delivered: true,
    },
    {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    },
    {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
    },
];

//Ver si al menos una orden fue entregada
const entregado = orders.some(orden => orden.delivered);
console.log(entregado); //true
```

Para trabajar con fechas una librería o paquete para instalar desde la consola es:

[date-fns](https://date-fns.org/), que nos permite manipular fechas con JavaScript en un navegador o en Node.js.

### 10. Every

- El método `every()` evalúa si todos los elementos de un array cumplen con una condición dada.
- Si todos cumplen con la condición devuelve `true`, de caso contrario `false`.
- El lo contrario del método `some()` 

```js
const numbers = [45, 30, 20, 29, 10, 25];

//Testeando si todos los elementos son menores a 40
const test = numbers.every(item => item <= 40);
console.log(test); //false

//Esto también se puede lograr con for loop
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40){
        rta = false;
    }
}
console.log(rta); //false

//Trabajando con objetos
const team = [
    {
    name: "Nicolas",
    age: 10,
    },
    {
    name: "Andrea",
    age: 12,
    },
    {
    name: "Zulema",
    age: 18,
    },
    {
    name: "Santiago",
    age: 17,
    },
];

//Verificando si todos son menores de edad
const isYoung = team.every(item => item.age < 18);
console.log(isYoung); //false
```

### 11. Find y findIndex

#### Método find()

- Retorna solo un objeto que cumple con la condición
- Retorna el objeto pero no en forma de array
- Retorna el primer objeto que cumple la condición
- Si no hay ningún objeto que coincida devuelve `undefined`

```js
const numbers = [20, 4, 15, 2, 19, 34];

//Encontrar un numero mayor a 10 (n > 10)
const respuesta = numbers.find(n => n > 10);
console.log('Find: ', respuesta);

//También se puede lograr con for loop
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element > 10){
        rta = element;
        break;
    }
}
console.log('for loop: ', rta);

//Trabajando con array de objetos
const products = [
    {
    name: "Pizza",
    price: 12,
    id: '🍕'
    },
    {
    name: "Burger",
    price: 23,
    id: '🍔'
    },
    {
    name: "Hot dog",
    price: 34,
    id: '🌭'
    },
    {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
    },
];

//buscar un objeto por su id
const findObject = products.find(item => item.id === '🍕');

//Nos devuelve el objeto (1 elemento)
console.log(findObject); //{ name: 'Pizza', price: 12, id: '🍕' }
```

#### Método findIndex()

- Retorna el índice del objeto que cumple una condición
- Si no encuentra el objeto devuelve `-1`

```js
const products = [
    {
    name: "Pizza",
    price: 12,
    id: '🍕'
    },
    {
    name: "Burger",
    price: 23,
    id: '🍔'
    },
    {
    name: "Hot dog",
    price: 34,
    id: '🌭'
    },
    {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
    },
];

//VARIANTE DE find() => findIndex()
const index = products.findIndex(item => item.id === '🍔');
console.log(index); //1
```

### 12. Includes

- Funciona para `array` y `string`
- Determina si algo esta incluido dentro del array o el string
- Devuelve `true` o `false` según el caso
- No recibe como parámetro una función, sino que directamente el elemento buscado

```js
const pets = ['cat', 'dog', 'bat'];

//Ver si 'cat' esta dentro del array
const isIn = pets.includes('cat');
console.log('includes: ', isIn); //true

//Esto se puede lograr con un ciclor for
let includeIn = false;
for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'dog'){
        includeIn = true;
        break;
    }
}

console.log('for loop: ', includeIn); //true

//Con STRINGS
const str = 'Cats and dogs';

const rta = str.includes('m');
console.log(rta); //false

const rta2 = str.includes('and');
console.log(rta2); //true
```

### 13. Join

#### join()

- Une los elementos de un array
- Se le debe pasar un separador
- Devuelve una cadena `string`

```js
const words = ['Fire', 'Air', 'Water'];

//al método join() se le debe pasar un separador:string
const joinWords = words.join('--');
console.log(joinWords); //Fire--Air--Water

//También se puede lograr con for loop
let str = '';
const separador = '--';
for (let i = 0; i < words.length; i++) {
    const element = words[i];
    str = str + element + separador;
}

console.log(str); //Fire--Air--Water--

//Para evitar la adición final de '--' podemos agregar un condicional
//dentro del loop
let rta = '';
for (let j = 0; j < words.length; j++) {
    const element = words[j];
    j + 1 < words.length
        ? rta = rta + element + separador
        : rta = rta + element
}
console.log(rta); //Fire--Air--Water
```

#### split()

- Divide un objeto `string` en un `array`
- Se le debe pasar un patrón o separador con el cual debe romper la cadena

```js
const f = 'Curso de manipulacion de arrays';

//Con split podemos convertir el string en un array
//al método split() se le debe pasar un separador (patron)
//el cual puede ser una coma, espacio, etc.

//haciendo un array, basados en espacio ' '
const arr = f.split(' ');
console.log(arr); //[ 'Curso', 'de', 'manipulación', 'de', 'arrays' ]

//split() y join() son métodos complementarios
//luego podemos usar join para generar una url por ejemplo

const url = arr.join('-').toLocaleLowerCase();
console.log(url);//curso-de-manipulacion-de-arrays
```

### 14. Concat

- Sirve para concatenar objetos tipo `array`
- Es método inmutable
- Devuelve un nuevo array que contiene los elementos de ambos arrays

```js
const a = [1, 1, 2, 2];
const b = [5, 5, 8, 8];

//Unir ambos arrays
const union = a.concat(b);
console.log(union); //[1, 1, 2, 2, 5, 5, 8, 8]

//También se puede lograr con un for loop
/*
'...' spread operator, para copiar el array 'a'
si no se usa spread operator, newArr estaría haciendo referencia
al array 'a', y al hacer la modificación también se modificaría
el array 'a' (MUTACIÓN), lo cual se debe evitar
*/
const newArr = [...a];
for (let i = 0; i < b.length; i++) {
    const element = b[i];
    newArr.push(element);
}
console.log(newArr); //[1, 1, 2, 2, 5, 5, 8, 8]

//CUIDADO CON EL SPREAD OPERATOR

//Otra forma de concatenar un array es usando los spread operator
//funciona de forma adecuada solo si es un array como este caso
const newArray = [...a, ...b];
console.log(newArray); //[1, 1, 2, 2, 5, 5, 8, 8]

//Si agregamos un string
const xArray = [...a, 'string'];
console.log(xArray); //[ 1, 1, 2, 2, 'string' ]

//Si agremos el string con '...' operator
const yArray = [...a, ...'string'];
console.log(yArray); //[1, 1, 2, 2, 's', 't', 'r', 'i', 'n', 'g']

//OTRAS FORMAS DE CONCATENAR
//Si quisieramos modificar el array original

//En este caso el array ingresa dentro del otro array
a.push(b);
console.log(a); //[ 1, 1, 2, 2, [ 5, 5, 8, 8 ] ]

//Si queremos concatenar y modificar el array original
const m = [1, 1];
const n = [4, 4];
m.push(...n);
console.log(m); //[ 1, 1, 4, 4 ]
```

### 15. Flat

- Crea una nueva matriz con todos los elementos de sub-array, concatenados recursivamente, hasta una **profundidad** específica.
- Si no se especifica la profundidad, por defecto será 1.

```js
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

//Aplanando la matriz (profundidad por defecto 1)
const flatArr = matriz.flat();
console.log(flatArr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Se puede lograr con un for loop (profundidad 1)
const newArr = [];
for (let i = 0; i < matriz.length; i++) {
    const arr = matriz[i];
    for (let j = 0; j < arr.length; j++) {
        const element = arr[j];
        newArr.push(element);
    }
}
console.log(newArr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

//Arrays con mas de 1 nivel de profundidad
const arr = [
    [1, 2, 3],
    [4, [5, 6], [7, 8, [9, 10]]],
    [11, 12, 13],
];

const newMat = arr.flat(3);
console.log(newMat); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
```

### 16. FlatMap

- Es como una combinación de `flat()` y `map()`
- Devuelve un flat array (arreglo aplanado)
- inmutable

```js
const users = [
    {userID: 1, username: 'Tom', attributes: ['Nice', 'Cute']},
    {userID: 2, username: 'Mike', attributes: ['Lovely']},
    {userID: 3, username: 'Niko', attributes: ['Nice', 'Cool']},
];

const rta = users.flatMap(user => user.attributes);
console.log(rta); //[ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]
```

### 17. Mutable functions



### 18. Sort
## Despedida



