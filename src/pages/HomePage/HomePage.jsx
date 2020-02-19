import React, { Component } from 'react';
import * as API from '../../components/services/api';
import HomePageList from '../../components/HomePageList/HomePageList';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    API.fetchTrendingMovies()
      .then(res => {
        this.setState({ items: res.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1 className={styles.title}>Trending Today</h1>
        <HomePageList items={items} />
      </div>
    );
  }
}

export default HomePage;
