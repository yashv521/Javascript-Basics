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
for(let todo of todos){
    console.log(todo.id);
}



