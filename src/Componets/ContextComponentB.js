import React, {useContext} from 'react'
import ContextComponentC from './ContextComponentC'
import { UserContext, CompanyContext } from '../App';

function ContextComponentB() {
    const user= useContext(UserContext)
    const comp= useContext(CompanyContext)
  return (
    <div>
        <ContextComponentC></ContextComponentC>
        <h1>***** I am Using Context Hook****</h1>
        <h2>User - {user}, Company - {comp}</h2>
    </div>
  )
}

export default ContextComponentB