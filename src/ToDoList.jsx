import React, { Component } from 'react';

class ToDoList extends Component {
  print(){
      for ( var i = 0; i < 5; i++) {
          console.log(this.props.array[i],'wooooow')
          };
  }
  render() {
    return (
      this.print()
        )
  }
}

export default ToDoList;
