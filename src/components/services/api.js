import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';

export const fetchTrendingMovies = () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=567b39eeea625010b2f2c338580830e3',
    )
    .then(res => res.data);
};

export const fetchQuery = query => {
  return axios
    .get(
      `search/movie?api_key=567b39eeea625010b2f2c338580830e3&query=${query}&page=1`,
    )
    .then(res => res.data);
};

export const fetchById = id => {
  return axios
    .get(`movie/${id}?api_key=567b39eeea625010b2f2c338580830e3`)
    .then(res => res.data);
};

export const fetchCast = id => {
  return axios
    .get(`movie/${id}/credits?api_key=567b39eeea625010b2f2c338580830e3`)
    .then(res => res.data);
};

export const fetchReview = id => {
  return axios
    .get(`movie/${id}/reviews?api_key=567b39eeea625010b2f2c338580830e3&page=1`)
    .then(res => res.data);
};
