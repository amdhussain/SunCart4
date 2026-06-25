"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PhotoCard({ photo, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="card card-compact bg-base-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-base-200"
    >
      <figure className="aspect-square overflow-hidden">
        <img
          src={photo.image}
          alt={photo.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="card-title text-base truncate">{photo.name}</h3>
            <p className="text-xs text-base-content/60 uppercase tracking-wider">
              {photo.brand}
            </p>
          </div>
          <span className="badge badge-sm whitespace-nowrap">
            {photo.stock} left
          </span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-bold text-primary">
            ${photo.price.toFixed(2)}
          </span>
          <span className="text-sm flex items-center gap-1">
            <span className="text-yellow-500">★</span>
            {photo.rating}
          </span>
        </div>
        <div className="mt-auto pt-4">
          <Link
            href={`/product/${photo.id}`}
            className="btn btn-primary btn-sm w-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
