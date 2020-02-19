import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../services/api';
import styles from './Cast.module.css';

class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape().isRequired,
  };

  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    API.fetchCast(match.params.movieID)
      .then(res => this.setState({ cast: res.cast }))
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul className={styles.list}>
        {cast.map(castmember => (
          <li className={styles.item} key={castmember.id}>
            <div className={styles.blockImg}>
              <img
                src={`${API.BASE_URL_IMG}/${castmember.profile_path}`}
                alt={castmember.name}
              />
            </div>
            <p>{castmember.name}</p>
            <p>Character: {castmember.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
