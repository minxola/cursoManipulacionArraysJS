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