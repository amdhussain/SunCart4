"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 text-white overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center">
      {/* Decorative sun */}
      <div className="absolute -top-16 -right-16 md:-top-24 md:-right-24 w-64 h-64 md:w-96 md:h-96 rounded-full bg-yellow-300 opacity-30 blur-3xl" />
      <div className="absolute top-10 right-10 md:top-16 md:right-20 text-6xl md:text-9xl opacity-20 select-none">
        ☀️
      </div>

      {/* Beach wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          className="w-full h-full text-base-100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
            fill="currentColor"
            opacity="0.15"
          />
          <path
            d="M0 80C240 110 480 50 720 80C960 110 1200 50 1440 80V120H0V80Z"
            fill="currentColor"
            opacity="0.25"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                HOT DEALS 🔥
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-2"
            >
              SUMMER
              <br />
              <span className="text-yellow-200">SALE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-300 mb-6"
            >
              50% OFF
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base md:text-lg text-orange-100 max-w-md mb-8"
            >
              Don&apos;t miss out on the biggest summer sale of the year. Grab
              your essentials before they&apos;re gone!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/all-photos"
                className="btn btn-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 font-bold text-lg px-10 shadow-lg shadow-orange-600/30 hover:shadow-xl hover:shadow-orange-600/40 transition-all"
              >
                SHOP NOW →
              </Link>
            </motion.div>
          </div>

          {/* Right decorative elements */}
          <div className="hidden md:flex flex-1 items-center justify-center relative">
            <div className="relative w-72 h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-yellow-300/20 blur-2xl" />
              <div className="absolute inset-4 rounded-full bg-amber-400/20 blur-xl" />
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-8xl lg:text-9xl block">🏖️</span>
                  <p className="text-yellow-200 font-semibold text-sm mt-2 tracking-wider">
                    BEACH READY
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
