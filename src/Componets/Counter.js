import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    IncreaseValue(){
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log('Value in callback function', this.state.count)
        })
        console.log('Async time value', this.state.count)
    }
    DecreaseValue(){
        this.setState({
            count:this.state.count-1
        },
        ()=>{
            console.log('Value in callback function', this.state.count)
        })
        console.log('Async time value', this.state.count)
    }
  render() {
    return (
      <div>
      <div>Counter - {this.state.count}</div>
      <div><button onClick={()=>this.IncreaseValue()}>Increment</button></div>
      <div><button onClick={()=>this.DecreaseValue()}>Decrement</button></div>
      </div>
    )
  }
}

export default Counter