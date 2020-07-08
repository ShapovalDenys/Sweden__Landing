import React from 'react';

import './App.scss';
import Form from './Form';

const App = () => (
  <div className="App">
    <section className="main">

      <div className="main__logo">
        <img className="main__logo-img" src="./img/logo.png" alt="logo"></img>
      </div>

      <div className="main__form">
        <h1 className="main__form-article">Registrera dig nu och  låt din tur göra resten!</h1>
        <img className="main__form-text" src="./img/text.png" alt="text"></img>
        <Form />
      </div>

    </section>
  </div>
);

export default App;
