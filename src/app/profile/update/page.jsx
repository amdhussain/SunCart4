// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { useSession, updateUser } from "@/lib/auth-client";
// import { motion } from "framer-motion";
// import toast from "react-hot-toast";

// export default function UpdateProfilePage() {
//   const router = useRouter();
//   const { data: session, isPending } = useSession();
//   const [name, setName] = useState("");
//   const [imageUrl, setImageUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     if (!isPending && !session) {
//       toast.error("Please sign in to update your profile");
//       router.push("/signin");
//     }
//   }, [session, isPending, router]);

//   useEffect(() => {
//     if (session?.user) {
//       setName(session.user.name || "");
//       setImageUrl(session.user.image || "");
//     }
//   }, [session]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     await updateUser(
//       { name, image: imageUrl || undefined },
//       {
//         onSuccess: () => {
//           toast.success("Profile updated!");
//           router.push("/profile");
//         },
//         onError: (ctx) => {
//           const msg = ctx.error.message || "Failed to update profile";
//           setError(msg);
//           toast.error(msg);
//           setLoading(false);
//         },
//       }
//     );
//   };

//   if (isPending) {
//     return (
//       <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
//         <span className="loading loading-spinner loading-lg text-primary" />
//       </div>
//     );
//   }

//   if (!session) return null;

//   return (
//     <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="card w-full max-w-md bg-base-100 shadow-xl"
//       >
//         <div className="card-body p-8">
//           <div className="text-center mb-6">
//             <div className="text-4xl mb-3">☀️</div>
//             <h2 className="text-2xl font-bold">Update Information</h2>
//             <p className="text-base-content/60 text-sm mt-1">
//               Keep your profile up to date
//             </p>
//           </div>

//           {error && (
//             <div className="alert alert-error text-sm mb-4 py-2.5">
//               <span>☀️</span>
//               <span>{error}</span>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <label className="form-control w-full">
//               <span className="label-text font-medium">Image URL</span>
//               <input
//                 type="text"
//                 placeholder="https://example.com/photo.jpg"
//                 value={imageUrl}
//                 onChange={(e) => setImageUrl(e.target.value)}
//                 className="input input-bordered w-full mt-1"
//               />
//             </label>

//             <label className="form-control w-full">
//               <span className="label-text font-medium">Name</span>
//               <input
//                 type="text"
//                 placeholder="Your name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="input input-bordered w-full mt-1"
//                 required
//               />
//             </label>

//             <button
//               type="submit"
//               className="btn btn-primary w-full"
//               disabled={loading}
//             >
//               {loading ? (
//                 <span className="loading loading-spinner loading-sm" />
//               ) : (
//                 "Update Information"
//               )}
//             </button>
//           </form>
//         </div>
//       </motion.div>
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// ইমপোর্ট ঠিক করা হয়েছে:
import { authClient } from "@/lib/auth-client"; 
const { useSession, updateUser } = authClient;

import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please sign in to update your profile");
      router.push("/signin");
    }
  }, [session, isPending, router]);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImageUrl(session.user.image || "");
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // এখানে updateUser সঠিকভাবে কাজ করবে
    await updateUser(
      { name, image: imageUrl || undefined },
      {
        onSuccess: () => {
          toast.success("Profile updated!");
          router.push("/profile");
        },
        onError: (ctx) => {
          const msg = ctx.error.message || "Failed to update profile";
          setError(msg);
          toast.error(msg);
          setLoading(false);
        },
      }
    );
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card w-full max-w-md bg-base-100 shadow-xl"
      >
        <div className="card-body p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">☀️</div>
            <h2 className="text-2xl font-bold">Update Information</h2>
            <p className="text-base-content/60 text-sm mt-1">
              Keep your profile up to date
            </p>
          </div>

          {error && (
            <div className="alert alert-error text-sm mb-4 py-2.5">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="form-control w-full">
              <span className="label-text font-medium">Image URL</span>
              <input
                type="text"
                placeholder="https://example.com/photo.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="input input-bordered w-full mt-1"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text font-medium">Name</span>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input input-bordered w-full mt-1"
                required
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                "Update Information"
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}