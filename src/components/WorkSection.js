"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const projects = [
  {
    title: "Horizon Interiors",
    tags: ["WEB DESIGN", "BRANDING", "SOCIALS"],
    image: "/assets/img-1.png",
    gridClass: "md:col-span-3",
  },
  {
    title: "ADRIANO",
    tags: ["MOBILE APP", "UI/UX"],
    image: "/assets/img-2.avif",
    gridClass: "md:col-span-2",
    hideBg: true,
  },
  {
    title: "Conservation",
    tags: ["WEB DESIGN", "LAYOUT"],
    image: "/assets/img-3.avif",
    gridClass: "md:col-span-2",
    hideBg: true,
  },
  {
    title: "URBAN WHEELS",
    tags: ["ECOMMERCE", "BRANDING"],
    image: "/assets/img-4.avif",
    gridClass: "md:col-span-3",
  },
];

export default function WorkSection() {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        const overlay = card.querySelector(".overlay");
        const info = card.querySelector(".info");
        const tags = card.querySelectorAll(".tag");
        const title = card.querySelector(".title");

        const tl = gsap.timeline({ paused: true });

        tl.to(overlay, { opacity: 1, duration: 0.4, ease: "power2.out" })
          .fromTo(
            tags,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
            "-=0.3"
          )
          .fromTo(
            title,
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
            "-=0.3"
          );

        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });
    },
    { scope: container }
  );

  return (
    <section className="py-12 md:py-10 flex justify-center px-6 xl:px-16 overflow-hidden">
      <div
        ref={container}
        className="max-w-[1360px] w-full mx-auto bg-[#f4f4f4] rounded-2xl py-16 md:py-24 px-6 md:px-16"
      >
        <h2 className="text-4xl md:text-5xl font-libre text-gray-900 mb-12 md:mb-20 text-center">
          Selected work...
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto h-[400px] md:h-[500px] ${
                project.gridClass
              } ${project.hideBg ? "bg-transparent" : "bg-[#ebe9df]"}`}
            >
              {/* Image Container */}
              <div
                className={`absolute inset-0 flex items-center justify-center ${
                  project.hideBg ? "p-0" : "p-8 md:p-12"
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`${
                      project.hideBg ? "object-cover" : "object-contain"
                    } transition-transform duration-700 group-hover:scale-105`}
                  />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="overlay absolute inset-0 bg-[#4e4d4a]/80 opacity-0 flex flex-col justify-between p-8 md:p-10 pointer-events-none">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="tag px-4 py-2 border border-white/40 rounded-full text-[10px] md:text-xs font-fira tracking-widest text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="title text-3xl md:text-5xl font-libre text-white leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
