import {useEffect, useState} from 'react'
import axios from 'axios'
const Card = ({country, filter}) => {

    const [weather, setWeather] = useState()

    // useEffect(() => {
    //     let lat = `lat=${country.latlng[0]}`
    //     let lng = `lon=${country.latlng[1]}`
    //     axios
    //   .get(`https://api.met.no/weatherapi/locationforecast/2.0/compact.json?${lat}&${lng}`)
    //   .then(response => {
    //     setWeather(response.data)
    //   })
    // }, [])

    // useEffect(()=> {
    //     setTimeout(function(){
    //     console.log(weather.properties.timeseries[0].data.instant.details.air_temperature)
    //     }, 5000)

    // }, [])

    useEffect(() => {
        const baseUrl = "http://api.weatherstack.com/current";
        const key = `a75e8bd29c0850eb7a6bdd396c74e4f3`;
        const capital = country.capital;
            axios
              .get(`${baseUrl}?access_key=${key}&query=${capital}`)
              .then(response => {
                setWeather(response.data);
              });
          }, [filter]);

         weather && console.log(weather.current.temperature)

    return (

        <div className="card">
            <h1>{country.name}</h1>
            <img width="200px" src={country.flag} />
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Total Land Area:</b> {country.area} km&#178;</p>
            <p><b>Population:</b> {country.population.toLocaleString('en-US')}</p>
            <b>Official Language(s):</b> 
                <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}</ul>

            <h3>Weather in {country.capital}</h3>
               <p>Temperature: { weather && weather.current.temperature}</p>
        </div>

    )
}

export default Card