import React, { Component } from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Todos from './components/Todos';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {

  state = {
    todos: [
    ]
  }

  // Toggle Complete (Task)
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  // Delete Todo Item
  delTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  // Add Todo Item
  addTodo = (title) => {
    const newTodo = {
      id: this.createID(),
      title: title,
      conpleted: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  // Create Unique ID
  createID = () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const letter1 = letters[Math.floor(Math.random() * letters.length)];
    const letter2 = letters[Math.floor(Math.random() * letters.length)];
    const num = Math.floor(Math.random() * 8999) + 1000;
    return `${letter1}${letter2}${num}`;
  }

  render() {
    return (
      <Router>
        <div className="App">
        <div>
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
      </Router>
    );
  }
  
}

export default App;
