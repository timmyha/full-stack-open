import Header from "./Header.js";
import Content from "./Content.js";
import Total from "./Total.js";

const App = () => {
  const course = 'Half Stack application development'
  const parts = [["Fundamentals of React", 10],
  ["Using props to pass data", 7],
  ["State of a component", 14]];
  const total = parts[0][1] + parts[1][1] + parts[2][1];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
     <Total coursetotal={total} />

    </div>
  )
}

export default App