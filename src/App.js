import React from 'react';
import { useState } from 'react';
import style from './App.module.css';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notification from 'components/Notification/Notification';
import coffee from './img/espresso.png';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChangeFeedbackOption = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(prevState => (prevState += 1));
        break;
      case 'neutral':
        setNeutral(prevState => (prevState += 1));
        break;
      case 'bad':
        setBad(prevState => (prevState += 1));
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((100 * good) / total, 0);
  };

  return (
    <>
      <div className={style.container}>
        <img className={style.img} src={coffee} alt="coffe cup" />
        <h1 className={style.title}>EXPRESSO</h1>
      </div>

      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleChangeFeedbackOption}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()}
            />
            <Notification mess="Thank you for your feedback!" />
          </>
        ) : (
          <Notification mess="No feedback given" />
        )}
      </Section>
    </>
  );
}
