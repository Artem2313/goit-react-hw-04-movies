import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const ClickMoreButton = ({ clickMore }) => {
  // window.scrollTo({
  //   top: document.documentElement.scrollHeight,
  //   behavior: 'smooth',
  // });
  return (
    <button onClick={clickMore} className={styles.Button} type="button">
      More
    </button>
  );
};

ClickMoreButton.propTypes = {
  clickMore: PropTypes.func.isRequired,
};

export default ClickMoreButton;
