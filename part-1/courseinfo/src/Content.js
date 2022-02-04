const Parts = (props) => {
    return (
        <div>
            <table>
                <tr>
                    <td width="200px">{props.parts[0].name}</td> 
                    <td>{props.parts[0].exercises}</td>
                </tr>
                <tr>
                    <td>{props.parts[1].name}</td> 
                    <td>{props.parts[1].exercises}</td>
                </tr>
                <tr>
                    <td>{props.parts[2].name}</td> 
                    <td>{props.parts[2].exercises}</td>
                </tr>
            </table>
        </div>
    )
}

const Content = (props) => {

    return (
        <Parts parts={props.parts} />
    )
}

export default Content;