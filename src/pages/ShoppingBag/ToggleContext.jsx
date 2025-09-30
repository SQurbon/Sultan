import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBox = () => setIsBoxVisible(prev => !prev);

  return (
    <ToggleContext.Provider value={{ isBoxVisible, toggleBox }}>
      {children}
    </ToggleContext.Provider>
  );
};

export const useToggle = () => useContext(ToggleContext);
