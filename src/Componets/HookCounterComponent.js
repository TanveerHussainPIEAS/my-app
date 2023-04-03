import React, { useState } from 'react'
import Button from '@material-ui/core/Button';

export default function HookCounterComponent() {
    const [count,increaseCount]=useState(0);
  return (
    <div>
        <div>HookCounterComponent</div>
        <div><Button type="submit" variant="contained" color="primary" onClick={()=>increaseCount(count+1)}>Clicked - {count} times </Button></div>
    </div>
  )
}
