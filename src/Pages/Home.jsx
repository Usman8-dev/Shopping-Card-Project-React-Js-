import React from "react";
import ProductList from "../Components/ProductList";

function Home() {
  return (
    <div className="min-h-screen bg-[#F5F3EC]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-[#141412] text-3xl font-semibold tracking-tight mb-1">
          Shop the collection
        </h1>
        <p className="text-[#6B6A63] text-sm mb-10"></p>

        <ProductList/>
      </div>
    </div>
  );
}

export default Home;
