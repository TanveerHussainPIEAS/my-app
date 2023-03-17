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

    greetParent(childName){
        alert(`Hello, I am ${this.state.parentName}, call from ${childName}`)
    }
  render() {
    return (
      <div><ChildComponent greetHandeler={this.greetParent}></ChildComponent></div>
    )
  }
}

export default ParentComponent