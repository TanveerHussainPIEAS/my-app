
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import UpdatedComponent from './withCounter'

export class ClickCountComponent extends Component {
  render() {
    const {count, IncreamentClick}=this.props;
    return (
      <div>
        <Button variant="contained" color="secondary" onClick={IncreamentClick}>Clicked {count} times </Button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCountComponent)