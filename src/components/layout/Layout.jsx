import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Uiprovider } from "../../context/UiContext";
import Wishlist from "../wishlist/Wishlist";
import { ProductProvider } from "../../context/ProductContext";
import { WishlistProvider } from "../../context/WishList";
import { CartProvider } from "../../context/Cart";
import CartDrawer from "../cart/CartDrawer";
import { AuthProvider } from "../../context/Auth";

function Layout() {
  return (
    <div>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <Uiprovider>
                <Navbar />
                <Outlet />
                <Footer />
                <Wishlist />
                <CartDrawer />
              </Uiprovider>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default Layout;
