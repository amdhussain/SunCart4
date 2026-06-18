"use client";

import { useEffect, useState } from "react";
import PhotoCard from "@/components/PhotoCard";

export default function AllPhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then(setPhotos);
  }, []);

  const categories = [
    "All",
    ...new Set(photos.map((p) => p.category)),
  ];

  const filtered =
    category === "All"
      ? photos
      : photos.filter((p) => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-base-content/60">Summer essentials for every occasion</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`btn btn-sm ${
              category === cat ? "btn-primary" : "btn-ghost"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((photo, i) => (
          <PhotoCard key={photo.id} photo={photo} index={i} />
        ))}
      </div>
    </div>
  );
}



 