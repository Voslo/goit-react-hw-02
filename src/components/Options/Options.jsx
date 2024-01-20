const Options = ({ onGood, onNeutral, onBad, onReset }) => {
  return (
    <div>
      <h2>Please leave your feedback</h2>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
export default Options