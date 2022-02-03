const Parts = (props) => {
  return (
    <div> 
    <p>{props.parts[0][0]}: {props.parts[0][1]}</p>
    <p>{props.parts[1][0]}: {props.parts[1][1]}</p>
    <p>{props.parts[2][0]}: {props.parts[2][1]}</p>

    </div>
  )
}

const Content = (props) => {

  return (
    <Parts parts={props.parts} />
  )
}

export default Content;