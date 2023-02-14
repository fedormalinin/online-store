import React from "react";
import logo from "./../../assets/icons/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

interface HeaderProps {
  onChangeInput: any;
  onClickCart: any;
}

const Header: React.FC<HeaderProps> = ({ onChangeInput, onClickCart }) => {
  const handleInputChange = (event: any) => {
    onChangeInput(event.target.value);
  };

  return (
    <header className='header'>
      <div className='header-container'>
        <section id='logo'>
          <div className='logo-container'>
            <Link to='/'>
              <h1 className='logo-text'>Store</h1>
            </Link>
            <Link to='/'>
              <img className='logo-img' src={logo} alt='logo' />
            </Link>
          </div>
        </section>

        <section id='search'>
          <div className='search-container'>
            <div className='search-window'>
              <form id='search-input-form' action=''>
                <input
                  onChange={handleInputChange}
                  className='search-input'
                  type='text'
                  placeholder='Search'
                />
              </form>
            </div>
            <button className='search-btn' form='search-input-form'></button>
          </div>
        </section>

        <section id='signin'>
          <Link to='/signin'>
            <button className='signin-btn btn'>
              Sign In
              <br />
              Account
            </button>
          </Link>
        </section>

        <section onClick={onClickCart} id='cart'>
          <button className='cart-btn btn'>
            Your cart
            <br />
            Total
          </button>
        </section>
      </div>
    </header>
  );
};

export default Header;
