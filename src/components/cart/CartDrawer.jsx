import React, { useContext } from "react";
import UiContext from "../../context/UiContext";
import CartContext from "../../context/Cart";
import { MdDelete } from "react-icons/md";
import { LuMinus, LuPlus } from "react-icons/lu";
import { calculateCartSummary } from "../../lib/calculateCartSummary";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/Auth";
function CartDrawer() {
  const { activePanel, setActivePanel } = useContext(UiContext);
  const { currentUser } = useContext(AuthContext);
  const { cart, cartDispatch } = useContext(CartContext);
  const { subTotal, total, shipping } = calculateCartSummary(cart);
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (currentUser) {
      setActivePanel(null);
      navigate("/order-summary");
    } else {
      alert("please login first");
      navigate("/login");
    }
  };
  return (
    <div
      className={`fixed top-0 right-0 z-50 h-screen w-full sm:max-w-md bg-white shadow-2xl transform transition-transform duration-300 ${activePanel === "cart" ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Your Cart</h1>
            <p className="text-sm text-gray-500">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </p>
          </div>
          <button
            onClick={() => setActivePanel(null)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 hover:bg-gray-200 transition"
          >
            ×
          </button>
        </div>
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="mb-4 text-5xl">🛒</div>
              <h2 className="text-lg font-semibold text-gray-800">
                Your cart is empty
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Add some products to your cart.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-gray-200 p-3"
                >
                  <div className="flex gap-3">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 shrink-0 rounded-lg object-cover"
                    />
                    {/* Product Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="truncate font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            ₹{item.price}
                          </p>
                        </div>
                        {/* Delete */}
                        <button
                          onClick={() =>
                            cartDispatch({
                              type: "delete-cart",
                              payload: item.id,
                            })
                          }
                          className="text-gray-400 hover:text-red-500 transition"
                          aria-label="Remove item"
                        >
                          <MdDelete size={21} />
                        </button>
                      </div>
                      {/* Quantity */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-gray-200">
                          <button
                            onClick={() =>
                              cartDispatch({
                                type: "dec-cart",
                                payload: item.id,
                              })
                            }
                            className="flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            <LuMinus size={15} />
                          </button>
                          <span className="flex h-8 w-9 items-center justify-center border-x border-gray-200 text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              cartDispatch({
                                type: "inc-cart",
                                payload: item.id,
                              })
                            }
                            className="flex h-8 w-8 items-center justify-center text-gray-600 hover:bg-gray-100"
                          >
                            <LuPlus size={15} />
                          </button>
                        </div>
                        <p className="font-semibold text-gray-900">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Bottom Summary */}
        {cart.length > 0 && (
          <div className="border-t bg-white px-5 py-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span> <span>₹{subTotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span> {shipping === 0 ? "Free" : `₹${shipping}`} </span>
              </div>
              <div className="flex justify-between border-t pt-3 text-lg font-bold text-gray-900">
                <span>Total</span> <span>₹{total}</span>
              </div>
            </div>
            {/* Buttons */}
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setActivePanel(null)}
                className="w-1/3 rounded-lg border border-gray-300 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Close
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 rounded-lg bg-orange-500 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default CartDrawer;
