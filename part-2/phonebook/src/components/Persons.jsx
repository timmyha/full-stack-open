import React from 'react'

const Persons = ({ filter, persons, handleDeleteNote }) => {
  
  const filtered = 
  filter
  ? persons.filter(person => (
    person.name.toLowerCase().includes(filter.toLowerCase()))
  )
  : persons
  
const entries = filtered.map(person => (
  <p key={person.name}>{person.name}: {person.number}
  <button onClick={() => handleDeleteNote(person.id)}>delete</button>
  </p>
  ))


  return (
    <div>{entries}</div>
  )
}

export default Persons