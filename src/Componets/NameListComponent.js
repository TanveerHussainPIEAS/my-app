
import React, { Component } from 'react'
import PersonComponent from './PersonComponent'

export class NameListComponent extends Component {
    names = ['Hassan Sattar', 'ObaidUllah', 'Umar', 'Daniel Tariq']
    persons=[
        {
            id:1,
            name:'Ali',
            age:22,
            skill:'React 18'
        },
        {
            id:2,
            name:'Hassan',
            age:32,
            skill:'React 16'
        },
        {
            id:3,
            name:'Umar',
            age:24,
            skill:'ROR'
        }
        ,{
            id:4,
            name:'Ahmad',
            age:21,
            skill:'Angular'
        }
    ]
    render() {
        return (
            <div>
                <h1>Names Using map funtion:</h1>
                <div>
                    {
                        this.names.map(name => <h3>{name}</h3>)
                    }
                </div>
                <div>
                    <h1>Persons:</h1>
                    {
                        this.persons.map(person=><PersonComponent key={person.id} person={person}></PersonComponent>)
                    }
                    
                </div>
            </div>
        )
    }
}

export default NameListComponent