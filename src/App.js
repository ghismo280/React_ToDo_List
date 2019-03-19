import React, { Component } from 'react';
import './App.css';
import TaskBar from './TaskBar'
import ToDoList from './ToDoList'
import SingleItem from './SingleItem'

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
    console.log('click eccolo');
    const array = this.state.items;
    array.push(this.state.value);
    this.setState({items: array});
    console.log('addElement',array);
  }

  render() {
    return (
      <div className="App">
        <TaskBar addElement={this.addElement} setInput={this.setInput} value={this.state.value}/>
        <ToDoList items={this.state.items}/>
      </div>
    );
  }
}

export default App;
