import "./Drawer.scss";
import emptyCart from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";
import { AppContext, CartItemsContextType } from "./context/AppContext";
import React from "react";

interface DrawerProps {
  onClose: any;
}

const Drawer: React.FC<DrawerProps> = ({ onClose }) => {
  const { cartItems, removeCartItem } = React.useContext(
    AppContext
  ) as CartItemsContextType;
  return (
    <div className='drawer-container'>
      <div className='overlay' onClick={onClose}></div>
      <div className='drawer'>
        <div className='cart-header'>
          <h2>Cart</h2>
          <div onClick={onClose} className='close-drawer'></div>
        </div>
        <div className='cart-items-wrap'>
          {cartItems.length > 0 ? (
            <ul className='cart-items-container'>
              {cartItems.map((product: any, index: number) => {
                return (
                  <li key={index} className='cart-item'>
                    <div className='item-content-container'>
                      <div
                        className='product-image'
                        style={{ backgroundImage: `url(${product.thumbnail})` }}
                      ></div>
                      <div className='product-info'>
                        <div className='product-info__product-title'>
                          {product.title}
                        </div>
                        <div className='product-info__product-price'>
                          {product.price}$
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => removeCartItem(product.id)}
                      className='product-delete'
                    ></div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className='empty-container'>
              <div onClick={onClose} className='empty-block'>
                <h2>Your cart is empty</h2>
                <img
                  className='empty-cart-img'
                  src={emptyCart}
                  alt='empty-cart'
                />
                <h3>Click plus to add a products</h3>
              </div>
              <button onClick={onClose} className='drawer-btn'>
                Go back
              </button>
            </div>
          )}
        </div>

        <div className='order-price'>
          Total price:{" "}
          {cartItems.reduce((accum: number, curValue: { price: number }) => {
            return accum + curValue.price;
          }, 0)}
          $
        </div>
        <Link to='/cart'>
          <button onClick={onClose} className='drawer-btn order-btn'>
            Make an order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
