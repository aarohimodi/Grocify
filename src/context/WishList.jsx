import { createContext, useReducer } from "react";

const WishlistContext = createContext();
function wishReducer(state, action) {
  switch (action.type) {
    case "Add-to-wishlist":
      const product = action.payload;
      return [
        ...state,
        { id: product.id, product: product.name, image: product.image },
      ];

    case "Clear-wishlist":
      return [];
    case "Remove-wishlist":
      return state.filter((item) => item.id !== action.payload);
    case "toggle-wish":
      const newproduct = action.payload;
      console.log("Wishlist product:", newproduct);
      const alreadyExist = state.some((item) => item.id === newproduct.id);
      if (alreadyExist) {
        return state.filter((item) => item.id !== newproduct.id);
      }
      return [...state, { ...newproduct }];
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [wishlist, dispatch] = useReducer(wishReducer, []);
  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistContext;
