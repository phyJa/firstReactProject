//Note we wrote Todos.js with a capital T. This is a convention for naming components
import React from 'react';

class Todos extends React.Component {
  //Return your states in html code
  render() {
    console.log(this.props.todos);
    return (
      <h1> Todos </h1>
    );
  }
}

export default Todos;
