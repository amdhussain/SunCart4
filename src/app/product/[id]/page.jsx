import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function ProductDetailPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const { id } = await params;
  const filePath = path.join(process.cwd(), "public", "data.json");
  const data = await fs.readFile(filePath, "utf8");
  const products = JSON.parse(data);
  const product = products.find((p) => p.id === Number(id));

  if (!product) notFound();

  return (
    <div className="min-h-[calc(100vh-8rem)] px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/all-photos"
          className="btn btn-ghost btn-sm mb-6 gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
          Back to Products
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 md:h-full object-cover rounded-2xl shadow-xl"
            />
            {product.stock <= 10 && (
              <span className="absolute top-4 left-4 badge badge-error text-white font-medium px-4 py-3">
                Low Stock
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="text-sm text-base-content/60 uppercase tracking-wider mb-1">
                {product.brand}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
            </div>

            <span className="badge badge-lg badge-outline w-fit">
              {product.category}
            </span>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-primary">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-base-content/50 text-sm">
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-xl ${
                    i < Math.round(product.rating)
                      ? "text-yellow-500"
                      : "text-base-content/20"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="ml-2 font-medium">{product.rating}</span>
              <span className="text-base-content/40">/ 5.0</span>
            </div>

            <p className="text-base-content/70 leading-relaxed text-base">
              {product.description}
            </p>

            <button className="btn btn-primary btn-lg w-full sm:w-auto px-12 text-lg">
              Buy Now — ${product.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
