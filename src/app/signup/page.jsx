
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";  
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