import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/Signin';
import Cart from '../pages/Cart';
import NotFoundPage from '../pages/NotFountPage';

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          
          <Routes>
            <Route path ="/" element={<Main />} />
            <Route path ="/signin" element={<Signin />} />
            <Route path ="/cart" element={<Cart />} />
            <Route path ="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
