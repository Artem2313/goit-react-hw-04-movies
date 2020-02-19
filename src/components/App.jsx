import React, { Component } from 'react';
import mapper from './Mapper/Mapper';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorNotification from './ErrorNotification/ErrorNotification';
import ClickMoreButton from './Buttons/ClickMoreButton';
import SearchForm from './SearchForm/SearchForm';
import ModalWindow from './ModalWindow/ModalWindow';
import * as API from '../services/API';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    items: [],
    isLoading: false,
    error: null,
    searchQuery: '',
    pageNumber: 1,
    openModal: false,
    imageID: '',
  };

  componentDidMount() {
    this.fetchItems();
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, pageNumber } = this.state;
    if (prevState.searchQuery !== searchQuery) {
      this.fetchItems(searchQuery, pageNumber);
    }
    if (prevState.pageNumber !== pageNumber) {
      API.getItems(searchQuery, pageNumber)
        .then(({ data }) =>
          this.setState(state => ({
            items: mapper([...state.items, ...data.hits]),
          })),
        )
        .catch(err => {
          throw new Error(err);
        })
        .finally(() => this.setState({ isLoading: false }));
    }
    this.scrolling();
  }

  scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  fetchItems = (query, pageNumber) => {
    this.setState({ isLoading: true });
    API.getItems(query, pageNumber)
      .then(({ data }) => {
        this.setState({ items: mapper(data.hits) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleSubmit = value => {
    this.setState({
      searchQuery: value,
      items: [],
      pageNumber: 1,
      openModal: false,
    });
  };

  handleClickImage = id => {
    const { openModal } = this.state;
    this.setState({ openModal: !openModal, imageID: id });
  };

  handleClickMore = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  render() {
    const { items, isLoading, error, openModal, imageID } = this.state;
    return (
      <div className={styles.App}>
        <SearchForm onSubmit={this.handleSubmit} />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <Loader />}
        {<ImageGallery items={items} clickImg={this.handleClickImage} />}
        {items.length > 0 && (
          <ClickMoreButton clickMore={this.handleClickMore} />
        )}
        {openModal && (
          <ModalWindow
            items={items}
            imageID={imageID}
            clickImg={this.handleClickImage}
          />
        )}
      </div>
    );
  }
}
