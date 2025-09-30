import { createContext, useContext, useRef } from "react";

const CartIconContext = createContext(null);

export const CartIconProvider = ({ children }) => {
    const cartRef = useRef(null);
    return (
        <CartIconContext.Provider value={cartRef}>
            {children}
        </CartIconContext.Provider>
    );
}

export const useCartIcon = () => useContext(CartIconContext);
