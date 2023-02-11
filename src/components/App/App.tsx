import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/Signin';
import Cart from '../pages/Cart';
import NotFoundPage from '../pages/NotFountPage';
// import testProduct from './../../assets/img/products/1.jpg'

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <div className="drawer">
          <h2>Cart</h2>
          <div className="cart-items-wrap">
          <ul className="cart-items-container">

            <li className="cart-item">
              <div className="item-content-container">
                <div className="product-image" style={{ backgroundImage: 'url(./img/products/1.jpg)'}}></div>
                  <div className="product-info">
                    <div className="product-info__product-title">Iphone 9</div>
                    <div className="product-info__product-price">1500$</div>
                  </div>
                </div>
              <div className="product-delete"></div>
            </li>

            <li className="cart-item">
              <div className="item-content-container">
                <div className="product-image" style={{ backgroundImage: 'url(./img/products/2.jpg)'}}></div>
                  <div className="product-info">
                    <div className="product-info__product-title">Iphone 9</div>
                    <div className="product-info__product-price">1500$</div>
                  </div>
                </div>
              <div className="product-delete"></div>
            </li>

            <li className="cart-item">
              <div className="item-content-container">
                <div className="product-image" style={{ backgroundImage: 'url(./img/products/3.jpg)'}}></div>
                  <div className="product-info">
                    <div className="product-info__product-title">Iphone 9</div>
                    <div className="product-info__product-price">1500$</div>
                  </div>
                </div>
              <div className="product-delete"></div>
            </li>

            <li className="cart-item">
              <div className="item-content-container">
                <div className="product-image" style={{ backgroundImage: 'url(./img/products/4.png)'}}></div>
                  <div className="product-info">
                    <div className="product-info__product-title">Iphone 9</div>
                    <div className="product-info__product-price">1500$</div>
                  </div>
                </div>
              <div className="product-delete"></div>
            </li>

            <li className="cart-item">
              <div className="item-content-container">
                <div className="product-image" style={{ backgroundImage: 'url(./img/products/5.jpg)'}}></div>
                  <div className="product-info">
                    <div className="product-info__product-title">Iphone 9</div>
                    <div className="product-info__product-price">1500$</div>
                  </div>
                </div>
              <div className="product-delete"></div>
            </li>

            <li className="cart-item">
              <div className="item-content-container">
                <div className="product-image" style={{ backgroundImage: 'url(./img/products/1.jpg)'}}></div>
                  <div className="product-info">
                    <div className="product-info__product-title">Iphone 9</div>
                    <div className="product-info__product-price">1500$</div>
                  </div>
                </div>
              <div className="product-delete"></div>
            </li>

          </ul>
          </div>
        <div>Стоимость: 1500 $</div>
        <button className="pay-btn">Pay</button>
        </div>
      </div>
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
