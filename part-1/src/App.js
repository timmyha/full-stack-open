const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, aged {props.age}.</p>
    </div>
  )
}

const App = () => {

  const name = ["Timmy", "Timbo"];
  const age = [32, 32];

  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name[0]} age={age[0]} />
      <Hello name={name[1]} age={age[1]} />
    </>
  )
}
export default App