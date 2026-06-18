export default function PricingPage() {
  const plans = [
    { name: "Free", price: "$0", features: ["10 downloads/month", "Basic quality", "Community access"] },
    { name: "Pro", price: "$9.99", features: ["Unlimited downloads", "HD quality", "Priority support", "Commercial use"] },
    { name: "Enterprise", price: "$29.99", features: ["Everything in Pro", "4K quality", "API access", "Team collaboration"] },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Pricing</h1>
        <p className="text-base-content/60">Choose the perfect plan for your needs</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="card bg-base-100 shadow-xl border border-base-200">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-2xl">{plan.name}</h2>
              <p className="text-4xl font-bold text-primary my-4">{plan.price}</p>
              <ul className="space-y-2 w-full">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-base-content/70 flex items-center gap-2">
                    <span className="text-success">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary w-full mt-6">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
