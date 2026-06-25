 
// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { authClient } from "@/lib/auth-client";  
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// /**
//  * @typedef {Object} Product
//  * @property {number} id
//  * @property {string} name
//  * @property {string} brand
//  * @property {number} price
//  * @property {number} rating
//  * @property {number} stock
//  * @property {string} description
//  * @property {string} image
//  * @property {string} category
//  */

// export default function ProductDetailPage() {
//   const { id } = useParams();
//   const router = useRouter();
  
//   const { data: session, isPending } = authClient.useSession();
  
//   /** @type {[Product | null, (value: Product | null) => void]} */
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (typeof id !== "string") return;
//     fetch("/data.json")
//       .then((r) => r.json())
//       .then((/** @type {Product[]} */ all) => setProduct(all.find((p) => p.id === Number(id)) ?? null));
//   }, [id]);

//   useEffect(() => {
//     if (!isPending && !session) {
//       toast.error("Please sign in to view product details");
//       const callbackUrl = `/products/${id}`;
//       router.push(`/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`);
//     }
//   }, [session, isPending, router, id]);

//   if (isPending || !product) {
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
//         <span className="loading loading-spinner loading-lg text-primary" />
//       </div>
//     );
//   }

//   if (!session) return null;

//   return (
//     <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="max-w-5xl w-full"
//       >
//         <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
//           <div className="relative">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-80 md:h-full object-cover rounded-2xl shadow-xl"
//             />
//             {product.stock <= 10 && (
//               <span className="absolute top-4 left-4 badge badge-error text-white font-medium px-4 py-3">
//                 Low Stock
//               </span>
//             )}
//           </div>

//           <div className="flex flex-col justify-center space-y-6">
//             <div>
//               <p className="text-sm text-base-content/60 uppercase tracking-wider mb-1">
//                 {product.brand}
//               </p>
//               <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
//             </div>

//             <span className="badge badge-lg badge-outline w-fit">{product.category}</span>

//             <div className="flex items-center gap-4">
//               <span className="text-4xl font-bold text-primary">
//                 ${product.price.toFixed(2)}
//               </span>
//               <span className="text-base-content/50 text-sm">
//                 {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
//               </span>
//             </div>

//             <div className="flex items-center gap-1.5">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <span
//                   key={i}
//                   className={`text-xl ${
//                     i < Math.round(product.rating)
//                       ? "text-yellow-500"
//                       : "text-base-content/20"
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//               <span className="ml-2 font-medium">{product.rating}</span>
//               <span className="text-base-content/40">/ 5.0</span>
//             </div>

//             <p className="text-base-content/70 leading-relaxed text-base">
//               {product.description}
//             </p>

//             <button className="btn btn-primary btn-lg w-full sm:w-auto px-12 text-lg">
//               Buy Now — ${product.price.toFixed(2)}
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";  
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const { data: session, isPending } = authClient.useSession();
  
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((all) => setProduct(all.find((p) => p.id === Number(id)) || null));
  }, [id]);

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please sign in to view product details");
      const callbackUrl = `/products/${id}`;
      router.push(`/signin?callbackUrl=${encodeURIComponent(callbackUrl)}`);
    }
  }, [session, isPending, router, id]);

  if (isPending || !product) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl w-full"
      >
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

            <span className="badge badge-lg badge-outline w-fit">{product.category}</span>

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
      </motion.div>
    </div>
  );
}