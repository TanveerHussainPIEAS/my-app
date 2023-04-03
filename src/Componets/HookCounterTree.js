import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { json } from 'react-router-dom';

function HookCounterTree() {
    const [name, setName]=useState({firstName: '', lastName:''})
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
            </form>
        </div>
    )
}

export default HookCounterTree