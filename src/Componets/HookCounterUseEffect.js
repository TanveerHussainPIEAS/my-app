import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@mui/material/TextField'

function HookCounterUseEffect() {
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')

    useEffect(()=>{
        console.log('Updating-Use Effect()')
        document.title=`Clicked ${count} times`

        return ()=>{
            //Write clean up code here. Like remove event listeners, subcribtions etc
            console.log('Unmounting the component.')
        }
    },[count])
    //pass empty array to fire useEffect() only once.
  return (
    <div>
        <h1>Hook Counter using UseEffect</h1>
        <div>
                    <TextField type="text" value={name} onChange={e=>setName( e.target.value)}
                        label="Document Title" variant="outlined"
                    ></TextField >
                </div>
        <Button  variant="contained" color="primary" onClick={()=>setCount(count+1)}>Clicked {count} times </Button>
    </div>
  )
}

export default HookCounterUseEffect