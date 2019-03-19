import React, { Component } from 'react';
import SingleItem from './SingleItem'

class ToDoList extends Component {
  render(){
    const todoitems = this.props.items;
    const listItems = todoitems.map((item) => {
      return <SingleItem key={item.key} item={item} deleteItem={this.props.deleteItem} />
    });

    return <ul className="theList">{listItems}</ul>
  }
}

export default ToDoList;



    