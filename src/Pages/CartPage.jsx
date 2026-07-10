import React from 'react'

function CardsPage() {
  return (
     <div className="min-h-screen bg-[#F5F3EC]">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-[#141412] text-3xl font-semibold tracking-tight mb-1">
          Your Cart
        </h1>
        <p className="text-[#6B6A63] text-sm mb-10">
          3 items in your cart
        </p>
 
        <div className="space-y-4">
 
          {/* Item 1 — Laptop */}
          <div className="flex items-center gap-4 bg-white rounded-2xl border border-[#E8E5DA] p-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#EFEDE3] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200&h=200&fit=crop"
                alt="Aria 14 Laptop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[#141412] text-base font-medium">
                Aria 14 Laptop
              </h3>
              <p className="text-[#6B6A63] text-xs mt-0.5">Qty: 1</p>
              <p className="text-[#141412] text-sm font-semibold mt-1">
                $1,299
              </p>
            </div>
            <button
              aria-label="Remove Aria 14 Laptop from cart"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F0EEE4] transition-colors duration-200"
            >❌
             
            </button>
          </div>
 
          {/* Item 2 — Headphones */}
          <div className="flex items-center gap-4 bg-white rounded-2xl border border-[#E8E5DA] p-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#EFEDE3] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop"
                alt="Pulse Wireless Headphones"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[#141412] text-base font-medium">
                Pulse Wireless Headphones
              </h3>
              <p className="text-[#6B6A63] text-xs mt-0.5">Qty: 1</p>
              <p className="text-[#141412] text-sm font-semibold mt-1">
                $179
              </p>
            </div>
            <button
              aria-label="Remove Pulse Wireless Headphones from cart"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F0EEE4] transition-colors duration-200"
            >❌
              
            </button>
          </div>
 
          {/* Item 3 — Smartwatch */}
          <div className="flex items-center gap-4 bg-white rounded-2xl border border-[#E8E5DA] p-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#EFEDE3] shrink-0">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop"
                alt="Orbit Smartwatch"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[#141412] text-base font-medium">
                Orbit Smartwatch
              </h3>
              <p className="text-[#6B6A63] text-xs mt-0.5">Qty: 1</p>
              <p className="text-[#141412] text-sm font-semibold mt-1">
                $249
              </p>
            </div>
            <button
              aria-label="Remove Orbit Smartwatch from cart"
              className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#F0EEE4] transition-colors duration-200"
            >❌
   
            </button>
          </div>
 
        </div>
 
        {/* Order summary */}
        <div className="mt-10 bg-white rounded-2xl border border-[#E8E5DA] p-6">
          <div className="flex items-center justify-between text-sm text-[#6B6A63]">
            <span>Subtotal</span>
            <span>$1,727</span>
          </div>
          <div className="flex items-center justify-between text-sm text-[#6B6A63] mt-2">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex items-center justify-between text-[#141412] text-base font-semibold mt-4 pt-4 border-t border-[#E8E5DA]">
            <span>Total</span>
            <span>$1,727</span>
          </div>
 
          <button className="mt-6 w-full py-3 rounded-full bg-[#141412] text-[#F5F3EC] text-sm font-medium tracking-wide hover:bg-[#2A2A26] transition-colors duration-200">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardsPage
