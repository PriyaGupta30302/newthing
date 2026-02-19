"use client";
import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#FDFBF7] min-h-screen pt-24 md:pt-32 flex flex-col justify-center">
      <div className="max-w-[1360px] mx-auto w-full px-4 md:px-6 flex flex-col md:flex-row items-stretch">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2 md:pr-12 flex flex-col justify-center relative py-10 md:py-20 overflow-hidden bg-gradient-to-r from-[#FDFBF7] to-[#F3D5D0] rounded-l-lg">
          <div className="relative z-10 pl-8 md:pl-12 pr-4">
            <div className="inline-block border border-gray-800 rounded-lg px-3 py-1 mb-8">
              <span className="text-xs font-fira tracking-widest uppercase">
                Our Mission
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-libre font-normal mb-8 md:mb-12 text-gray-900 leading-[0.9]">
              Designing for <span className="italic">results.</span>
            </h1>

            <div className="flex items-center space-x-6 text-sm font-fira tracking-wider text-gray-600 mb-10 md:mb-16">
              <span>WEB</span>
              <span className="h-4 w-px bg-gray-400"></span>
              <span>BRANDING</span>
              <span className="h-4 w-px bg-gray-400"></span>
              <span>UX/UI</span>
            </div>

            <p className="font-sans text-gray-600 leading-relaxed max-w-md">
              Jules Studio is an independent design studio focused on designing
              digital products that are elegant and intuitive to help you
              accomplish your business goals.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative min-h-[100vh] bg-gray-200 rounded-r-lg overflow-hidden">
          <Image
            src="/assets/hero-img.avif"
            alt="Designer portrait"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
