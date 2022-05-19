import React from 'react'

const Form = ( { name, number, handleFormChange, handleFormSubmit }) => {
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input
            id="name"
            onChange={handleFormChange}
            value={name}
            />
        </div>
        <div>
          <label htmlFor="number">number:</label>
          <input
            id="number"
            onChange={handleFormChange}
            value={number}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form