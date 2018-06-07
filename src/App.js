import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        id: 1,
        text: 'Task number'
      }]
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TO DO App</h1>
        </header>
        <div className="Buttons">
          <button className="Buttons-add">Add</button>
          <button className="Buttons-remove">Remove</button>
          <button className="Buttons-clear">Clear</button>
        </div>
        <TodoList
          list={this.state.data}
        />

      </div>
    );
  }
}

export default App;
