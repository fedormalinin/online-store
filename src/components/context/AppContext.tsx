import React from "react";
import axios from "axios";

export type CartItemsContextType = {
  cartItems: any[];
  setCartItems: (id: any) => void;
  addCartItem: (obj: any) => void;
  removeCartItem: (id: any) => void;
  isItemAdded: (id: string) => Boolean;
};

type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContext = React.createContext({});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [cartItems, setCartItems]: any[] = React.useState([]);

  const addCartItem = (obj: {
    id: string;
    title: string;
    thumbnail: string;
    price: number;
  }) => {
    if (
      cartItems.find(
        (item: { id: string }) => Number(item.id) === Number(obj.id)
      )
    ) {
      removeCartItem(obj.id);
    } else {
      axios.post("https://63e896464f3c6aa6e7bfec49.mockapi.io/cart", obj);
      setCartItems((prev: any) => [...prev, obj]);
    }
  };

  const removeCartItem = (id: string) => {
    axios.delete(`https://63e896464f3c6aa6e7bfec49.mockapi.io/cart/${id}`);
    setCartItems((prev: any) => prev.filter((item: any) => item.id !== id));
  };

  const isItemAdded = (id: number) => {
    return cartItems.some((obj: any) => Number(obj.id) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        addCartItem,
        removeCartItem,
        isItemAdded,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
