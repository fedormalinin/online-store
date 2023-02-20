import React from "react";
import "./App.scss";
import axios from "axios";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
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
    id: number;
    title: string;
    thumbnail: string;
    price: number;
  }) => {
    if (
      cartItems.find(
        (item: { id: number }) => Number(item.id) === Number(obj.id)
      )
    ) {
      // setCartItems((prev: any) =>
      //   prev.filter((item: any) => item.id !== obj.id)
      // );
      removeCartItem(obj.id);
    } else {
      axios.post("https://63e896464f3c6aa6e7bfec49.mockapi.io/cart", obj);
      setCartItems((prev: any) => [...prev, obj]);
    }
  };

  const removeCartItem = (id: number) => {
    axios.delete(`https://63e896464f3c6aa6e7bfec49.mockapi.io/cart/${id}`);
    setCartItems((prev: any) => prev.filter((item: any) => item.id !== id));
  };

  return (
    <div className='wrapper'>
      {cartOpened && (
        <Drawer
          onClose={() => setCartOpened(false)}
          onRemove={removeCartItem}
          cartItems={cartItems}
        />
      )}
      <Header
        onChangeInput={handleNameChange}
        onClickCart={() => setCartOpened(true)}
        cartItems={cartItems}
      />
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Main
                searchValue={searchValue}
                handleCartItem={(obj: {
                  id: number;
                  title: string;
                  thumbnail: string;
                  price: number;
                }) => addCartItem(obj)}
                initCartItems={(obj: any) => setCartItems(obj)}
                added={(itemId: number) =>
                  cartItems.some((obj: any) => {
                    return Number(itemId) === Number(obj.id);
                  })
                }
              />
            }
          />
          <Route path='/signin' element={<Signin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
