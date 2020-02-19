import axios from 'axios';

const KEY = '13615296-278f316d67a099253ce22c61a';

export const getItems = (query = '', page = 1) => {
  return axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};

export const dummy = () => null;
