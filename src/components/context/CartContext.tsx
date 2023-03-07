import React from "react";
import { theme } from "./theme";

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = React.createContext(theme);

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  return <CartContext.Provider value={theme}>{children}</CartContext.Provider>;
};
