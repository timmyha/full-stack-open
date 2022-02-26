const Topquote = ({ anecdotes, allVotes }) => {
  const highestVoteCount = Math.max(...allVotes);
  const topQuoteIndex = allVotes.indexOf(highestVoteCount);
  const topQuote = anecdotes[topQuoteIndex];
  if (highestVoteCount === 0) {
    return (
      <div className="columns">
        <div className="column is-one-third"></div>
        <div className="column is-one-third has-text-centered">
          <div className="content">
            <p>No votes yet</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="columns">
      <div className="column is-one-third"></div>
      <div className="column is-one-third has-text-centered">
        <div className="content">
          <p className="title is-5 is-uppercase">Top-rated anecdote</p>
          <blockquote>
            <span className="icon is-small">
              <i className="fas fa-quote-left"></i>
            </span>

            <span>
              <p>
                <em>{topQuote}</em>
              </p>
            </span>

            <span className="icon is-small">
              <i className="fas fa-quote-right"></i>
            </span>

            <span>
              <p>
                <sup>[{highestVoteCount} votes]</sup>
              </p>
            </span>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Topquote;
