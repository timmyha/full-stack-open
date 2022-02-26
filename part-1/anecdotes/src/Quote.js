const Quote = ({ text, votesCount }) => {
  return (
    <div className="columns">
      <div className="column is-one-third"></div>
      <div className="column is-one-third has-text-centered">
        <div className="content">
          <blockquote>
            <span className="icon is-small">
              <i className="fas fa-quote-left"></i>
            </span>

            <span>
              <p>
                <em>{text}</em>
              </p>
            </span>

            <span className="icon is-small">
              <i className="fas fa-quote-right"></i>
            </span>

            <span>
              <p>
                <sup>[{votesCount} votes]</sup>
              </p>
            </span>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Quote;
