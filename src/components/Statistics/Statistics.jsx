import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ props }) => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div className={css.stats}>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          Good<span>{good}</span>
        </li>
        <li className={css.statsItem}>
          Neutral<span>{neutral}</span>
        </li>
        <li className={css.statsItem}>
          Bad<span>{bad}</span>
        </li>
      </ul>
      <div className={css.statsSummary}>
        <p className={css.statsTotal}>
          Total<span>{total}</span>
        </p>
        <p className={css.statsPersantage}>
          Positive persantage<span>{positivePercentage}%</span>
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  props: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};
