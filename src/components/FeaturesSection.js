"use client";
import React from "react";
import Image from "next/image";

export default function FeaturesSection() {
  const features = [
    {
      icon: "/assets/icon-1.png",
      title: "Bang for your buck",
      description:
        "High-quality design that looks expensive can be surprisingly affordable.",
    },
    {
      icon: "/assets/icon-2.png",
      title: "Unique Design",
      description:
        "Your business deserves more than a template. Stand out with custom design that speaks to your users.",
    },
    {
      icon: "/assets/icon-3.png",
      title: "Converting Clicks",
      description:
        "Your digital tools should lead to success for your business. Harness the power of strategic design.",
    },
  ];

  return (
    <section className="py-12 md:py-20 flex justify-center px-6 xl:px-16">
      <div className="max-w-[1360px] w-full mx-auto bg-[#FDFBF7] rounded-2xl py-16 md:py-20 px-4 md:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-block border border-gray-800 rounded-lg px-3 py-1 mb-8">
            <span className="text-xs font-fira tracking-widest uppercase">
              Why Choose Jules Studio
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-libre text-gray-900 leading-tight">
            Results driven, budget smart
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white/50 rounded-2xl border border-gray-300 hover:border-gray-400 transition-colors duration-300"
            >
              <div className="relative w-32 h-32 mb-8">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-libre text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
