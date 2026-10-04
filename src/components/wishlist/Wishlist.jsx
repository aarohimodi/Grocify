import React, { useContext } from "react";
import UiContext from "../../context/UiContext";
import WishlistContext from "../../context/WishList";
import CartContext from "../../context/Cart";
import { MdDelete } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
function Wishlist() {
  const { activePanel, setActivePanel } = useContext(UiContext);
  const { wishlist, dispatch } = useContext(WishlistContext);
  const { cartDispatch } = useContext(CartContext);
  const handleMoveToCart = (item) => {
    cartDispatch({ payload: item, type: "Add-to-Cart" });
    dispatch({ payload: item.id, type: "Remove-wishlist" });
    setActivePanel("cart");
  };
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-full sm:max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">My Wishlist</h1>
            <p className="text-sm text-gray-500">
              {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setActivePanel(null)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-gray-200 transition"
          >
            ×
          </button>
        </div>
        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {wishlist.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <LuHeart size={55} className="text-gray-300" />
              <h2 className="mt-4 text-lg font-semibold text-gray-800">
                Your wishlist is empty
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Save products you love here.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-gray-200 p-3"
                >
                  <div className="flex gap-3">
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 shrink-0 rounded-lg object-cover"
                    />
                    {/* Product Details */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-gray-900 truncate">
                          {item.name}
                        </h3>
                        <button
                          onClick={() =>
                            dispatch({
                              payload: item.id,
                              type: "Remove-wishlist",
                            })
                          }
                          className="text-gray-400 hover:text-red-500 transition"
                          aria-label="Remove from wishlist"
                        >
                          <MdDelete size={21} />
                        </button>
                      </div>
                      {item.price && (
                        <p className="mt-1 text-sm font-medium text-gray-600">
                          ₹{item.price}
                        </p>
                      )}
                      {/* Actions */}
                      <button
                        onClick={() => handleMoveToCart(item)}
                        className="mt-4 w-full rounded-lg bg-orange-500 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition"
                      >
                        Move to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Bottom Actions */}
        {wishlist.length > 0 && (
          <div className="border-t bg-white px-5 py-4">
            <div className="flex gap-3">
              <button
                onClick={() => setActivePanel(null)}
                className="w-1/3 rounded-lg border border-gray-300 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Close
              </button>
              <button
                onClick={() => dispatch({ type: "Clear-wishlist" })}
                className="flex-1 rounded-lg bg-gray-900 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
              >
                Clear Wishlist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Wishlist;
