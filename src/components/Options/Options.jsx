const Options = ({ onSmt, onReset }) => {
  return (
    <div>
      <h2>Please leave your feedback</h2>
      <button onClick={() => {
        onSmt('good')
      }}>Good</button>
      <button onClick={() => {
        onSmt('neutral')
      }}>Neutral</button>
      <button onClick={() => {
        onSmt('bad')
      }}>Bad</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
export default Options