export default function FinancialReadinessSection() {
  return (
    <section className="bg-white px-6 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-black">
            Most people are financially active
          </h2>
          <p className="mt-4 text-lg text-black/70">
            Very few are financially ready.
          </p>
        </div>

        {/* Right cards */}
        <div className="space-y-6">
          {[
            {
              title: "People earn.",
              text: "Cash flow creates the illusion of stability.",
            },
            {
              title: "People spend.",
              text: "Transactions hide structural weakness.",
            },
            {
              title: "People invest.",
              text: "Markets move. Readiness is rarely measured.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-black">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-black/60">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quote section */}
      <div className="relative mx-auto mt-28 max-w-6xl">
        {/* Background quote mark */}
        <span className="pointer-events-none absolute -top-16 -left-10 
          text-[120px] sm:text-[160px] md:text-[220px]
          font-bold text-emerald-400/10 leading-none">
          “
        </span>

        {/* Foreground quote text */}
        <p className="relative z-10 font-semibold text-emerald-400 leading-tight
          text-4xl sm:text-5xl md:text-6xl">
          <span className="block">
            What isn’t measured is assumed.
          </span>
          <span className="block">
            Assumptions fail under pressure.
          </span>
        </p>
      </div>
    </section>
  );
}
