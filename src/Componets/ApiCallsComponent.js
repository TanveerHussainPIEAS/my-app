import React, { Component } from 'react'
import axios from 'axios'

class ApiCallsComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         length:0
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log('Res',res.data)
            this.setState({
                length:res.data.length
            })
        })
        .catch(err=>{
            console.log('Error', err)
        })
    }
  render() {
    return (
      <div>ApiCallsComponent- Response Length : {this.state.length}</div>
    )
  }
}

export default ApiCallsComponent