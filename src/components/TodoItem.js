import React, { Component } from 'react'
// To deal with prop types:
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //Verify if a Todo is already done and style it
    verify () {
        if(this.props.todo.completed) {
           const completed = {
               color: 'green',
               textDecoration: 'line-through'
           }
            return completed; 
        } else {
            const notCompleted = {
                color: 'tomato',
                textDecoration: 'none'
            }
            return notCompleted;
        }
    }
    

    render() {
        return (
            // Inline style with JSX style = {{propertyInCamelCase: 'value'}}
            // Or using variables style = {varName}
            <div style = {this.verify()}>
              <p> {this.props.todo.title} </p>  
            </div>
        )
    }
}

//Variable for color and other styles. Note that it must be an object
// const styling = {
//     backgroundColor: 'tomato',
//     textAlign: 'center',
//     fontSize: 20
// };

//PropType from Todos.js
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
