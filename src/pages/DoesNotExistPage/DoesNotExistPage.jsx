import React from 'react';
import { Link } from 'react-router-dom';

const DoesNotExistPage = () => (
  <h1>
    Sorry, but your page does not exist - <Link to="/">Return Home!</Link>
  </h1>
);

export default DoesNotExistPage;
