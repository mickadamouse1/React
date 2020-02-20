import React, { Component } from 'react';

import './styling/addTodo.css'; // Styling

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '') return
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
        
    }

    onChange = (e) => this.setState({title: e.target.value});

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit} className="form">
                <input type="text" 
                       name="title" 
                       placeholder="Add Task ..."
                       className="txtInput" 
                       value={this.state.title}
                       onChange={this.onChange}
                       />
                <input type="submit"
                       value="Add Task"
                       className="btnInput"
                       />
            </form>
            </div>
        );
    }
}

export default AddTodo;