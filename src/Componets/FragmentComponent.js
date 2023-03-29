import React from 'react'

function FragmentComponent() {
  return (
    <React.Fragment>
        <h1>Fragment Demo Component</h1>
        <p>Para Desc here</p>
    </React.Fragment>
    // </React.Fragment> is used to avoid(div that returns JSX of any component) extra node in the app.
    //</React.Fragment>  can be replaced by empty opening and closing tags.
  )
}

export default FragmentComponent