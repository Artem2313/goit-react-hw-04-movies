import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div style={styles}>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={styles.SearchForm_button}>
              <span className={styles.SearchForm_button_label}>Search</span>
            </button>

            <input
              value={value}
              onChange={this.handleChange}
              className={styles.SearchForm_input}
              type="text"
              autoComplete="off"
              placeholder="Search"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default SearchForm;
