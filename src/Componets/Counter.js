import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  IncreaseValue() {
    this.setState({
      count: this.state.count + 1
    },
      () => {
        console.log('Value in callback function', this.state.count)
      })
    console.log('Async time value', this.state.count)
  }
  DecreaseValue() {
    this.setState({
      count: this.state.count - 1
    },
      () => {
        console.log('Value in callback function', this.state.count)
      })
    console.log('Async time value', this.state.count)
  }
  render() {
    return (
      <div>
        <div>Counter - {this.state.count}</div>
        <div>
          <Button variant="contained" color="primary" onClick={() => this.IncreaseValue()}>Increment </Button>
        </div>

        <div>
          <Button variant="contained" color="primary" onClick={() => this.DecreaseValue()}>Decrement </Button>
        </div>
      </div>
    )
  }
}

export default Counter