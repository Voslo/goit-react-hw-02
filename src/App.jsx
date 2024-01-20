import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { Notification } from './components/Notification/Notification';

const App = () => {
  const initFeedback=JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 }
  const [feedback, setFeedback] = useState(initFeedback);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)

  useEffect(() => {
    localStorage.setItem('feedback',JSON.stringify(feedback))
  },[feedback])
  return (
    <>
      <Description/>
      <Options
        onGood={() =>
          setFeedback({ 
          ...feedback, 
          good: feedback.good + 1 
        })}
        onNeutral={() => setFeedback({ 
          ...feedback, 
          neutral: feedback.neutral + 1 
        })}
        onBad={() => setFeedback({ 
          ...feedback, 
          bad: feedback.bad + 1 
        })}
        onReset={() => setFeedback({
          good: 0,
          neutral: 0,
          bad:0,
          })}
      />
      {totalFeedback > 0 ? <Feedback
        {...feedback} 
        total={totalFeedback}
        positive={positive}
        /> : <Notification />}
    </>
  );
};

export default App;
