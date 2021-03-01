import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Headers from './Header';
import Views from './routes'

ReactDOM.render(
  <>
  <BrowserRouter>
    <Headers/>
    <Views/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

