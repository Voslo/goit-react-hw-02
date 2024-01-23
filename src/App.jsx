import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { Notification } from './components/Notification/Notification';


const initFeedback=JSON.parse(localStorage.getItem('feedback')) || { good: 0, neutral: 0, bad: 0 }

const App = () => {
  const [feedback, setFeedback] = useState(initFeedback);
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)

  const onFeedback = (option) => {
    setFeedback({ 
          ...feedback, 
          [option]: feedback[option] + 1 
        })
  }
  const btnReset= () => setFeedback({
        good: 0,
        neutral: 0,
        bad:0,
      })

  useEffect(() => {
    localStorage.setItem('feedback',JSON.stringify(feedback))
  },[feedback])
  return (
    <>
      <Description/>
      <Options
        onSmt={onFeedback}
        onReset={btnReset}
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
