import React, { Component } from "react";
import SingleItem from "./SingleItem";

class ToDoList extends Component {
  render() {
    const todoitems = this.props.items;
    const listItems = todoitems.map(item => {
      return (
        <SingleItem
          item={item[0]}
          chiave={item[1]}
          deleteItem={this.props.deleteItem}
        />
      );
    });

    return <ul className="theList">{listItems}</ul>;
  }
}

export default ToDoList;