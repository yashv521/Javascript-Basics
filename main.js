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
todos.forEach(function(todo) {
    console.log(todo.text);
    });


const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

const todoiscompleted = todos.filter(function(todo){
    return todo.iscompleted === true;
}) ; 
console.log(todoiscompleted);