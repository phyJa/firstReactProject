import React, { Component } from 'react'
// To deal with prop types:
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    render() {
        return (
            <div>
              <p> {this.props.todo.title} </p>  
            </div>
        )
    }
}

//PropType from Todos.js
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
