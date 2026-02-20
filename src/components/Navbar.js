"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const linksRef = useRef([]);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            gsap.to(menuRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                display: "flex",
            });
            gsap.fromTo(
                linksRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, delay: 0.2 }
            );
        } else {
            gsap.to(menuRef.current, {
                y: "-100%",
                opacity: 0,
                duration: 0.6,
                ease: "power3.in",
                display: "none",
            });
        }
    }, [isOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Floating Navbar */}
            <nav className="fixed top-7 md:top-10 left-0 right-0 z-50 px-4">
                <div className="max-w-[1360px] mx-auto md:px-6 md:py-4 px-5 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-sm flex justify-between items-center border border-white/20">
                    <Link href="/" className="text-xl font-bold font-libre z-50 relative mix-blend-difference text-black">
                        NewThing
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-8 font-geist font-medium text-sm items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-gray-600 transition-colors uppercase tracking-wider"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-black text-[#ebe8df] px-5 py-2 rounded-full hover:bg-gray-800 transition-all text-xs uppercase cursor-pointer"
                        >
                            Let&apos;s Talk
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden z-50 relative w-10 h-10 flex flex-col justify-center items-end gap-1.5 group"
                    >
                        <span className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-8"}`}></span>
                        <span className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : "w-6"}`}></span>
                        <span className={`h-0.5 bg-black transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"}`}></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-[#ebe8df] z-40 hidden flex-col justify-center items-center h-screen w-full"
            >
                <div className="flex flex-col gap-8 text-center">
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            ref={(el) => (linksRef.current[index] = el)}
                            className="text-4xl font-libre font-medium text-black hover:italic transition-all"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
