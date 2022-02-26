const Button = ({ text, style, handleClick }) => {
  return (
    <div className="columns">
      <div className="column is-one-third has-text-centered"></div>
      <div className="column is-one-third has-text-centered">
        <div className="content">
          <button onClick={handleClick} className={style}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
