//Note we wrote Todos.js with a capital T. This is a convention for naming components
import React from 'react';

class Todos extends React.Component {
  //Return your states in html code
  render() {
    return (
      this.props.todos.map( (todo) => (<h3>{todo.title}</h3>) )
    );
  }
}

export default Todos;
