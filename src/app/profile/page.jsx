 
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
 
import { authClient } from "@/lib/auth-client"; 
const { useSession } = authClient;

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import shoppingAnimation from "../../../public/lottie/shopping.json";

export default function ProfilePage() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  useEffect(() => {
    if (!isPending && !session) {
      toast.error("Please sign in to view your profile");
      router.push("/signin");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (!session) return null;

  const { user } = session;

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card w-full max-w-lg bg-base-100 shadow-xl"
      >
        <div className="card-body p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">☀️</div>
            <h2 className="text-2xl font-bold">My Profile</h2>
            <p className="text-base-content/60 text-sm mt-1">
              Welcome back, {user.name}
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-40 h-40">
              <Lottie animationData={shoppingAnimation} loop autoplay />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-base-200 rounded-xl">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  <img
                    src={
                      user.image ||
                      `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`
                    }
                    alt={user.name}
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-normal text-lg truncate">{user.name}</h3>
                <p className="text-base-content/60 text-sm truncate">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="stats shadow w-full">
              <div className="stat">
                <div className="stat-title">Name</div>
                <div className="text-lg truncate">{user.name}</div>
              </div>
            </div>

            <div className="stats shadow w-full">
              <div className="stat">
                <div className="stat-title">Email</div>
                <div className="text-lg truncate">{user.email}</div>
              </div>
            </div>
          </div>

          <Link href="/profile/update" className="btn btn-primary w-full mt-6">
            Update Information
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
