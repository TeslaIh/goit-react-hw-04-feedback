import React, { useState } from 'react';
import Statistic from './components/Statistic';
import FeedbackVar from './components/FeedbackVar';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onMakeFeedback = event => {
    const changeValue = event.target.textContent;

    switch (changeValue) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const countPositive = () => {
    return Math.round((good / total) * 100);
  };

  const options = { good, neutral, bad };

  return (
    <>
      <Section title="Leave feedback, please">
        <FeedbackVar options={options} onMakeFeedback={onMakeFeedback} />
      </Section>

      <Section title="Statistic">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positive={countPositive()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

