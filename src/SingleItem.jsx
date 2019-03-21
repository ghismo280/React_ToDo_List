import React, { Component } from "react";

class SingleItem extends Component {
  render() {
    console.log('todolisti',this.props.chiave)
    console.log('itemmmmm',this.props.item)
    const item = this.props.item;
    return <li onClick={() => this.props.deleteItem(this.props.chiave)}>{item}</li>;
  }
}

export default SingleItem;