import React from "react";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0b0b0b] text-gray-300 px-6 pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-2 text-white">
              <span className="text-xl font-semibold">
                Anchor<span className="text-[#10c985]">Score</span>
              </span>
            </div>

            <p className="mt-4 text-sm font-medium text-white">
              Financial Readiness Benchmark
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-[520px]">
              Anchor Score is a measurement framework designed to assess
              financial readiness. It does not provide financial advice,
              investment recommendations, or guarantees of outcomes. Scores
              reflect current inputs and may change as circumstances change.
              Built within India’s regulated financial ecosystem. Security,
              data protection, & compliance are foundational requirements.
              Measurement is the beginning of strength.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="p-2 border border-gray-700 rounded hover:bg-gray-800"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="p-2 border border-gray-700 rounded hover:bg-gray-800"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:justify-self-end">
            <h4 className="text-sm font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Anchor Score</a></li>
              <li><a href="#" className="hover:text-white">Methodology</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-14" />

        {/* COMPANY INFO */}
        <div className="max-w-[900px]">
          <h4 className="text-sm font-semibold text-white mb-4">
            Finaptis WealthTech Private Limited
          </h4>

          <p className="text-sm text-gray-400 leading-relaxed">
            Registered Address: No 13/1, 2nd Floor, Standage Road, Frazer Town,
            Bangalore – 560005
            <br />
            AMFI-registered Mutual Fund Distributor (ARN - 318892)
            <br />
            Date of initial registration: 15-Jan-2025
            <br />
            Current Validity of ARN: 14-Jan-2028
          </p>

          <p className="mt-4 text-sm text-gray-400">
            Email:{" "}
            <a
              href="mailto:support@myanchorscore.com"
              className="hover:text-white"
            >
              support@myanchorscore.com
            </a>
          </p>

          <p className="mt-4 text-xs text-gray-500">
            Anchor Score is a registered trademark and brand name of Finaptis
            WealthTech Private Limited.
          </p>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 mt-14 pt-6 text-center text-xs text-gray-500">
          © 2026 Anchor Score. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
