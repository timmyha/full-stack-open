const Results = ({ filtered, displayCountryNames }) => {
    return (
        <>
        { filtered.length === 250 ? <p>Please enter the common name of a country</p> :
              filtered.length > 10 ? <p>Too many results. Please be more specific.</p> :
              filtered.length === 1 ? <p></p> :
              displayCountryNames }
        </>
    )
}

export default Results