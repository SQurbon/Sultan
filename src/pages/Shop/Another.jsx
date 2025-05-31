// import { createContext, useContext, useReducer } from 'react';

// const Another = createContext();

// const initialState = {
//     items: [],
//     count: 0,
// };

// function cartReducer(state, action) {
//     switch (action.type) {
//         case 'ADD_TO_CART':
//             return {
//                 ...state,
//                 items: [...state.items, action.payload],
//                 count: state.count + 1,
//             };
//         case 'REMOVE_FROM_CART':
//             const updatedItems = state.items.filter((item, index) => index !== state.items.lastIndexOf(action.payload));
//             return {
//                 ...state,
//                 items: updatedItems,
//                 count: Math.max(state.count - 1, 0),
//             };
//         default:
//             return state;
//     }
// }

// export const CartProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(cartReducer, initialState);

//     return (
//         <CartContext.Provider value={{ ...state, dispatch }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export const useCart = () => useContext(Another);
