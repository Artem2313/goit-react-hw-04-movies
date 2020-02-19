import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import * as API from '../../components/services/api';
import HomePageList from '../../components/HomePageList/HomePageList';
import styles from './SearchMoviePage.module.css';

class SearchMoviePage extends Component {
  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func }).isRequired,
    location: PropTypes.shape({ search: PropTypes.string }).isRequired,
  };

  state = {
    value: '',
    items: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const qsSearch = qs.parse(location.search).query;
    if (qsSearch) {
      API.fetchQuery(qsSearch)
        .then(res => this.setState({ items: res.results }))
        .catch(err => {
          throw new Error(err);
        });
    }
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { value } = this.state;
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `?query=${value}`,
    });
    API.fetchQuery(value)
      .then(res => this.setState({ items: res.results }))
      .catch(err => {
        throw new Error(err);
      });
    this.setState({ value: '' });
  };

  render() {
    const { value, items } = this.state;
    return (
      <div>
        <form className={styles.form} onSubmit={this.onSubmit}>
          <input
            className={styles.input}
            type="text"
            value={value}
            placeholder="Enter movie name..."
            onChange={this.handleChange}
            required
          />
          <button className={styles.btn} type="submit">
            Search
          </button>
        </form>
        {items.length > 0 && <HomePageList items={items} />}
      </div>
    );
  }
}

export default SearchMoviePage;
