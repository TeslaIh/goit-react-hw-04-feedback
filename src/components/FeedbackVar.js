import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "./FeedbackVar.styled";

const FeedbackVar = ({ onMakeFeedback, options }) => {
    return (
      <div>
        {options.map((label, index) => {
          return (
            <Button onClick={onMakeFeedback} key={index}>
              {label}
            </Button>
          );
        })}
      </div>
    );
}

FeedbackVar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMakeFeedback: PropTypes.func.isRequired,
};

export default FeedbackVar;