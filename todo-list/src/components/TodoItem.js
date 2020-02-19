import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
            display: this.props.todo. completed ? 'block' : 'none'
        }
    }

    render() {

        const {id, title} = this.props.todo;

        return (
            <div className="todoItem" style={todoStyle}>
                
                <h1 style={titleStyle}>
                    <input style={radioStyle} type="checkbox" onChange={this.props.markComplete.bind(this, id)} />
                    { title }
                    <hr style={this.getStyle()}/>
                </h1>
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
            </div>
      );
    }
  
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
}

const radioStyle = {
    marginRight: '1rem',
    padding: '0 0 2rem 0'
}

const btnStyle = {
    background: 'crimson',
    color: 'white',
    border: 'none',
    padding: '.5rem 1rem',
    borderRadius: '.35rem',
    cursor: 'pointer',
    fontSize: '1.1rem'
}

const todoStyle = {
    background: '#f4f4f4',
    padding: '1rem',
    borderBottom: '.1rem #ccc dotted',
    display: 'flex',
    justifyContent: 'space-between',
}

export default TodoItem;