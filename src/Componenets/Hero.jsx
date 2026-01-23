import React, { useState } from 'react';
import FinancialReadinessModal from './POP';
import { IoLogoGooglePlaystore } from "react-icons/io5";

const AnchorHero = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col items-center bg-[#F8F9F8] overflow-hidden font-sans">

        {/* Background Gradient Blurs */}
        <div className="absolute top-0 left-[-10%] w-[40%] h-[60%] bg-gradient-to-br from-green-300/40 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-[-5%] w-[35%] h-[70%] bg-gradient-to-bl from-yellow-200/30 via-green-200/20 to-transparent blur-[100px] rounded-full pointer-events-none"></div>

        {/* --- NAVBAR --- */}
        <nav className="relative bg-white text-black mt-5 z-10 w-full max-w-5xl mx-auto px-6 h-20 rounded-md flex items-center justify-between">
          <div className="flex items-center gap-2">
         <img src="/Logo.png" alt="logo" />
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#1A1A1A]">
            <a href="#" className="hover:opacity-70 transition-opacity">What</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Why</a>
            <a href="#" className="hover:opacity-70 transition-opacity">How</a>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="bg-gradient-to-r from-[#B4E33D] to-[#59D377] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-green-200 hover:scale-105 transition-transform"
          >
            Join Waitlist
          </button>
        </nav>

        {/* --- HERO CONTENT --- */}
        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto pb-20">

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#19CC7E] leading-[1.15] tracking-tight">
            How long can you remain financially stable if your income stops?
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-[#1A1A1A] font-medium">
            Anchor Score measures financial readiness.
          </p>

          {/* Checkmark List */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#1A1A1A] font-semibold">
            <div className="flex items-center gap-2"><span className="text-xs">✓</span> Not income.</div>
            <div className="flex items-center gap-2"><span className="text-xs">✓</span> Not net worth.</div>
            <div className="flex items-center gap-2"><span className="text-xs">✓</span> Not returns.</div>
            <div className="flex items-center gap-2"><span className="text-xs">✓</span> Preparedness.</div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="mt-12 bg-[#1A1A1A] text-white flex items-center gap-3 px-8 py-4 rounded-full group hover:bg-black transition-all"
          >
            <div className="rounded-full p-1">
            <IoLogoGooglePlaystore className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
            <span className="text-lg font-bold">Test your readiness</span>
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
