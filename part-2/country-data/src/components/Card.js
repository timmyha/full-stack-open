import {useEffect, useState} from 'react'
import axios from 'axios'
const Card = ({country, filter}) => {

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        const url = "http://api.weatherapi.com/v1/current.json";
        const key = process.env.REACT_APP_API_KEY
        const capital = country.capital;
            axios
              .get(`${url}?key=${key}&q=${capital}&aqi=no`)
              .then(response => {
                setWeather(response.data);
              });
          }, [filter])

    return (

        <div className="card">
            <h1>{country.name}</h1>
            <img width="200px" src={country.flag} />
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Total Land Area:</b> {country.area.toLocaleString('en-US')} km&#178;</p>
            <p><b>Population:</b> {country.population.toLocaleString('en-US')}</p>
            <b>Official Language(s):</b> 
                <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>

             <h3>Weather in {country.capital}</h3>
               <p><img src={ weather && weather.current.condition.icon } /></p>
               <p>Temperature: { weather && weather.current.temp_c }&deg;C</p>
               <p>Wind Speed: { weather && weather.current.wind_kph } Km/h</p> 
        </div>
    )
}

export default Card