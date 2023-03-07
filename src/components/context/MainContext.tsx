import React from "react";
import { HeaderContext, HeaderItemsContextType } from "./HeaderContext";

export type MainContextType = {
  products: any[];
  setProducts: (obj: any) => void;
  isLoading: boolean;
  setIsLoading: (obj: boolean) => boolean;
  filteredProducts: any[];
};

type MainContextProviderProps = {
  children: React.ReactNode;
};

export const MainContext = React.createContext({});

export const MainContextProvider = ({ children }: MainContextProviderProps) => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const { handleInputChange } = React.useContext(
    HeaderContext
  ) as HeaderItemsContextType;

  const filteredProducts = products.filter((item: any) => {
    return item.title
      .toLowerCase()
      .includes(`${handleInputChange.toString().toLowerCase()}`);
  });

  return (
    <MainContext.Provider
      value={{
        products,
        setProducts,
        isLoading,
        setIsLoading,
        filteredProducts,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
