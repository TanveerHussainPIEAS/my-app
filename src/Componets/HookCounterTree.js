import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@material-ui/core/Button';

function HookCounterTree() {
    const [name, setName]=useState({firstName: '', lastName:''})
    const [items,setItems]= useState([])

    const addItem=()=>{
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10+1)
        }])
    }
    return (
        <div>
            <h1>React Hooks with Object</h1>
            <form>
                <div>
                    <TextField type="text" value={name.firstName} onChange={e=>setName({...name,firstName: e.target.value})}
                        label="First Name" variant="outlined"
                    ></TextField >
                </div>
                <div>
                    <TextField type="text" value={name.lastName} onChange={e=>setName({...name,lastName: e.target.value})}
                        label="Last Name" variant="outlined"
                    ></TextField >
                </div>
                <div>
                    {JSON.stringify(name)}
                </div>
                <div>
                    <h1>Modify array in a state</h1>
                </div>
                <div>
                <Button  variant="contained" color="primary" onClick={()=>addItem()}>Add Item </Button>
                </div>
                <div>
                    <ol>
                        {items.map(item=> <li key={item.id}>{item.value}</li>)}
                    </ol>
                </div>
            </form>
        </div>
    )
}

export default HookCounterTree