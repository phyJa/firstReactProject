import React, { Component } from 'react'
// To deal with prop types:
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    //Verify if a Todo is already done and style it
    verifyAndStyle () {
        //Define a variable which contains the style
        const styling = {
            padding: '10px',
            backgroundColor: '#d2d2d2',
            borderBottom: '3px solid darkblue'
        };
        // Verify and add style
        if(this.props.todo.completed) {
            styling.color = 'green';
            styling.textDecoration = 'line-through';
            return styling; 
        } else {
            styling.color = 'red';
            return styling;
        }
    }

    
    markComplete() {
        console.log(this.props);
    }

    render() {
        return (
            // Inline style with JSX style = {{propertyInCamelCase: 'value'}}
            // Or using variables style = {varName}
            <div style = {this.verifyAndStyle()}>
                <p>
                    <input type="checkbox" onChange={this.markComplete.bind(this)}/> {' '}
                    {this.props.todo.title} 
                </p>  
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
