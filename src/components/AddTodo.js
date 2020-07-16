import React from 'react'

export default class AddTodo extends React.Component {
    render() {
        return(
        <div style={{background: "lightblue", padding: "10px"}}>
            <form style={{display: "flex", margin: "15px 0"}}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Add a todo here..."
                    style={{flex: "10", padding: "5px"}}
                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: "1"}}
                />
            </form>
        </div>
        );
    }
}
