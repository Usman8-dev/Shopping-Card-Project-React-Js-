import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3EC]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-[#141412] text-3xl font-semibold tracking-tight mb-1">
          Shop the collection
        </h1>
        <p className="text-[#6B6A63] text-sm mb-10"></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 — Laptop */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8E5DA] hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square overflow-hidden bg-[#EFEDE3]">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop"
                alt="Aria 14 Laptop"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-[#C9A15C] text-[11px] font-semibold uppercase tracking-wide">
                Computers
              </span>
              <h3 className="text-[#141412] text-base font-medium mt-1">
                Aria 14 Laptop
              </h3>
              <p className="text-[#141412] text-sm font-semibold mt-2">
                $1,299
              </p>
            </div>
          </div>

          {/* Card 2 — Headphones */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8E5DA] hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square overflow-hidden bg-[#EFEDE3]">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"
                alt="Pulse Wireless Headphones"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-[#C9A15C] text-[11px] font-semibold uppercase tracking-wide">
                Audio
              </span>
              <h3 className="text-[#141412] text-base font-medium mt-1">
                Pulse Wireless Headphones
              </h3>
              <p className="text-[#141412] text-sm font-semibold mt-2">$179</p>
            </div>
          </div>

          {/* Card 3 — Smartphone */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8E5DA] hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square overflow-hidden bg-[#EFEDE3]">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop"
                alt="Nova Smartphone"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-[#C9A15C] text-[11px] font-semibold uppercase tracking-wide">
                Phones
              </span>
              <h3 className="text-[#141412] text-base font-medium mt-1">
                Nova Smartphone
              </h3>
              <p className="text-[#141412] text-sm font-semibold mt-2">$899</p>
            </div>
          </div>

          {/* Card 4 — Smartwatch */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8E5DA] hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square overflow-hidden bg-[#EFEDE3]">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop"
                alt="Orbit Smartwatch"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-[#C9A15C] text-[11px] font-semibold uppercase tracking-wide">
                Wearables
              </span>
              <h3 className="text-[#141412] text-base font-medium mt-1">
                Orbit Smartwatch
              </h3>
              <p className="text-[#141412] text-sm font-semibold mt-2">$249</p>
            </div>
          </div>

          {/* Card 5 — Camera */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8E5DA] hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square overflow-hidden bg-[#EFEDE3]">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop"
                alt="Lumen Mirrorless Camera"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-[#C9A15C] text-[11px] font-semibold uppercase tracking-wide">
                Cameras
              </span>
              <h3 className="text-[#141412] text-base font-medium mt-1">
                Lumen Mirrorless Camera
              </h3>
              <p className="text-[#141412] text-sm font-semibold mt-2">
                $1,049
              </p>
            </div>
          </div>

          {/* Card 6 — Backpack */}
          <div className="group bg-white rounded-2xl overflow-hidden border border-[#E8E5DA] hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square overflow-hidden bg-[#EFEDE3]">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop"
                alt="Trail Daypack"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <span className="text-[#C9A15C] text-[11px] font-semibold uppercase tracking-wide">
                Bags
              </span>
              <h3 className="text-[#141412] text-base font-medium mt-1">
                Trail Daypack
              </h3>
              <p className="text-[#141412] text-sm font-semibold mt-2">$89</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
