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

//Agregando un nuevo atributo a los objetos del array people
/* Comentamos para que no interfiera con la parte final del código
const peoplePeru = people.map(person =>{
    person.country = 'Perú';
    return person;
});
*/
//Al retornar el objeto, causa mutabilidad en el array orginal 'People'
// console.log('peoplePeru', peoplePeru);
/*
peoplePeru [
  { name: 'rem', age: 33, weight: 84, country: 'Perú' },
  { name: 'kim', age: 40, weight: 70, country: 'Perú' },
  { name: 'jan', age: 25, weight: 62, country: 'Perú' }
]
*/

//Al renderizar el array original, vemos que ha mutado
// console.log('people', people);
/*
people [
  { name: 'rem', age: 33, weight: 84, country: 'Perú' },
  { name: 'kim', age: 40, weight: 70, country: 'Perú' },
  { name: 'jan', age: 25, weight: 62, country: 'Perú' }
]
*/

//Para evitar que el objeto original mute, se debe hacer lo siguiente:
const peopleSpain = people.map((person) => {
    //Se retorna un nuevo objeto, haciendo referencia al original con el spread operator (...person)
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