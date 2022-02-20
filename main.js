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
        iscompleted: false
    }
];

// foreach, map, filter


const todoiscompleted = todos.filter(function(todo){
    return todo.iscompleted === true;
}).map(function(todo){
    return todo.text;
}) 
console.log(todoiscompleted);