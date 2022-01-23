/*
ORDENAMIENTO DE STRINGS
*/
const months = ['March', 'Jan', 'Feb', 'Dec'];

//aplicar solo sort sin parametros
months.sort();
//Lo ordena según ASCII, es decir alfabeticamente
console.log(months); //[ 'Dec', 'Feb', 'Jan', 'March' ]

/*
ORDENAMIENTO DE NUMEROS
*/
const numbers = [1, 30, 4, 21, 10000];

//Aplicando solo sort sin parametros
numbers.sort();

//El ordenamiento se hace según ASCII, es decir alfabeticamente
console.log(numbers);//[ 1, 10000, 21, 30, 4 ]

//para ordenar de mayor a menor se debe usar una función
//>>> Ordenamiento de menor a mayor
numbers.sort((a, b) => a - b);
console.log(numbers); //[ 1, 4, 21, 30, 10000 ]

//>>> Ordenamiento de mayor a menor
numbers.sort((a, b) => b - a);
console.log(numbers); //[ 10000, 30, 21, 4, 1 ]

/*
ORDENAMIENTO DE STRING
*/
const words = ['reserve', 'premier', 'comuniqué', 'café', 'adieu'];

//Por defecto lo ordena según ASCII
words.sort();
console.log(words);
//[ 'adieu', 'café', 'comuniqué', 'premier', 'reserve' ]

//Para navegadores antiguos usar localeCompare, para que ordene según la configuración del idioma local
words.sort((a, b) => a.localeCompare(b));
console.log(words);
//[ 'adieu', 'café', 'comuniqué', 'premier', 'reserve' ]

/*
ORDENAMIENTO EN OBJETOS
*/

const orders = [
    {
        name: 'Tim',
        total: 600,
        delivered: true,
        date: new Date(2022, 1, 10, 18, 30)
    },
    {
        name: 'Jhon',
        total: 120,
        delivered: false,
        date: new Date(2021, 12, 25, 14, 30)
    },
    {
        name: 'Joe',
        total: 500,
        delivered: true,
        date: new Date(2022, 1, 8, 14, 15)
    },
    {
        name: 'Doe',
        total: 250,
        delivered: true,
        date: new Date(2022, 1, 4, 10, 30)
    }
];

//Ordenar según total del cliente (a y b representan a cada objeto)
//El final se compara los atributos del objeto
//Lo ordena de menor a mayor
orders.sort((a, b) => a.total - b.total);
console.log(orders);
orders.sort((a, b) => a.date - b.date);
console.log(orders);

//ORDENANDO STRINGS SEGUN SU LONGITUD
const str = ['Tim', 'Jhon', 'Katerin', 'Doe', 'I'];
str.sort((a, b) => a.length - b.length);
console.log(str);//[ 'I', 'Tim', 'Doe', 'Jhon', 'Katerin' ]

//ORDENANDO MESES
const meses = ['Feb', 'Apr', 'Dec', 'Aug', 'Mar', 'asd'];
const values = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Set: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
}

meses.sort((a, b) => values[a] - values[b]);
console.log(meses);//[ 'Feb', 'Mar', 'Apr', 'Aug', 'Dec', 'asd' ]