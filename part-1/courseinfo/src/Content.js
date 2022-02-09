const Parts = (props) => {
    return (
        <div className={"col-2 bg-warning"}>
            <table>
                <tbody>
                    <tr>
                        <td width="200px">{props.course.parts[0].name}</td>
                        <td>{props.course.parts[0].exercises}</td>
                    </tr>
                    <tr>
                        <td>{props.course.parts[1].name}</td>
                        <td>{props.course.parts[1].exercises}</td>
                    </tr>
                    <tr>
                        <td>{props.course.parts[2].name}</td>
                        <td>{props.course.parts[2].exercises}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Content = (props) => {
    console.log(props);
    return (
        <Parts course={props.course} />
    )
}


export default Content;