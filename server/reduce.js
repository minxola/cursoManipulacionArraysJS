//tenemos un array
const numbers = [1, 2, 3, 4];

/*
Reduce requere:
    - Una función
        -Dos parametros: acumulador y elemento
    - Estado inicial del acumulador
*/
const sumaNumbers = numbers.reduce((acumulador, element) => acumulador + element, 0);
console.log(sumaNumbers); //10

//Veamos si el acumulador es 100
const sumArray = numbers.reduce((a, i) => a + i, 100);
//En este caso el acumulador ya tiene un valor de 100
console.log(sumArray); //110


/*
El mismo resultado se obtiene usando for loops
*/
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}

console.log(sum); //10

//Al igual que reduce, si sum valiera 100 (estado inicial)
//Entonces el resultado de sum sería 110