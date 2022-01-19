const letters = ['a', 'b', 'c', 'd'];

//HACIENDO USO DEL METODO MAP()
const letters2 = letters.map(item => item + '_x');

console.log('Original', letters);
//Original [ 'a', 'b', 'c', 'd' ]
console.log('Map Array', letters2);
//Map Array [ 'a_x', 'b_x', 'c_x', 'd_x' ]



//HACIENDO USO DE FOR LOOP
const newArray = [];

for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    newArray.push(letter + '_x');
}

console.log('Original', letters);
//Original [ 'a', 'b', 'c', 'd' ]
console.log('ForLoop Array', newArray);
//ForLoop Array [ 'a_x', 'b_x', 'c_x', 'd_x' ]
