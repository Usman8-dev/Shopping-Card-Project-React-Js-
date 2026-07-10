import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Aria 14 Laptop",
      price: 65000,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop",
    },
    {
      id: 2,
      name: "Pulse Wireless Headphones",
      price: 1700,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    },
    {
      id: 3,
      name: "Nova Smartphone",
      price: 8990,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
    },
    {
      id: 4,
      name: "Orbit Smartwatch",
      price: 2490,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    },
    {
      id: 5,
      name: "Lumen Mirrorless Camera",
      price: 9999,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=600&fit=crop",
    },
    {
      id: 6,
      name: "Trail Daypack",
      price: 2890,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
