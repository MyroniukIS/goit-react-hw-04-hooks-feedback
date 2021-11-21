import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ mess }) {
  return <p className={styles.mess}>{mess}</p>;
}

Notification.propTypes = {
  mess: PropTypes.string.isRequired,
};
