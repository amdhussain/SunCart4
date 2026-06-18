"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function PopularProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((data) => setProducts(data.slice(0, 3)));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Popular Products</h2>
        <p className="text-base-content/60 max-w-md mx-auto">
          Our customers&apos; top picks this summer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            href={`/all-photos/${product.id}`}
          />
        ))}
      </div>
    </section>
  );
}
