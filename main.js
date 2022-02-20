const todos =[
    {
        id: 1,
        text: 'Take out Trash',
        iscompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        iscompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        iscompleted: true
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
//for
for(let i = 0;i<=10;i++){
    console.log(`for Loop Number: ${i}`);
}

//while
let i=0;
while(i<10){
    console.log(`While Loop Number: ${i}`);
    i++;
}
