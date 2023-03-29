import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCountComponent extends Component {
  render() {
    const {count,IncreamentClick}=this.props;
    return (
      <h1 onMouseOver={IncreamentClick}>Hovered {count} Times</h1>
    )
  }
}

export default UpdatedComponent(HoverCountComponent)