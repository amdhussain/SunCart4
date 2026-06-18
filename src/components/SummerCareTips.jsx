export default function SummerCareTips() {
  const tips = [
    {
      icon: "🧴",
      title: "Skincare Essentials",
      advice:
        "Use a lightweight, oil-free moisturizer with SPF 30+ daily. Reapply every two hours when outdoors and after swimming to keep your skin protected and hydrated.",
    },
    {
      icon: "💧",
      title: "Hydration Tips",
      advice:
        "Drink at least 8–10 glasses of water a day in summer. Add electrolyte drops or infuse with lemon and mint to replenish minerals lost through sweat.",
    },
    {
      icon: "🕶️",
      title: "Sun Protection",
      advice:
        "Wear broad-spectrum SPF 50 sunscreen, a wide-brim hat, and UV400 sunglasses. Seek shade between 10 AM and 4 PM when UV rays are strongest.",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            ☀️ Summer Care Tips
          </h2>
          <p className="text-base-content/60 max-w-md mx-auto">
            Stay safe and glowing all season long
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="card bg-white shadow-md hover:shadow-lg transition-all border border-amber-100"
            >
              <div className="card-body p-6">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="card-title text-lg font-bold mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-base-content/70 leading-relaxed">
                  {tip.advice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
