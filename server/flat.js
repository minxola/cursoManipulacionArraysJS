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

//aplanar hasta 3 nivel de profundidad
const newMat = arr.flat(3);
console.log(newMat); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


//Reto: hacer flat con loops

const myArr = [11, 22, 33, [44, [55, 66, [77, 88], 99]]];

function flatened(array) {
    var flatArray = [];

    flatten(array);

    function flatten(array) {
        for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            flatten(array[i]);
        } else {
            flatArray.push(array[i]);
        }
        }
    }

    return flatArray;
}

console.log(flatened(myArr));

//Otra solución
const a =  [1, [2,3], [4,[5,[6]]]];
const flatten = arr => arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
    );
  flatten(a); // [1, 2, 3, 4, 5, 6]

//Otra forma
var flatenedArray = [];
const flatenMaker = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        if(Array.isArray(e)){
            flatenMaker(e);
        } else {
            flatenedArray.push(e);
        }
    }
    return flatenedArray;
}
console.log(flatenMaker(myArr));