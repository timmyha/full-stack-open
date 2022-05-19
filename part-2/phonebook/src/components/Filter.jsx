import React from 'react'

const Filter = ( { setFilter, filter }) => {
  return (
    <div>
      <input 
        id="filter"
        onChange={(e) => setFilter(e.target.value)}
        style={{"textTransform":"lowercase"}}
        value={filter}
      />
    </div>
  )
}

export default Filter