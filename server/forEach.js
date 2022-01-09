const names = ["Rem", "Peter", "Tim"];

/*
Usando ciclo for (for loop)
*/
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log('for loop', element);
}

//El resultado usando for sería
//for loop Rem
//for loop Peter
//for loop Tim

/*
Usando forEach en una sola línea
*/
names.forEach(item => console.log('forEach Method', item));

//El resultado usando forEach() sería
//forEach Method Rem
//forEach Method Peter
//forEach Method Tim