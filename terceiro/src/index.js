import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Aluno from './Aluno';
import Menu from './Menu'


ReactDOM.render(
  <React.StrictMode>
    <Menu/>
    <App />
    <hr/>
    <Aluno/>
  </React.StrictMode>,
  document.getElementById('root')
);

