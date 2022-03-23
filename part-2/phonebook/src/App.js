import { useState, useEffect } from 'react'
import Entry from './components/Entry'
import Search from './components/Search'
import AddContact from './components/AddContact'
import './style.css'
import noteService from './services/notes'
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  	const [persons, setPersons] = useState([]) ;
 	const [newName, setNewName] = useState('name:');
  	const [newNumber, setNewNumber] = useState('number:');
  	const [filter, setFilter] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        noteService
            .getAll()
            .then(phonebook => {
            setPersons(phonebook)
    })
            .catch(e => console.log(e));
  	}, [newNumber])

    let formSubmit = (event) => {
        event.preventDefault()
    const newEntry = 
        {"name": newName,
        "number": newNumber}

    persons.find(i => i.name === newName) ? 
     toast.error(`${newName} already added ): try editing their number instead.`,
        {duration: 5000}) :
      setPersons([
          	...persons,
          	newEntry
    	],
        noteService
        .create(newEntry)
        .then(
            toast.success(`${newName} successfully added to phonebook`),
            setNewName('name'),
            setNewNumber('number'),
            ))
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
   		return  <Entry key={person.name}
                    name={person.name}
                    number={person.number}
                    setPersons={setPersons}
                    id={person.id}
                    persons={persons}
                    person={person}
                    setNewNumber={setNewNumber}
                    setNewName={setNewName}
                />
                })

	return (
    	<div className={darkMode ? "phonebook-dark" : "phonebook"}>
            <Toaster />
      		<h1>Phonebook</h1> <button onClick={() => setDarkMode(!darkMode)}>🌚🌝</button>

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

      		<h2 className="numbers">Numbers</h2>
      			{displayAll}
      	</div>
  	)
}

export default App