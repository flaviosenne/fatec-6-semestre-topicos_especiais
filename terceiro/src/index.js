import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Aluno from './Aluno';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <hr/>
    <Aluno/>
  </React.StrictMode>,
  document.getElementById('root')
);

