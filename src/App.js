import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  //Let's start talking about states
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
  return (
    <div className="App">
      <Todos todos={states.todos} />
    </div>
  );
}

export default App;
