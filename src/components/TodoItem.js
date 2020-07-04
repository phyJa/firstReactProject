import React, { Component } from 'react'
// To deal with prop types:
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            // Inline style with JSX style = {{propertyInCamelCase: 'value'}}
            // Or using variables style = {varName}
            <div style = {styling}>
              <p> {this.props.todo.title} </p>  
            </div>
        )
    }
}

//Variable for color and other styles. Note that it must be an object
const styling = {
    backgroundColor: 'tomato',
    textAlign: 'center',
    fontSize: 20
};

//PropType from Todos.js
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
