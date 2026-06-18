// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// // import { signUp, signIn } from "@/lib/auth-client";
// import { authClient } from "@/lib/auth-client";
// import toast from "react-hot-toast";

// export default function SignUpPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [googleLoading, setGoogleLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     await signUp.email(
//       { name, email, password, image: photoUrl || undefined },
//       {
//         onSuccess: () => {
//           toast.success("Account created! Please sign in.");
//           router.push("/signin");
//         },
//         onError: (ctx) => {
//           const msg = ctx.error.message || "Something went wrong";
//           setError(msg);
//           toast.error(msg);
//           setLoading(false);
//         },
//       }
//     );
//   };

//   const handleGoogleSignIn = async () => {
//     setGoogleLoading(true);
//     setError("");
//     await signIn.social(
//       { provider: "google", callbackURL: "/" },
//       {
//         onError: (ctx) => {
//           const msg = ctx.error.message || "Google sign-in failed";
//           setError(msg);
//           toast.error(msg);
//           setGoogleLoading(false);
//         },
//       }
//     );
//   };

//   return (
//     <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
//       <div className="card w-full max-w-md bg-base-100 shadow-xl">
//         <div className="card-body p-8">
//           <div className="text-center mb-8">
//             <div className="text-4xl mb-3">☀️</div>
//             <h2 className="text-2xl font-bold">Create Your Account</h2>
//             <p className="text-base-content/60 text-sm mt-1">
//               Join SunCart and stay sun-safe
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
//               <span className="label-text font-medium">Name</span>
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="input input-bordered w-full mt-1"
//                 required
//               />
//             </label>

//             <label className="form-control w-full">
//               <span className="label-text font-medium">Email</span>
//               <input
//                 type="email"
//                 placeholder="your@email.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="input input-bordered w-full mt-1"
//                 required
//               />
//             </label>

//             <label className="form-control w-full">
//               <span className="label-text font-medium">Photo URL</span>
//               <input
//                 type="text"
//                 placeholder="https://example.com/photo.jpg"
//                 value={photoUrl}
//                 onChange={(e) => setPhotoUrl(e.target.value)}
//                 className="input input-bordered w-full mt-1"
//               />
//             </label>

//             <label className="form-control w-full">
//               <span className="label-text font-medium">Password</span>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="input input-bordered w-full mt-1"
//                 required
//                 minLength={8}
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
//                 "Register"
//               )}
//             </button>
//           </form>

//           <div className="divider text-xs text-base-content/40 my-6">
//             or continue with
//           </div>

//           <button
//             type="button"
//             onClick={handleGoogleSignIn}
//             className="btn btn-outline w-full gap-2"
//             disabled={googleLoading}
//           >
//             {googleLoading ? (
//               <span className="loading loading-spinner loading-sm" />
//             ) : (
//               <>
//                 <svg className="w-5 h-5" viewBox="0 0 24 24">
//                   <path
//                     fill="#4285F4"
//                     d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
//                   />
//                   <path
//                     fill="#34A853"
//                     d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                   />
//                   <path
//                     fill="#FBBC05"
//                     d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                   />
//                   <path
//                     fill="#EA4335"
//                     d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                   />
//                 </svg>
//                 Continue with Google
//               </>
//             )}
//           </button>

//           <p className="text-center text-sm text-base-content/60 mt-6">
//             Already have an account?{" "}
//             <Link
//               href="/signin"
//               className="link link-primary font-medium"
//             >
//               Login here
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; // শুধু এটিই যথেষ্ট
import toast from "react-hot-toast";

export default function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // সঠিক মেথড: authClient.signUp.email
    await authClient.signUp.email(
      { 
        name, 
        email, 
        password, 
        image: photoUrl || undefined 
      },
      {
        onSuccess: () => {
          toast.success("Account created! Please sign in.");
          router.push("/signin");
        },
        onError: (ctx) => {
          const msg = ctx.error.message || "Something went wrong";
          setError(msg);
          toast.error(msg);
          setLoading(false);
        },
      }
    );
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setError("");

    // সঠিক মেথড: authClient.signIn.social
    await authClient.signIn.social(
      { provider: "google", callbackURL: "/" },
      {
        onError: (ctx) => {
          const msg = ctx.error.message || "Google sign-in failed";
          setError(msg);
          toast.error(msg);
          setGoogleLoading(false);
        },
      }
    );
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-3">☀️</div>
            <h2 className="text-2xl font-bold">Create Your Account</h2>
          </div>

          {error && (
            <div className="alert alert-error text-sm mb-4 py-2.5">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
              required
              minLength={8}
            />
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? <span className="loading loading-spinner" /> : "Register"}
            </button>
          </form>

          <div className="divider">or</div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="btn btn-outline w-full"
            disabled={googleLoading}
          >
            {googleLoading ? "Loading..." : "Continue with Google"}
          </button>
        </div>
      </div>
    </div>
  );
}