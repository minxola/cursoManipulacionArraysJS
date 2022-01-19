const arr = [1, 2, 3, 4, 5, 6];

//Saber si hay numeros pares
const r = arr.some(item => item % 2 === 0);
console.log('Some: ', r); //Some: true

//Saber si hay pares con condicionales
let rta = false; //suponemos que no hay

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 === 0){
        rta = true;
        break;
    }
}

console.log('Loop: ', rta); //Loop: true

//Trabajando con objetos
const orders = [
    {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
    },
    {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    },
    {
    customerName: "Santiago",
    total: 180,
    delivered: true,
    },
    {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    },
    {
    customerName: "Nicolas",
    total: 2322,
    delivered: false,
    },
];

//Ver si al menos una orden fue entregada
const entregado = orders.some(orden => orden.delivered);
console.log(entregado); //true

//TRABAJANDO CON FECHAS USANDO DATE-FNS
const dates = [
    {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
    },
    {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: "Cita con mi jefe",
    },
    {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};

//incluir la librería
//Previamente se debió instalar desde la consola usando
//>>>npm install date-fns
var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date =>{
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
        )
    });
}

console.log('isOverlap: ', isOverlap(newAppointment));
