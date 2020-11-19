import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import GlobalStyles from './styles';

ReactDOM.render(
  <BrowserRouter basename="/react-my-read">
    <App />
    <GlobalStyles />
  </BrowserRouter>,
  document.getElementById('root')
);