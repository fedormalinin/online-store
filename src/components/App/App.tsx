import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
