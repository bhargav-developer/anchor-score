import React from "react";

export default function ClassificationSection() {
  return (
    <section className="w-full py-28 px-6">
      <div className="max-w-[1100px] mx-auto">

        {/* HEADING */}
        <h2 className="text-[28px] md:text-[32px] font-bold leading-snug text-black">
          Classification Not Opinion
          <br />
          Anchor Score comes first.
        </h2>

        {/* SUBTEXT */}
        <p className="mt-10 font-bold text-[16px] text-gray-700">
          Anchor Score is measurement, Not advice, Not a judgement
        </p>

        {/* QUOTE */}
        <div className="mt-16 max-w-[900px] relative">
          <span className="absolute -left-8 -top-4 text-[64px] text-[#10c985] font-bold leading-none">
            “
          </span>
          <p className="text-[26px] md:text-[30px] leading-relaxed font-bold text-[#10c985]">
            Measurement precedes participation. The foundation of a
            <br />
            Financial Wellness & Discipline OS.
          </p>
        </div>

      </div>
    </section>
  );
}
