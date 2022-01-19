const users = [
    {userID: 1, username: 'Tom', attributes: ['Nice', 'Cute']},
    {userID: 2, username: 'Mike', attributes: ['Lovely']},
    {userID: 3, username: 'Niko', attributes: ['Nice', 'Cool']},
];

const rta = users.flatMap(user => user.attributes);
console.log(rta); //[ 'Nice', 'Cute', 'Lovely', 'Nice', 'Cool' ]

//Trabajando con objetos
//RETO: Obtener solo startDate
const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
        ],
        secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

//Obtener array con los valores. Object.keys(calendars) se obtendría
//un array de claves (keys)
const x = Object.values(calendars);
console.log(x); //IMprimre un array de valores, al cual podemos aplicar flatMap()


const newArr = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
});
console.log(newArr);
/*
[
  2021-02-01T20:00:00.000Z,
  2021-02-01T22:00:00.000Z,
  2021-02-01T17:00:00.000Z,
  2021-02-01T14:00:00.000Z
]
*/
