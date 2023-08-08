import { useState } from 'react';
import css from './FeedbackOptions.module.css';
import { FiSmile, FiMeh, FiFrown, FiHeart, FiDroplet } from 'react-icons/fi';
import PropTypes from 'prop-types';

export function FeedbackOptions({ onLeaveFeedback, options }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleButtonClick = option => {
    const newTimeoutId = setTimeout(() => {
      setSelectedOption(null);
      setTimeoutId(null);
    }, 1500);

    setSelectedOption(option);
    setTimeoutId(newTimeoutId);

    onLeaveFeedback(option);

    clearTimeout(timeoutId);
  };

  const goodFeedback = () => {
    return (
      <span className={css.icon}>
        <FiSmile />
        {selectedOption === 'good' && (
          <span className={css.iconAnimation}>
            <FiHeart />
          </span>
        )}
      </span>
    );
  };

  const badFeedback = () => {
    return (
      <span className={css.icon}>
        <FiFrown />
        {selectedOption === 'bad' && (
          <span className={css.iconAnimation}>
            <FiDroplet />
          </span>
        )}
      </span>
    );
  };

  return (
    <ul className={css.feedbackOptions}>
      {options.map(option => {
        return (
          <li className={css.feedbackOptionsItem} key={option}>
            <button
              className={css.feedbackBtn}
              type="button"
              aria-label={`leave ${option} feedback`}
              onClick={() => handleButtonClick(option)}
            >
              {option === 'good' && goodFeedback()}
              {option === 'neutral' && <FiMeh />}
              {option === 'bad' && badFeedback()}
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
