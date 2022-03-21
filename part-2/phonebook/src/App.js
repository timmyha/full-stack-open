import { useState, useEffect } from 'react'
import Entry from './components/Entry'
import Search from './components/Search'
import AddContact from './components/AddContact'
import axios from 'axios'

const App = () => {
  	const [persons, setPersons] = useState([]) ;
 	const [newName, setNewName] = useState('');
  	const [newNumber, setNewNumber] = useState('');
  	const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      	.get('http://localhost:3001/persons')
      	.then(response => {
      	setPersons(response.data)
    	})
  	}, [])

  let formSubmit = (event) => {
    event.preventDefault()
    persons.find(i => i.name === newName) ? 
      alert(`${newName} already exists.`) :
      setPersons([
          	...persons,
          	{"name": newName,
          	"number": newNumber}
    	])
  	}

  let handleNameChange = (event) => {
    	setNewName(event.target.value)
  	}

  	let handleNumberChange = (event) => {
    	setNewNumber(event.target.value)
  	}

  	let handleFilterChange = (event) => {
    	setFilter(event.target.value)
  	}

  	const filteredPersons = filter ?
    	persons.filter(person => person.name.toLowerCase()
                                .includes(filter)) : persons

  	const displayAll = filteredPersons.map((person) => {
   		return <Entry key={person.name}
                  name={person.name}
                  number={person.number}
                />
                })

	return (
    	<div>
      		<h2>Phonebook</h2>

      		<Search 
          		value={filter}
          		onChange={handleFilterChange}
      		/>

      		<AddContact 
          		formSubmit={formSubmit}
          		newName={newName}
          		handleNameChange={handleNameChange}
          		handleNumberChange={handleNumberChange}
          		newNumber={newNumber}
      		/>

      		<h2>Numbers</h2>
      			{displayAll}
      	</div>
  	)
}

export default App