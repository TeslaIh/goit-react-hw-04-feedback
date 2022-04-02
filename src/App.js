import React, { useState } from 'react';
import Statistic from './components/Statistic';
import FeedbackVar from './components/FeedbackVar';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const LeaveFeedBack = e => {
    switch (e.currentTarget.textContent.toLowerCase()) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const countPositive = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title="Leave feedback, please">
        <FeedbackVar
          options={['Good', 'Neutral', 'Bad']}
          onMakeFeedback={LeaveFeedBack}
        />
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

