const Search = (props) => {

return (

    <>
        <h3>Search:</h3>

        <input 
            type="text"
            value={props.value}
            onChange={props.onChange}
        />
    </>

    )
}

export default Search