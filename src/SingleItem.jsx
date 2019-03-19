import React, { Component } from 'react';

class SingleItem extends Component {
  render() {
    return(
      <li>{this.props.item}</li>
    );
  }
}

export default SingleItem;
