import React, { useState } from 'react';
import FinancialReadinessModal from './POP';
import { IoLogoGooglePlaystore } from "react-icons/io5";

const AnchorHero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col items-center bg-[#F8F9F8] overflow-hidden px-4 sm:px-6">

        {/* Background Gradient Blurs */}
        <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[70%] bg-gradient-to-br from-green-300/40 to-transparent blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute top-[-5%] right-[-10%] w-[55%] h-[75%] bg-gradient-to-bl from-yellow-200/30 via-green-200/20 to-transparent blur-[120px] rounded-full pointer-events-none"></div>

        {/* --- NAVBAR --- */}
        <nav className="relative bg-white text-black mt-4 sm:mt-6 z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 h-20 sm:h-24 rounded-2xl flex items-center flex-wrap justify-between shadow-sm">

          {/* Logo (Bigger + Responsive) */}
          <img 
            src="/Logo.png" 
            alt="Anchor Score logo" 
            className=""
            width={250}
          />

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-10 text-xl font-bold text-[#1A1A1A]">
            <a href="#" className="hover:opacity-70 transition-opacity">What</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Why</a>
            <a href="#" className="hover:opacity-70 transition-opacity">How</a>
          </div>

          {/* CTA */}
          <button
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-[#B4E33D] to-[#59D377] text-white px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-green-200 hover:scale-105 transition-transform whitespace-nowrap"
          >
            Join Waitlist
          </button>
        </nav>

        {/* --- HERO CONTENT --- */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto pt-16 sm:pt-24 pb-16 sm:pb-24">

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#19CC7E] leading-[1.15] tracking-tight px-2">
            How long can you remain financially stable if your income stops?
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-[#1A1A1A] font-medium max-w-2xl">
            Anchor Score measures financial readiness.
          </p>

          {/* Checkmark List */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:text-base text-[#1A1A1A] font-semibold">
            <div className="flex items-center gap-2"><span className="text-xs">✓</span> Not income.</div>
            <div className="flex items-center gap-2"><span className="text-xs">✓</span> Not net worth.</div>
            <div className="flex items-center gap-2"><span className="text-xs">✓</span> Not returns.</div>
            <div className="flex items-center gap-2"><span className="text-xs">✓</span> Preparedness.</div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="mt-10 sm:mt-12 bg-[#1A1A1A] text-white flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full group hover:bg-black transition-all shadow-lg"
          >
            <IoLogoGooglePlaystore className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-base sm:text-lg font-bold">
              Test your readiness
            </span>
          </button>

        </main>

        {/* Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* MODAL */}
      <FinancialReadinessModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default AnchorHero;
