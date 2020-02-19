import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './HomePageList.module.css';

const HomePageList = ({ items = [], location }) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li key={item.id} className={styles.item}>
          <Link
            to={{
              pathname: `/movies/${item.id}`,
              state: { from: location },
            }}
            className={styles.itemsFilm}
          >
            <span className={styles.span}>&#x2764;</span>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

HomePageList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  location: PropTypes.shape({ state: PropTypes.shape() }).isRequired,
};

export default withRouter(HomePageList);
