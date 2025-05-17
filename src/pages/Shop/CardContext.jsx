import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    cart: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Yangi item:", action.payload);
            console.log("Avvalgi holat:", state.cart);
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
        default:
            return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
