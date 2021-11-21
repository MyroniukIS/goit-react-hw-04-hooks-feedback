import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={style.btns_box}>
      {options.map(elem => (
        <button
          key={elem}
          type="button"
          className={style.btn}
          onClick={onLeaveFeedback}
          name={elem}
        >
          {elem}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
