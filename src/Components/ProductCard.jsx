import React from 'react'
import { useCart } from '../Context/CartContext'

function ProductCard({items}) {
    const { AddtoCart } = useCart();
  return (
    <div>
          <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8E5DA] hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square overflow-hidden bg-[#EFEDE3]">
              <img
                src={items.image}
                alt="Aria 14 Laptop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              {/* <span className="text-[#C9A15C] text-[11px] font-semibold uppercase tracking-wide">
                Computers
              </span> */}
              <h3 className="text-[#141412] text-base font-medium mt-1">
                {items.name}
              </h3>
              <p className="text-[#141412] text-sm font-semibold mt-2">
                Rs.{items.price}
              </p>

              <button
              onClick={()=> AddtoCart(items)}
              className="mt-3 w-full py-2 rounded-full bg-[#1546e4] text-[#F5F3EC] text-sm font-medium tracking-wide hover:bg-[#3622b6] transition-colors duration-200 cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
    </div>
  )
}

export default ProductCard
