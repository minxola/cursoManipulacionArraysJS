const letters = ["Rem", "Peter", "Tim"];

//Usando ciclo for (for loop)
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('For loop', element);
}

//Usando forEach en una sola línea
letters.forEach(i => console.log('forEach Method', i));