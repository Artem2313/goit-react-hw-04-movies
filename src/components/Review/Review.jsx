import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../services/api';
import styles from './Review.module.css';

class Review extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {
    review: [],
  };

  componentDidMount() {
    const { match } = this.props;
    API.fetchReview(match.params.movieID)
      .then(res => this.setState({ review: res.results }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const { review } = this.state;
    return (
      <ul className={styles.list}>
        {review.length > 0 ? (
          review.map(item => (
            <li key={item.id}>
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))
        ) : (
          <li>Sorry, no reviews for this movie.</li>
        )}
      </ul>
    );
  }
}

export default Review;
