import { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import axios from 'axios'
import phonebook from './src/phonebook'

const App = () => {
  const [filter, setFilter] = useState('')
  const [persons, setPersons] = useState([])
  const [formData, setFormData] = useState({ name: '', number: '' })

  const initialForm = { name: '', number: '' }

  useEffect(() => {
    phonebook
      .getAll()
      .then(res => setPersons(res.data))
  }, [])

  const { name, number } = formData

  const handleFormChange = (e) => {
    const { id, value } = e.target

    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === name)) {
      if (window.confirm(`${name} already in phonebook, update the number?`)) {
        const existingPerson = persons.filter(person => person.name === name)[0]
        phonebook
          .update(existingPerson.id, formData)
          .then(res => {
            phonebook
              .getAll()
              .then(res => {
                setPersons(res.data)
                toast.success('${name} successfully updated!')
                setFormData(initialForm)
              })
          }).catch(err => toast.error(`${name} no longer exists on server`))
      } else {
        setFormData(initialForm)
      }
      setFormData(initialForm)
    } else {
      phonebook
        .create(formData)
        .then(res => {
          setPersons(prev => [...prev, res.data])
          toast.success(`${name} added to phonebook`)
          setFormData(initialForm)
        })
    }
  }

  const handleDeleteNote = (id) => {
    phonebook
      .remove(id)
      .then(res => {
        phonebook
          .getAll()
          .then(res => setPersons(res.data))
      })
  }

  return (
    <div>
      <Toaster />
      <h1>Phonebook</h1>
      <Filter
        setFilter={setFilter}
        filter={filter}
      />
      <h2>add new</h2>
      <Form
        name={name}
        number={number}
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
      />
      <h2>Numbers</h2>
      <Persons
        filter={filter}
        persons={persons}
        handleDeleteNote={handleDeleteNote}
      />
    </div>
  )
}

export default App