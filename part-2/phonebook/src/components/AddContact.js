const AddContact = (props) => {

return  (
    <div>
        <h3>Add contact:</h3>
        <form onSubmit={props.formSubmit}>
        
        <div>
                <input 
                    type="text"
                    value={props.newName}
                    onChange={props.handleNameChange}
                />
        </div>
  
        <div>
            <input 
                type="text"
                value={props.newNumber}
                onChange={props.handleNumberChange}
            />
        </div>

        <div>
            <button type="submit">add</button>
        </div>
        </form>
    </div>

        )
} 

export default AddContact
