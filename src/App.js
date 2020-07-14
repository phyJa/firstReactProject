import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
  //Define your states
  constructor(props) {
    super(props);
    this.state = {
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
  }
  
  //Climbing the latter: define markComplete as a function and pass it like a prop
  // This id is passed through the bind() function in TodoItem.js
  markComplete = (id) => {
    //setState() is a React Predefined function
    this.setState(
      {
        todos:  this.state.todos.map(
          todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed
            } 
            return todo;
          }
        )
      }
    );
  }
  //Define another function to delete a Todo
  delTodo = (id) => {
    this.setState( {todos: this.state.todos.filter( todo => todo.id !== id )} )
  }

  //Then we pass them to Todos.js as a property
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  };
}

export default App;
