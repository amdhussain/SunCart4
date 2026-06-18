"use client";

export default function Marquee() {
  const items = [
    "BEACH ESSENTIALS",
    "FREE SHIPPING",
    "LIMITED TIME",
    "NEW ARRIVALS",
    "SHOP NOW",
    "BEST SELLERS",
    "SUMMER DEALS",
    "FLASH SALE",
  ];

  // Duplicate for seamless infinite scroll
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-yellow-400 border-y border-yellow-500 py-3">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-yellow-900 font-bold text-sm sm:text-base tracking-widest uppercase flex items-center gap-12"
          >
            {item}
            <span className="text-yellow-600 opacity-50">✦</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
