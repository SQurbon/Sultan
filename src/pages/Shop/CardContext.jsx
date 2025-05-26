
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
    cart: [],
};

function reducer(state, action) {
    const newarr = {
        id: Date.now(),
        h1: action.payload.h1,
        img: action.payload.img,
        price: action.payload.price
    };
    switch (action.type) {
        case "ADD_TO_CART":
            
            return {
                ...state,
                cart: [...state.cart, newarr],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id != action.payload.id),
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
