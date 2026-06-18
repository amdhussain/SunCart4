export default function TopBrands() {
  const brands = [
    { name: "SunRay", tagline: "Premium Eyewear & Accessories", color: "from-orange-400 to-red-500" },
    { name: "IslandWear", tagline: "Tropical Fashion & Swimwear", color: "from-sky-400 to-teal-500" },
    { name: "Coastal", tagline: "Sun Care & Beach Essentials", color: "from-cyan-400 to-blue-500" },
    { name: "SunCart", tagline: "Your Summer Superstore", color: "from-amber-400 to-yellow-500" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Top Brands</h2>
        <p className="text-base-content/60 max-w-md mx-auto">
          Trusted names for your summer essentials
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="card bg-base-100 shadow-sm hover:shadow-lg transition-all border border-base-200 hover:-translate-y-1 duration-300"
          >
            <div
              className={`bg-gradient-to-br ${brand.color} rounded-t-2xl h-24 flex items-center justify-center`}
            >
              <span className="text-4xl font-black text-white tracking-tight drop-shadow-md">
                {brand.name}
              </span>
            </div>
            <div className="card-body items-center text-center p-5">
              <p className="text-xs text-base-content/50 uppercase tracking-wider font-medium">
                {brand.tagline}
              </p>
              <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-yellow-400 text-xs">★</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
