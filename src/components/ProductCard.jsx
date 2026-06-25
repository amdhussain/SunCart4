"use client";

import Link from "next/link";

export default function ProductCard({ product, index = 0, href }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all border border-base-200 overflow-hidden group flex flex-col">
      <figure className="relative aspect-[4/3] overflow-hidden bg-base-200">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        {index === 0 && (
          <span className="absolute top-3 left-3 badge badge-warning text-white font-medium text-xs">
            #1 BESTSELLER
          </span>
        )}
      </figure>

      <div className="card-body p-5 flex flex-col flex-1">
        <p className="text-xs text-base-content/50 uppercase tracking-wider font-medium">
          {product.brand}
        </p>

        <h3 className="card-title text-lg font-bold truncate">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, s) => (
            <span
              key={s}
              className={
                s < Math.round(product.rating)
                  ? "text-yellow-400 text-sm"
                  : "text-base-300 text-sm"
              }
            >
              ★
            </span>
          ))}
          <span className="text-xs text-base-content/50 ml-1">
            ({product.rating})
          </span>
        </div>

        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-base-content/50">
            {product.stock} left
          </span>
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={href || `/product/${product.id}`}
            className="btn btn-primary btn-sm w-full hover:bg-orange-600 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path
                fillRule="evenodd"
                d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                clipRule="evenodd"
              />
            </svg>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
