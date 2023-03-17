import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        parentName:'Parent'
      }
      this.greetParent=this.greetParent.bind(this);
    }

    greetParent(){
        alert(`Hello, I am ${this.state.parentName}`)
    }
  render() {
    return (
      <div><ChildComponent greetHandeler={this.greetParent}></ChildComponent></div>
    )
  }
}

export default ParentComponent