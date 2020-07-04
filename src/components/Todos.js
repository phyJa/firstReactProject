//Note we wrote Todos.js with a capital T. This is a convention for naming components
import React from 'react';
//Import TodoItem
import TodoItem from './TodoItem'

class Todos extends React.Component {
  //Return your states in html code
  render() {
    return (
      //Pass each todo Object to <TodoItem />
      //Define the key prop to get rid of the error (be sure that it is unique for each value)
      this.props.todos.map( (todo) => (<TodoItem key={todo.id} todo={todo} />) )
    );
  }
}

export default Todos;
