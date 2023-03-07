import React from "react";
import "./App.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Signin from "../pages/Signin";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import NotFoundPage from "../pages/NotFountPage";
import Drawer from "../Drawer";
import { ThemeContextProvider } from "../context/ThemeContext";
import { Box } from "../context/Box";
import { AppContextProvider } from "../context/AppContext";

const App: React.FC = () => {
  const [searchValue, setName] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  return (
    <AppContextProvider>
      <div className='wrapper'>
        {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
        <Header onClickCart={() => setCartOpened(true)} />
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<Product />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <Box />
      </div>
    </AppContextProvider>
  );
};

export default App;
