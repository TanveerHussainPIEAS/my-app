
import React from 'react'

export default function PersonComponent({person,key}) {
  return (
    <div><h3 key={key}>I am {person.name}. I am {person.age} years old. I know {person.skill}</h3></div>
  )
}
