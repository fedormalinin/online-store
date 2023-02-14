import React from "react";
import "./App.scss";
import axios from "axios";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Cart from "../pages/Cart";
import NotFoundPage from "../pages/NotFountPage";
import Drawer from "../Drawer";

const App: React.FC = () => {
  const [searchValue, setName] = React.useState("");
  const handleNameChange = (searchValue: string) => {
    setName(searchValue);
  };

  const [cartOpened, setCartOpened] = React.useState(false);

  // Добавление товара в корзину
  const [cartItems, setCartItems]: any[] = React.useState([]);
  const addCartItem = (obj: {
    title: string;
    thumbnail: string;
    price: number;
  }) => {
    // Добавление товара на сервер в cart
    axios.post("https://63e896464f3c6aa6e7bfec49.mockapi.io/cart", obj);
    // Добавление товара в стейт
    setCartItems((prev: any) => [...prev, obj]);
  };

  return (
    <div className='wrapper'>
      {cartOpened && (
        <Drawer products={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header
        onChangeInput={handleNameChange}
        onClickCart={() => setCartOpened(true)}
      />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Main
                searchValue={searchValue}
                handleCartItem={(obj: {
                  title: string;
                  thumbnail: string;
                  price: number;
                }) => addCartItem(obj)}
              />
            }
          />
          <Route path='/signin' element={<Signin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
