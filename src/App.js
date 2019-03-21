import React, {
  Component
} from 'react';
import './App.css';
import TaskBar from './TaskBar'
import ToDoList from './ToDoList'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      value: '',
      key: ''
    };

    this.addElement = this.addElement.bind(this);
    this.setInput = this.setInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  setInput(event) {
    this.setState({
      value: event.target.value,
      key: Date.now()
    });
  }

  addElement(event) {
    event.preventDefault();
    const array = this.state.items;
    array.push([this.state.value, this.state.key]);
    this.setState({
      items: array
    });
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => {
      return item[1] !== key
    });
    this.setState({
      items: filteredItems
    });
  }

  render() {
    return ( 
      <div className = "App" >
      <TaskBar addElement = {
        this.addElement
      }
      setInput = {
        this.setInput
      }
      value = {
        this.state.value
      }
      />
      <ToDoList items = {
        this.state.items
      }
      deleteItem = {
        this.deleteItem
      }
      /> 
      </div>
    );
  }
}

export default App;