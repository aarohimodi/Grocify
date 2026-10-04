import { createContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [search, setSearch] = useState("");
  return (
    <ProductContext.Provider value={{ search, setSearch }}>
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;
