import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import routes from '../routes/routes';
import Loader from './Loader/Loader';

const App = () => (
  <div>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route
          path={routes.HOME_PAGE.path}
          exact
          component={routes.HOME_PAGE.component}
        />
        <Route
          path={routes.MOVIE_DETAILS_PAGE.path}
          component={routes.MOVIE_DETAILS_PAGE.component}
        />
        <Route
          path={routes.SEARCH_MOVIE_PAGE.path}
          component={routes.SEARCH_MOVIE_PAGE.component}
        />
        <Route component={routes.DOES_NOT_EXIST_PAGE.component} />
      </Switch>
    </Suspense>
  </div>
);

export default App;
