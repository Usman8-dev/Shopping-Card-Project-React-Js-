import React from "react";
import { useCart} from "../Context/CartContext";

function Cart() {
  const { cart, RemoveProduct, UpdateQuantity , Total  } = useCart();

  return (
    <div>
      <div>
        <h1 className="text-[#141412] text-3xl font-semibold tracking-tight mb-1">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-[#6B6A63] text-2xl mb-10">No Item on Cart</p>
        ) : (
          <>
            <p className="text-[#6B6A63] text-sm mb-10">
              {cart.length} items in your cart
            </p>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  className="flex items-center gap-4 bg-white rounded-2xl border border-[#E8E5DA] p-4"
                  key={item.id}
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#EFEDE3] shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                        <h3 className="text-[#141412] text-base font-medium">
                            {item.name}
                        </h3>

                        <p className="text-[#141412] text-sm font-semibold mt-1">
                            Rs.{item.price} × {item.qty} = Rs.{item.price * item.qty}
                        </p>

                        <span>
                            <input
                            onChange={(e) => UpdateQuantity(item.id, Number(e.target.value))}
                            type="number"
                            value={item.qty}
                            min="1"
                            className="border-2 w-10 text-center rounded mt-2"
                            />
                        </span>
                    </div>
                  <button
                  onClick={()=> RemoveProduct(item.id)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F0EEE4] transition-colors duration-200"
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="mt-10 bg-white rounded-2xl border border-[#E8E5DA] p-6">
              <div className="flex items-center justify-between text-sm text-[#6B6A63]">
                <span>Subtotal</span>
                <span>Rs. {Total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-[#6B6A63] mt-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex items-center justify-between text-[#141412] text-base font-semibold mt-4 pt-4 border-t border-[#E8E5DA]">
                <span>Total</span>
                <span>Rs. {Total.toFixed(2)}</span>
              </div>

              <button className="mt-6 w-full py-3 rounded-full bg-[#141412] text-[#F5F3EC] text-sm font-medium tracking-wide hover:bg-[#2A2A26] transition-colors duration-200">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
