import React, { useContext, useState } from "react";
import { calculateCartSummary } from "../../../lib/calculateCartSummary";
import CartContext from "../../../context/Cart";
import { Link } from "react-router-dom";

function Orders() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const { cart, cartDispatch } = useContext(CartContext);
  const { total, subTotal, shipping } = calculateCartSummary(cart);
  return (
    <div className=" bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Order Summary</h1>
          <p className="text-gray-500 mt-1">
            Review your items before placing the order.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT - CART ITEMS */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6"> Your Items </h2>
            <div className="space-y-5">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-5"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="font-semibold">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT - PRICE SUMMARY */}
          <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
            <h2 className="text-xl font-semibold mb-6"> Price Details </h2>
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span> <span>₹{subTotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span> {shipping === 0 ? "Free" : `₹${shipping}`} </span>
              </div>
              <div className="border-t pt-4 flex justify-between text-lg font-bold">
                <span>Total</span> <span>₹{total}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setOrderPlaced(true);
                cartDispatch({ type: "Clear-cart" });
              }}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      {orderPlaced && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/100 px-4">
          <div className="relative w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl">
            {/* Close */}
            <button
              onClick={() => navigate("/")}
              className="absolute right-4 top-4 text-2xl text-gray-400 hover:text-black"
            >
              ×
            </button>

            {/* Success Icon */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
              ✓
            </div>

            <h2 className="mb-2 text-2xl font-semibold text-gray-800">
              Order Placed Successfully!
            </h2>

            <p className="mb-6 text-sm text-gray-500">
              Thank you for your order. Your order has been placed successfully.
            </p>

            <Link to="/">
              <button
                onClick={() => navigate("/")}
                className="w-full rounded-lg bg-black py-3 text-white transition hover:bg-gray-800"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Orders;
