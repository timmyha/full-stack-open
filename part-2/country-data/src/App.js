import axios from 'axios'
import {useEffect, useState} from 'react'
import Results from './components/Results'
import Card from './components/Card'

function App() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        setData(response.data)
        })
    }, [])
    
    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    const filtered = filter ?
    	data.filter(data => data.name.toLowerCase()
                                .includes(filter)) : data

    const displayCountryNames = filtered.map(data => (
        <p key={data.name}>{data.name} 
            <button className="show-button" onClick={() => setFilter(data.name.toLowerCase())}>
                show
            </button>
        </p>))


  	return (

    	<div className="App">
            
      		<h1>Country Data</h1>

            <input
                className="search-bar"
                onChange={handleFilter}
            />

            <Results
                filtered={filtered}
                displayCountryNames={displayCountryNames}
            />

            { filtered.length === 1 && 
                <Card 
                    country={filtered[0]}
                /> 

                
            }

    	</div>
  	);
}
export default App;
