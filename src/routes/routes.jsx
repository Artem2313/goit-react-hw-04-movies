import { lazy } from 'react';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);
const SearchMoviePage = lazy(() =>
  import(
    '../pages/SearchMoviePage/SearchMoviePage' /* webpackChunkName: "search-movie-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    '../pages/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);
const DoesNotExistPage = lazy(() =>
  import(
    '../pages/DoesNotExistPage/DoesNotExistPage' /* webpackChunkName: "does-not-exist-page" */
  ),
);

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  MOVIE_DETAILS_PAGE: {
    path: '/movies/:movieID',
    component: MovieDetailsPage,
  },
  SEARCH_MOVIE_PAGE: {
    path: '/movies',
    component: SearchMoviePage,
  },
  DOES_NOT_EXIST_PAGE: {
    component: DoesNotExistPage,
  },
};
