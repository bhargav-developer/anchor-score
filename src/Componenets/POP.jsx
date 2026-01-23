import React, { useState } from "react";
import { X, Check } from "lucide-react";

export default function FinancialReadinessModal({ open, onClose }) {
  if (!open) return null;

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

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
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!form.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^[0-9]{10}$/.test(form.whatsapp)) {
      newErrors.whatsapp = "Enter a valid 10-digit number";
    }

    if (!form.income) newErrors.income = "Select your income range";
    if (!form.savings) newErrors.savings = "Select your savings range";
    if (!form.expenses) newErrors.expenses = "Select your expenses range";
    if (!form.employment) newErrors.employment = "Select employment type";

    if (!form.agree) {
      newErrors.agree = "You must agree before continuing";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

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
          className="absolute top-4 right-4 p-2 rounded-full bg-green-100 text-green-500"
        >
          {!submitted && <X size={18} />}
        </button>

        {/* SUCCESS STATE */}
        {submitted ? (
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#10c985] text-white mb-6">
              <Check size={28} />
            </div>

            <h2 className="text-4xl font-bold">You’re on the list.</h2>

            <p className="mt-5 text-xl text-gray-600 max-w-[320px]">
              Your early access request has been recorded. We’ll notify you when
              your slot opens.
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
            {/* FORM */}
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
                  error={errors.firstName}
                />
                <Input
                  label="Whatsapp Number"
                  value={form.whatsapp}
                  onChange={(v) => handleChange("whatsapp", v)}
                  error={errors.whatsapp}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Monthly Income"
                  value={form.income}
                  onChange={(v) => handleChange("income", v)}
                  options={["0–30k", "30–50k", "50–1L", "1L–2L", "2L+"]}
                  error={errors.income}
                />
                <Select
                  label="Liquid Savings"
                  value={form.savings}
                  onChange={(v) => handleChange("savings", v)}
                  options={["0–50k", "50k–1L", "1L–3L", "3L–5L", "5L+"]}
                  error={errors.savings}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                  label="Essential Expenses"
                  value={form.expenses}
                  onChange={(v) => handleChange("expenses", v)}
                  options={["0–20k", "20–40k", "40–60k", "60–80k", "80k+"]}
                  error={errors.expenses}
                />
                <Select
                  label="Employment Type"
                  value={form.employment}
                  onChange={(v) => handleChange("employment", v)}
                  options={["Salaried", "Self-employed", "Business", "Other"]}
                  error={errors.employment}
                />
              </div>

              <div>
                <label className="flex items-start gap-2 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) =>
                      handleChange("agree", e.target.checked)
                    }
                    className="mt-1"
                  />
                  I agree that my information will be used only to generate my
                  Anchor Score and early access updates.
                </label>

                {errors.agree && (
                  <p className="mt-1 text-xs text-red-500">{errors.agree}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-medium transition bg-[#10c985] hover:bg-[#0fb97a] text-white"
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

/* ---------- INPUT COMPONENTS ---------- */

function Input({ label, value, onChange, error }) {
  return (
    <div>
      <label className="text-xs font-medium">
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-[#10c985]"
          }`}
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function Select({ label, value, onChange, options, error }) {
  return (
    <div>
      <label className="text-xs font-medium">
        {label} <span className="text-red-500">*</span>
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`mt-1 w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2
          ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "focus:ring-[#10c985]"
          }`}
      >
        <option value="">Select Range</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
