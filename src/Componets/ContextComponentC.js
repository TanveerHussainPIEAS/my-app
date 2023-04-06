import React from 'react';
import { UserContext, CompanyContext } from '../App';

function ContextComponentC() {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => {
            return (
              <CompanyContext.Consumer>
                {
                  comp => {
                    return (
                      <div>
                        <h1>I am using Context, without Hook</h1>
                        User Context : {user}, Company Context: {comp}
                      </div>
                    )
                  }
                }
              </CompanyContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ContextComponentC;
