import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Signin from '../pages/Signin';
import Cart from '../pages/Cart';
import NotFoundPage from '../pages/NotFountPage';
import Drawer from '../Drawer';

const App: React.FC = () => {

  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems]: any[] = React.useState([]);

  
  const addCartItem = (obj: {title: string, thumbnail: string, price: number} ) => {
    setCartItems((prev: any) => [...prev, obj]);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer products={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
        <main>
          
          <Routes>
            <Route path ="/" element={<Main handleCartItem={(obj: { title: string, thumbnail: string, price: number }) => addCartItem(obj)}/>} />
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
