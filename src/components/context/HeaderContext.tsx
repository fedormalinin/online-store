import React, { ChangeEventHandler } from "react";

export type HeaderItemsContextType = {
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
};

type HeaderProviderProps = {
  children: React.ReactNode;
};

export const HeaderContext = React.createContext({});

export const HeaderContextProvider = ({ children }: HeaderProviderProps) => {
  const handleInputChange = (event: any) => event.target.value;
  return (
    <HeaderContext.Provider value={handleInputChange}>
      {children}
    </HeaderContext.Provider>
  );
};
