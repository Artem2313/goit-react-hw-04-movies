import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import style from './style.css';

ReactDOM.render(
  <BrowserRouter>
    <App style={style} />
  </BrowserRouter>,
  document.querySelector('#root'),
);
