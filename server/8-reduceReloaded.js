const nums = [1, 2, 1, 3, 2, 3, 6, 2];

const count = nums.reduce((obj, num) => {
    if(!obj[num]){
        obj[num] = 1;
    } else{
        obj[num] = obj[num] + 1;
    }
    return obj;
}, {});

console.log(count);

//USANDO REDUCE CON OBJETOS
const data = [
    {
    name: "Nicolas",
    level: "low",
    },
    {
    name: "Andrea",
    level: "medium",
    },
    {
    name: "Zulema",
    level: "hight",
    },
    {
    name: "Santiago",
    level: "low",
    },
    {
    name: "Valentina",
    level: "medium",
    },
    {
    name: "Lucia",
    level: "hight",
    },
];

const levelCount = data.map(item => item.level).reduce((obj, item) =>{
    if(!obj[item]){
        obj[item] = 1;
    } else{
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(levelCount);

//HACIENDO RANGOS CON REDUCE
const arr = [1, 2, 4, 5, 6, 8, 4, 8, 10, 12, 15, 20, 22, 12, 25];

const ranges = arr.reduce((obj, i) => {
    if(i<=10){
        obj['1-10'] += 1;
    }else if(i<=20){
        obj['11-20'] += 1;
    } else{
        obj['21-30'] += 1;
    }
    return obj;
}, {
    '1-10': 0,
    '11-20': 0,
    '21-30': 0
});

console.log(ranges);

// OTRO EJEMPLO DE RANGOS
const n = [];

//Hacemos que el rango n sea aleatorio, también se puede escribir
//directament r = [1, 3, ....]
for (let i = 0; i < 40; i++) {
    n.push(Math.floor(Math.random()*40));
}

//Cración de los rangos
const r = ['0-10', '11-20', '21-30','31-40'];

//Reduciendo el array n a un objeto de rangos.
const ranges = n.reduce((s, j) => {
    if(j <= 10){
        !s[r[0]]
            ? s[r[0]] = 1
            : s[r[0]] += 1;
    } else if (j <= 20){
        !s[r[1]]
            ? s[r[1]] = 1
            : s[r[1]] += 1;
    }else if (j <= 30){
        !s[r[2]]
            ? s[r[2]] = 1
            : s[r[2]] += 1;
    } else {
        !s[r[3]]
            ? s[r[3]] = 1
            : s[r[3]] += 1;
    }
    return s;
}, {});

console.log(n);
console.log(ranges);