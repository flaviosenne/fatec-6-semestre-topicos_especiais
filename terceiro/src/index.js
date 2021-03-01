import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Menu from './Menu';
import Views from './routes'

ReactDOM.render(
  <>
    <Menu/>
  <BrowserRouter>
    <Views/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);

