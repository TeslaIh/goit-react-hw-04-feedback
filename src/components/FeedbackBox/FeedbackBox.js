import React, { Component } from "react";
import PropTypes from "prop-types";
import Statistic from "../FeedbackAdds/Statistic";
import FeedbackVar from "./FeedbackVar";
import Section from "../FeedbackAdds/Section";
import Notification from "../FeedbackAdds/Notification";

class FeedbackBox extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onMakeFeedback = (key) => {
        this.setState((prevState) => {
            return {
                [key]: prevState[key] + 1,
            }
        })
    }

    countTotal = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;
        return total;
    }

    countPositive = () => {
        const { good } = this.state;
        return Math.round((good / this.countTotal()) * 100) || 0;
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotal();

        return (
            <>
                <Section title="Leave feedback, please">
                    <FeedbackVar
                        options={this.state}
                        onMakeFeedback={this.onMakeFeedback}
                    />
                </Section>
            
                <Section title="Statistic">
                    {total > 0 ? (
                        <Statistic
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positive={this.countPositive()}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
            </>
        )
    }
}

FeedbackBox.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackBox;