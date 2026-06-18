"use client";

import { useEffect, useState } from "react";

export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((r) => r.json())
      .then(setCategories);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">Categories</h2>
        <p className="text-base-content/60">Browse by category</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((cat) => (
          <div key={cat.id} className="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-shadow cursor-pointer">
            <div className="card-body items-center py-6">
              <span className="text-3xl mb-1">📷</span>
              <h3 className="font-medium text-sm">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
