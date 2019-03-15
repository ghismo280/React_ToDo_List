import React, { Component } from 'react';
import './App.css';
import TaskBar from './TaskBar'
import ToDoList from './ToDoList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: [], value: '',};

    this.addElement = this.addElement.bind(this);
    this.setInput = this.setInput.bind(this);
  }

  setInput(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  addElement(event) {
    event.preventDefault();
    console.log('eccolo');
    const array = this.state.items;
    array.push(this.state.value);
    this.setState({items: array});
    console.log(array);
  }

  render() {
    return (
      <div className="App">
        <TaskBar addElement={this.addElement} setInput={this.setInput} value={this.state.value}/>
        <ToDoList array={this.items}/>
      </div>
    );
  }
}

export default App;
