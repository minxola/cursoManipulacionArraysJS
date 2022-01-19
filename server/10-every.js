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