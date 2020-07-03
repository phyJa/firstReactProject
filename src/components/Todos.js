//Note we wrote Todos.js with a capital T. This is a convention for naming components
import React from 'react';

//Define your states
let states = {
  todos: [
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Dinner with friends',
      completed: false
    },
    {
      id: 3,
      title: 'Meeting with boss',
      completed: false
    }
  ]
};

function Todos() {
  //Return your states in html code
  return (
    states.todos.map((todo) => (<h3 id={todo.title}>{todo.title}</h3>))
  );
}

export default Todos;
