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
