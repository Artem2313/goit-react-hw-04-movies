import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ item: { smallImageLink, id, tags }, clickImg }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => clickImg(id)}
      role="presentation"
    >
      <img
        id={id}
        src={smallImageLink}
        alt={tags}
        className={styles.ImageGalleryItem_image}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    smallImageLink: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  clickImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
