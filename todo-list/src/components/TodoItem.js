import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styling/todoItem.css'; // Styling

class TodoItem extends Component {

    getStyle = () => {
        return {
            width: '95%',
            height: '.4rem',
            background: 'crimson',
            border: 'none',
            position: 'absolute',
            top: '1.35rem',
            left: '1.5rem',
            display: this.props.todo.completed ? 'block' : 'none'
        }
    }

    render() {

        const {id, title} = this.props.todo;

        return (
            <div className="todoItem">
                
                <h1 className="todoName">
                    <input className="btnRadio" type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    { title }
                    <hr style={this.getStyle()}/>
                </h1>
                <button className="btnDeleteItem" onClick={this.props.delTodo.bind(this, id)}>X</button>
            </div>
      );
    }
  
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default TodoItem;