// src/context/CartContext.js
import { createContext, useContext, useReducer } from "react";

// 1. Context yaratish
const CartContext = createContext();

// 2. Boshlang‘ich holat
const initialState = {
  cartItems: [],
  count: 0,
};

// 3. Reducer funksiyasi
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, id: Date.now() } //  ID qo‘shildi
        ],
        count: state.count + 1,
      };
      
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        count: Math.max(0, state.count - 1),
      };

    default:
      return state;
  }
}


// 4. Provider komponent
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// 5. Contextni ishlatish uchun hook
export function useCart() {
  return useContext(CartContext);
}
