import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    return (
      <div>PureComponent</div>
    )
  }
}
//rpce
// It will not be re-rendered if the changes in probs are same. Probs: name:'Tanveer' and again it's updated to name:'Tanveer'
export default PureComp