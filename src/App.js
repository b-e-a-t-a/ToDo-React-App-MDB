import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList.js';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
      }]
    };
  }
  handleClick() {
    const todo = {
      text: 'Task number ',
      id: this.state.data.length,
    };
    const data = [...this.state.data, todo];
    this.setState({
      data,
    })
  }

  handleRemove() {

  }

  handleClear() {
    this.setState({
      data: [{}],
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TO DO App</h1>
        </header>
        <div className="Buttons">
          <button 
            className="Buttons-add"
            onClick={this.handleClick.bind(this)}>
          Add</button>
          <button
            className="Buttons-remove"
            onClick={this.handleRemove.bind(this)}>
          Remove</button>
          <button className="Buttons-clear"
            onClick={this.handleClear.bind(this)}>
          Clear</button>
        </div>
        <TodoList
          list={this.state.data}
        />

      </div>
    );
  }
}

export default App;
