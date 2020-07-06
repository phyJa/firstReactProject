import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  //Define your states
  states = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with friends',
        completed: true
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  };
  //Climbing the latter: define markComplete as a function and pass it like a prop
  markComplete = () => console.log("App.js");
  //Then we pass them to Todos.js as a property
  render() {
    return (
      <div className="App">
        <Todos todos={this.states.todos} markComplete={this.markComplete} />
      </div>
    );
  };
}

export default App;
