"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PhotoCard from "./PhotoCard";

export default function TopGenerations() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((data) => setPhotos(data.filter((p) => p.rating >= 4.5).slice(0, 4)));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Top Rated</h2>
          <p className="text-base-content/60">Highest-rated summer picks this week</p>
        </div>
        <Link href="/all-photos" className="btn btn-outline btn-sm">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {photos.map((photo, i) => (
          <PhotoCard key={photo.id} photo={photo} index={i} />
        ))}
      </div>
    </section>
  );
}
