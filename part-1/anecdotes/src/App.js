import React, { useState } from "react";
import Header from "./Header.js";
import Quote from "./Quote.js";
import Button from "./Button.js";
import Topquote from "./Topquote.js";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
    "ugggggggggh",
    "another quote!",
  ];

  const [selected, setSelected] = useState(0);
  const [allVotes, setAllVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVoteClick = () => {
    const newAllVotes = [...allVotes];
    newAllVotes[selected] += 1;
    setAllVotes(newAllVotes);
  };

  const handleSelectedClick = () => {
    const arrayIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(arrayIndex);
  };

  return (
    <>
      <Header />
      <Quote text={anecdotes[selected]} votesCount={allVotes[selected]} />
      <Button
        handleClick={handleVoteClick}
        style="button is-primary"
        text="Vote"
      />
      <Button
        handleClick={handleSelectedClick}
        style="button"
        text="Next Anecdote"
      />
      <Topquote anecdotes={anecdotes} allVotes={allVotes} />
    </>
  );
};

export default App;
