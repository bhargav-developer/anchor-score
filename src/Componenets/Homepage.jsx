import React from "react";

export default function HomePage() {
  return (
    <div className="w-full font-sans text-gray-900">

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-green-700 max-w-3xl leading-tight">
          How long can you remain financially stable if your income stops?
        </h1>

        <p className="mt-4 text-gray-600">
          Anchor Score measures financial readiness.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
          <span>✓ Net income</span>
          <span>✓ Net worth</span>
          <span>✓ Risk exposure</span>
          <span>✓ Preparedness</span>
        </div>

        <button className="mt-8 bg-black text-white px-6 py-3 rounded-md text-sm hover:bg-gray-900">
          Test your readiness
        </button>
      </section>

      {/* DARK INFO SECTION */}
      <section className="bg-black text-center py-20 px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-green-400 max-w-4xl mx-auto">
          Anchor Score is a benchmark that measures how prepared an individual is
          to withstand income disruption.
        </h2>
      </section>

      {/* SPLIT CONTENT */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold">
            Most people are financially active
          </h3>
          <p className="text-gray-500 mt-2">
            Very few are financially ready.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { title: "People earn.", desc: "Cash flow sustains the illusion of stability." },
            { title: "People spend.", desc: "Transactions mask structural weakness." },
            { title: "People invest.", desc: "Returns arrive unevenly and late." },
          ].map((item, i) => (
            <div key={i} className="border rounded-lg p-4">
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-16 px-6 text-center">
        <p className="text-green-600 text-lg font-medium max-w-3xl mx-auto">
          “What isn’t measured is assumed. Assumptions fail under pressure.”
        </p>
      </section>

      {/* MEASURES TABLE */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-xl font-semibold mb-6">
          What Anchor Score measures
        </h3>

        <div className="space-y-4 text-sm">
          <div className="grid grid-cols-3 border-b pb-2">
            <span className="font-medium">Income</span>
            <span className="text-gray-500 col-span-2">
              Dependence · Stability · Concentration
            </span>
          </div>
          <div className="grid grid-cols-3 border-b pb-2">
            <span className="font-medium">Expenses</span>
            <span className="text-gray-500 col-span-2">
              Essential vs discretionary · Fixed obligations
            </span>
          </div>
          <div className="grid grid-cols-3">
            <span className="font-medium">Savings</span>
            <span className="text-gray-500 col-span-2">
              Liquidity · Emergency reserves · Access
            </span>
          </div>
        </div>

        <p className="mt-8 text-green-600 font-medium">
          Together, they determine your financial runway.
        </p>
      </section>

      {/* READINESS STATES */}
      <section className="py-20 px-6 bg-gray-50">
        <h3 className="text-xl font-semibold text-center mb-10">
          Readiness exists in states.
        </h3>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Fragile", score: "50–224", color: "red" },
            { title: "Cautious", score: "225–450", color: "yellow" },
            { title: "Stable", score: "451–700", color: "green" },
            { title: "Secure", score: "701–850", color: "emerald" },
            { title: "Resilient", score: "851–900", color: "teal" },
          ].map((state, i) => (
            <div key={i} className="bg-white border rounded-xl p-6">
              <h4 className="font-semibold">{state.title}</h4>
              <p className="text-sm text-gray-500">{state.score}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER PHILOSOPHY */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-lg font-semibold">
          Classification, not opinion.
        </h3>
        <p className="text-gray-500 mt-2">
          Anchor Score comes first.
        </p>

        <p className="mt-6 text-green-600 font-medium max-w-3xl mx-auto">
          Measurement precedes participation. The foundation of a Financial
          Wellness & Discipline OS.
        </p>
      </section>

    </div>
  );
}
