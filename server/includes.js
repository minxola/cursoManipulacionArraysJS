const pets = ['cat', 'dog', 'bat'];

//Ver si 'cat' esta dentro del array
const isIn = pets.includes('cat');
console.log('includes: ', isIn); //true

//Esto se puede lograr con un ciclor for
let includeIn = false;
for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if (element === 'dog'){
        includeIn = true;
        break;
    }
}

console.log('for loop: ', includeIn); //true

//Con STRINGS
const str = 'Cats and dogs';

const rta = str.includes('m');
console.log(rta); //false

const rta2 = str.includes('and');
console.log(rta2); //true