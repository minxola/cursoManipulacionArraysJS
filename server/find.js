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

//VARIANTE DE find() => findIndex()
const index = products.findIndex(item => item.id === '🍔');
console.log(index); //1