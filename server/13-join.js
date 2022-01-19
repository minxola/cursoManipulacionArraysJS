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