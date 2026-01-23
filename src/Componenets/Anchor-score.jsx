export default function AnchorScoreMeasures() {
  return (
    <section className="relative overflow-hidden px-6 py-28 bg-gradient-to-b from-emerald-50/60 to-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-black">
            What Anchor Score measures
          </h2>
          <p className="mt-3 font-bold text-lg text-black/70">
            Three inputs define readiness:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Income */}
          <div className="relative rounded-2xl bg-white/60 backdrop-blur border border-emerald-100 p-8 shadow-sm">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xl">
              <img src="/money-recive.png" alt="" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black text-center">
              Income
            </h3>
            <ul className="mt-4 space-y-2 font-bold  text-sm text-black/70 text-center">
              <li>Dependence on continued cash flow</li>
              <li>Concentration</li>
              <li>Stability</li>
            </ul>
          </div>

          {/* Expenses */}
          <div className="relative rounded-2xl bg-white/60 backdrop-blur border border-emerald-100 p-8 shadow-sm">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xl">
                        <img src="/money-send.png" alt="" />

            </div>
            <h3 className="mt-6 text-xl font-semibold text-black text-center">
              Expenses
            </h3>
            <ul className="mt-4 space-y-2  font-bold text-sm text-black/70 text-center">
              <li>Essential monthly outflow</li>
              <li>Fixed obligations</li>
              <li>Non-negotiables</li>
            </ul>
          </div>

          {/* Savings */}
          <div className="relative rounded-2xl bg-white/60 backdrop-blur border border-emerald-100 p-8 shadow-sm">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xl">
                   <img src="/wallet.png" alt="" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-black text-center">
              Savings
            </h3>
            <ul className="mt-4 space-y-2  font-bold text-sm text-black/70 text-center">
              <li>Available liquidity</li>
              <li>Emergency reserves</li>
              <li>Liquid assets</li>
            </ul>
          </div>
        </div>

        {/* Quote */}
        <div className="relative mt-24">
          <span className="absolute -top-14 -left-4 text-[140px] sm:text-[180px] font-bold text-emerald-400/15 leading-none pointer-events-none">
            “
          </span>
          <p className="relative z-10 text-3xl sm:text-4xl font-semibold text-emerald-500 leading-tight">
            Together, they determine your financial runway.
          </p>
        </div>
      </div>
    </section>
  );
}
