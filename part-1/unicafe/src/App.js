import React, { useState } from 'react';
import Button from './Button.js';
import Statistics from './Statistics.js';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header';


const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0
  })
  const goodClick = () => setClicks({ ...clicks, good: clicks.good + 1 });
  const neutralClick = () => setClicks({ ...clicks, neutral: clicks.neutral + 1 });
  const badClick = () => setClicks({ ...clicks, bad: clicks.bad + 1 });

  return (
    <div>
      <Header name="Customer Feedback" />
      <Button style="btn btn-outline-success" onClick={goodClick} text="Good" />
      <Button style="btn btn-outline-warning" onClick={neutralClick} text="Neutral" />
      <Button style="btn btn-outline-danger" onClick={badClick} text="Bad" />
      <Header name="Statistics" />
      <Statistics clicks={clicks} />

    </div>
  )
}

export default App;