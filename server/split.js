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