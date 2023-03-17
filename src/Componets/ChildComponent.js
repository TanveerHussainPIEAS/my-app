import React, { Component } from 'react'

export class ChildComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.greetHandeler('Child-1')}>Call to Parent</button>
      </div>
    )
  }
}

export default ChildComponent