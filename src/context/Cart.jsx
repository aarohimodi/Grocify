import React, { act, createContext, useReducer } from "react";
const CartContext = createContext();
export function CartProvider({ children }) {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "Add-to-Cart":
        const product = action.payload;

        const isProductExist = state.find((i) => i.id === product.id);

        if (isProductExist) {
          return state.map((i) => {
            return i.id === isProductExist.id
              ? { ...i, quantity: isProductExist.quantity + 1 }
              : i;
          });
        }
        return [
          ...state,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1,
          },
        ];
      case "inc-cart":
        return state.map((i) => {
          return i.id === action.payload
            ? { ...i, quantity: i.quantity + 1 }
            : i;
        });
      case "dec-cart":
        const findProduct = state.find((i) => i.id === action.payload);
        if (findProduct.quantity === 1) {
          return state.filter((i) => i.id !== findProduct.id);
        }
        return state.map((i) => {
          return i.id === action.payload
            ? { ...i, quantity: i.quantity - 1 }
            : i;
        });
      case "delete-cart":
        return state.filter((i) => i.id !== action.payload);
      case "Clear-cart":
        return [];
      default:
        return state;
    }
  };
  const [cart, cartDispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
