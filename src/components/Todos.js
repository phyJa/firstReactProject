//Note we wrote Todos.js with a capital T. This is a convention for naming components
import React from 'react';
//Import TodoItem
import TodoItem from './TodoItem';
// Now we will use Prop-Types, a sort of validation of properties. Note that in App.js we pass
// the todos prop for the class Todos. Then we will declare this. Importing it and declaring it
// after the class Todos
import PropTypes from 'prop-types';

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

// Declaring the prop-type
// ClassName.propTypes {
//  property: PropTypes.typeOfPropertyPassedFromAppjs.isRequired 
// }
Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
