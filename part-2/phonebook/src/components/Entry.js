import notes from '../services/notes';
import noteService from '../services/notes'

const Entry = ( props ) => {

    const handleDelete = () => {
        if (window.confirm("delete person?")) {
        noteService
            .deleteEntry(props.id)
            .then(props.setPersons(props.persons.filter(i => i.id !== props.id)))
            .catch(error => {
                console.log('fail')
                })
        }
    }

    const handleUpdate = () => {
        let obj = {
            name: props.name,
            number: prompt('new number?'),
            id: props.id
        }
        noteService
        .update(props.id, obj)
        .then(updatedContact => {
            props.setPersons(props.persons.filter(i => i.id !== props.id).concat(updatedContact))
            props.setNewName('name')
            props.setNewNumber('number')})
        .catch(error => {
            console.log('fail')
            })
        }

    return (
        <div>
            <p><b className="entry-name"><span onClick={handleDelete} className="delete-button">&nbsp;delete </span><span onClick={handleUpdate} className="edit-button">&nbsp;edit </span>&nbsp;{props.name}</b> 
            <i> {props.number}</i></p>
        </div>
    )
}
export default Entry