import React, { useContext } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import WishlistContext from "../../context/WishList";
import products from "../../lib/productList";
import UiContext from "../../context/UiContext";
import CartContext from "../../context/Cart";
import AuthContext from "../../context/Auth";

function ProductCard({ onSale, newArrival, title, id, price, image, product }) {
  const { wishlist, dispatch } = useContext(WishlistContext);
  const { cart, cartDispatch } = useContext(CartContext);
  const { setActivePanel } = useContext(UiContext);
  const { currentUser } = useContext(AuthContext);
  const heart = wishlist.some((item) => item.id === id);
  return (
    <div className="p-5 bg-[#F4F4F5] rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <div
            className={`px-3 py-1 rounded-lg bg-red-500 text-white text-[12px] ${onSale ? "visible" : "invisible"} `}
          >
            <p>On Sale</p>
          </div>
        </div>

        <div>
          <div
            className={`px-3 py-1 rounded-lg bg-green-500 text-white text-[12px] ${newArrival ? "visible" : "invisible"}`}
          >
            <p>New</p>
          </div>
        </div>
      </div>
      <div className="h-[20vh] md:h-[30vh] relative flex justify-center">
        <img
          src={image}
          className="w-[65%] md:w-[85%] object-contain absolute bottom-0"
        />
      </div>
      <div className="py-4 flex flex-col justify-center">
        <h3 className=" text-center text-[24px]">{title}</h3>
        <p className="mt-2 text-[25px] font-bold text-center">{price}</p>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <button
          onClick={() => {
            if (currentUser) {
              cartDispatch({ payload: product, type: "Add-to-Cart" });
              setActivePanel("cart");
            } else {
              alert("Please Login to add to Cart");
            }
          }}
          className="bg-orange-500 text-white rounded-lg px-6  py-3"
        >
          Add to Cart
        </button>
        <div
          className={`text-[32px] ${heart ? "text-red-500" : "text-[#D3D3D7]"} `}
        >
          <FaHeart
            onClick={() => {
              if (currentUser) {
                dispatch({ payload: product, type: "toggle-wish" });
                setActivePanel("wishlist");
              } else {
                alert("Please Login to add to Wishlist");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
