import style from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <ul className={style.items_list}>
      <li className={style.item}>Good: {good}</li>
      <li className={style.item}>Neutural: {neutral}</li>
      <li className={style.item}>Bad: {bad}</li>
      <li className={style.item}>Total: {total}</li>
      <li className={style.item}>Positive Feedback: {positiveFeedback}</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
