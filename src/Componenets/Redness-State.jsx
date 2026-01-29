export default function ReadinessStates() {
  return (
    <section className="bg-gray-100 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="mb-16 text-3xl sm:text-4xl font-semibold text-black">
          Readiness exists in states.
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fragile */}
          <div className="rounded-xl border border-black/5 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-red-500">
              Fragile (50 - 224)
            </h3>
            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              Financially vulnerable at high-risk. Struggles to cover basic
              expenses, heavily exposed to emergencies or income shocks, and is
              highly exposed to emergencies or income shocks.
            </p>
          </div>

          {/* Cautious */}
          <div className="rounded-xl border border-black/5 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-orange-500">
              Cautious (225 — 450)
            </h3>
            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              Limited financial buffer. Has minimal savings cushion but lacks
              protection against major setbacks.
            </p>
          </div>

          {/* Stable */}
          <div className="rounded-xl border border-black/5 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-yellow-500">
              Stable (451-700)
            </h3>
            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              Moderate financial stability. Has several months of cushion to
              handle routine disruptions.
            </p>
          </div>

          {/* Secure */}
          <div className="rounded-xl border border-black/5 bg-white p-8 shadow-sm ">
            <h3 className="text-lg font-semibold text-emerald-500">
              Secure (701-850)
            </h3>
            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              Strong financial position. Well-protected with substantial
              reserves for major challenges.
            </p>
          </div>

          {/* Resilient */}
          <div className="rounded-xl border border-black/5 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-green-600">
              Resilient (851—900)
            </h3>
            <p className="mt-4 text-sm text-black/70 leading-relaxed">
              Excellent financial strength. Can withstand prolonged income loss
              with comfort and flexibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
