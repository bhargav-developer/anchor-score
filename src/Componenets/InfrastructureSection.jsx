import React from "react";

const logos = [
  { src: "/logos/amfi.png", alt: "AMFI" },
  { src: "/logos/sebi.png", alt: "SEBI" },
  { src: "/logos/hdfc.png", alt: "HDFC Mutual Fund" },
  { src: "/logos/icici.png", alt: "ICICI Prudential Mutual Fund" },
  { src: "/logos/sbi.png", alt: "SBI Mutual Fund" },
  { src: "/logos/tata.png", alt: "Tata Mutual Fund" },
];

export default function InfrastructureSection() {
  return (
    <section className="w-full py-24 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">

        {/* HEADING */}
        <h2 className="text-[26px] md:text-[30px] font-semibold text-black">
          Built for infrastructure.
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-[720px] mx-auto text-[15px] md:text-[16px] text-gray-700 leading-relaxed">
          Within India’s regulated financial ecosystem. Security and compliance
          are foundational. Infrastructure first. Distribution later. Trust is
          built through systems.
        </p>

        {/* LOGOS */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-[60px] w-[120px] md:h-[70px] md:w-[140px]"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
