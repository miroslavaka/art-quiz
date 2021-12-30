import React from 'react';
import { render } from 'react-dom';
import { questions } from './questions.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Questions from './components/Questions';

import './style.css';

const App = () => (
  <div className="app">
    <Header />
    <Questions question={questions} />
    <Footer />
  </div>
);

render(<App />, document.querySelector('#app'));
