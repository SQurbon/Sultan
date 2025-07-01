// src/context/CartContext.js
import { createContext, useContext, useEffect, useReducer } from "react";

// 1. Context yaratish
const CartContext = createContext();

// 2. Boshlang‘ich holat
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  count: JSON.parse(localStorage.getItem("count")) || 0,
};


// 3. Reducer funksiyasi
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { ...action.payload, id: Date.now(), quantity: 1 },
        ],
        count: state.count + 1,
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
        count: Math.max(0, state.count - 1),
      };

    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        ),
      };

    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: Math.max(1, (item.quantity || 1) - 1) }
              : item
          ),
      };

    default:
      return state;
  }
}



// 4. Provider komponent
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    localStorage.setItem("count", JSON.stringify(state.count));
  }, [state.cartItems, state.count]);


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
