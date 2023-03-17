import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export class ChildComponent extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={() => this.props.greetHandeler('Child-1')}>
                Call to Parent
                </Button>
            </div>
        )
    }
}

export default ChildComponent