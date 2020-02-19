import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageFalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ items, clickImg }) => {
  return (
    <ul className={styles.ImageGallery}>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} clickImg={clickImg} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  clickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
