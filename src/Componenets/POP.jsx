import React, { useState } from "react";
import { X, Check } from "lucide-react";

export default function FinancialReadinessModal({ open, onClose }) {
  if (!open) return null;

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    whatsapp: "",
    income: "",
    savings: "",
    expenses: "",
    employment: "",
    agree: false,
  });

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const isFormValid =
    form.firstName &&
    form.whatsapp &&
    form.income &&
    form.savings &&
    form.expenses &&
    form.employment &&
    form.agree;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    // 👉 API call goes here
    console.log("FORM DATA:", form);

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-10 w-full max-w-[520px] bg-white rounded-2xl shadow-xl p-6 md:p-8">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
        >
          {!submitted && <X size={18} />}
        </button>

        {/* ================= SUCCESS STATE ================= */}
        {submitted ? (
          <div className="flex flex-col items-center text-center ">

            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#10c985] text-white mb-6">
              <Check size={28} />
            </div>

            <h2 className="text-4xl font-bold">
              You’re on the list.
            </h2>

            <p className="mt-5 text-xl text-gray-600 max-w-[320px]">
              Your early access request has been recorded.
              We’ll notify you when your slot opens.
            </p>

            <button
              onClick={onClose}
              className="mt-6 bg-[#10c985] hover:bg-[#0fb97a] text-white px-16 py-2.5 rounded-md font-medium"
            >
              Ok
            </button>

          </div>
        ) : (
          <>
            {/* ================= FORM STATE ================= */}
            <h2 className="text-xl font-semibold">
              Financial Readiness Benchmark
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              A limited rollout of Anchor Score for individuals who want clarity
              before making financial decisions.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  value={form.firstName}
                  onChange={(v) => handleChange("firstName", v)}
                />
                <Input
                  label="Whatsapp Number"
                  value={form.whatsapp}
                  onChange={(v) => handleChange("whatsapp", v)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Monthly Income"
                  value={form.income}
                  onChange={(v) => handleChange("income", v)}
                  options={["0–30k", "30–50k", "50–1L", "1L–2L", "2L+"]}
                />
                <Select
                  label="Liquid Savings"
                  value={form.savings}
                  onChange={(v) => handleChange("savings", v)}
                  options={["0–50k", "50k–1L", "1L–3L", "3L–5L", "5L+"]}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Essential Expenses"
                  value={form.expenses}
                  onChange={(v) => handleChange("expenses", v)}
                  options={["0–20k", "20–40k", "40–60k", "60–80k", "80k+"]}
                />
                <Select
                  label="Employment Type"
                  value={form.employment}
                  onChange={(v) => handleChange("employment", v)}
                  options={["Salaried", "Self-employed", "Business", "Other"]}
                />
              </div>

              <label className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={form.agree}
                  onChange={(e) => handleChange("agree", e.target.checked)}
                  className="mt-1"
                />
                I agree that my information will be used only to generate my
                Anchor Score and early access updates.
              </label>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-3 rounded-lg font-medium transition
                  ${
                    isFormValid
                      ? "bg-[#10c985] hover:bg-[#0fb97a] text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }
                `}
              >
                Join Early Access
              </button>

            </form>
          </>
        )}
      </div>
    </div>
  );
}

/* ---------- Inputs ---------- */

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="text-xs font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#10c985]"
      />
    </div>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <div>
      <label className="text-xs font-medium">
        {label} <span className="text-red-500">*</span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#10c985]"
      >
        <option value="">Select Range</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
