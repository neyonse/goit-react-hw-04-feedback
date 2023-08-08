import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';
import { FiSmile, FiMeh, FiFrown, FiHeart, FiDroplet } from 'react-icons/fi';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  state = {
    selectedOption: null,
    timeoutId: null,
  };

  handleButtonClick = option => {
    const { onLeaveFeedback } = this.props;
    const { timeoutId } = this.state;
    const newTimeoutId = setTimeout(() => {
      this.setState({ selectedOption: null, timeoutId: null });
    }, 1500);

    onLeaveFeedback(option);
    clearTimeout(timeoutId);

    this.setState({ selectedOption: null, timeoutId: null });
    this.setState({ selectedOption: option, timeoutId: newTimeoutId });
  };

  render() {
    const { options } = this.props;
    const { selectedOption } = this.state;

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
                onClick={() => this.handleButtonClick(option)}
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
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
