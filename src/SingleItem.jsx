import React, { Component } from "react";

class SingleItem extends Component {
  render() {
    const item = this.props.item;
    return <li onClick={() => this.props.deleteItem(this.props.chiave)}>{item}</li>;
  }
}

export default SingleItem;