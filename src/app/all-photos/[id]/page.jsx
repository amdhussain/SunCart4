// "use client";

// import { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { useSession } from "@/lib/auth-client";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// export default function PhotoDetailPage() {
//   const { id } = useParams();
//   const router = useRouter();
//   const { data: session, isPending } = useSession();
//   const [photo, setPhoto] = useState(null);

//   useEffect(() => {
//     fetch("/data.json")
//       .then((r) => r.json())
//       .then((all) => setPhoto(all.find((p) => p.id === Number(id))));
//   }, [id]);

//   useEffect(() => {
//     if (!isPending && !session) {
//       toast.error("Please sign in to view details");
//       router.push("/signin");
//     }
//   }, [session, isPending, router]);

//   if (isPending || !photo) {
//     return (
//       <div className="flex justify-center py-20">
//         <span className="loading loading-spinner loading-lg text-primary" />
//       </div>
//     );
//   }

//   if (!session) return null;

//   return (
//     <div className="max-w-4xl mx-auto px-4 py-8">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="grid md:grid-cols-2 gap-8"
//       >
//         <div className="relative">
//           <img
//             src={photo.image}
//             alt={photo.name}
//             className="w-full rounded-xl shadow-lg"
//           />
//           {photo.stock <= 10 && (
//             <span className="absolute top-4 left-4 badge badge-error text-white font-medium px-4 py-3">
//               Low Stock
//             </span>
//           )}
//         </div>

//         <div className="space-y-6">
//           <div>
//             <p className="text-sm text-base-content/60 uppercase tracking-wider mb-1">
//               {photo.brand}
//             </p>
//             <h1 className="text-3xl font-bold">{photo.name}</h1>
//           </div>

//           <span className="badge badge-lg">{photo.category}</span>

//           <div className="flex items-center gap-4">
//             <span className="text-3xl font-bold text-primary">
//               ${photo.price.toFixed(2)}
//             </span>
//             <span className="badge badge-ghost badge-lg">
//               {photo.stock} in stock
//             </span>
//           </div>

//           <div className="flex items-center gap-2">
//             <span className="text-yellow-500 text-lg">★</span>
//             <span className="font-medium text-lg">{photo.rating}</span>
//             <span className="text-base-content/40">/ 5.0</span>
//           </div>

//           <p className="text-base-content/70 leading-relaxed">
//             {photo.description}
//           </p>

//           <button className="btn btn-primary btn-lg w-full md:w-auto px-12">
//             Add to Cart — ${photo.price.toFixed(2)}
//           </button>
//         </div>
//       </motion.div>
//     </div>
//   );
// }






"use client";

import { useEffect, useState } from "react";
import PhotoCard from "@/components/PhotoCard";

export default function AllPhotosPage() {
  const [photos, setPhotos] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true); // লোডিং স্টেট যোগ করা হয়েছে

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading photos:", err);
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...new Set(photos.map((p) => p.category))];

  const filtered =
    category === "All"
      ? photos
      : photos.filter((p) => p.category === category);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-base-content/60">Summer essentials for every occasion</p>
      </div>

      {/* Categories Filter */}
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

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((photo, i) => (
          <PhotoCard key={photo.id} photo={photo} index={i} />
        ))}
      </div>
    </div>
  );
}
