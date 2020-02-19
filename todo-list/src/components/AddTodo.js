import React, { Component } from 'react';

export class AddTodo extends Component {
    render() {
        return(
            <div>
                <form style={{display: 'flex'}}>
                <input 
                    type="text"
                    name="title" 
                    style={{flex:'10', padding: '.5rem'}}
                    placeholder="Add Todo"
                />
                <input 
                    type="button"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form>
            </div>
        );
    }
}

export default AddTodo;