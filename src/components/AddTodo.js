import React from 'react'

export default class AddTodo extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return(
        <div style={{background: "lightblue", padding: "10px"}}>
            <form style={{display: "flex", margin: "15px 0"}}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Add a todo here..."
                    style={{flex: "10", padding: "5px"}}
                    value={this.state.title}
                    onChange={this.onChange}
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
