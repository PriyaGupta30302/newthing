
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader() {
    const loaderRef = useRef(null);
    const stripeRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.to(".stripe", {
                height: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.inOut",
                delay: 0.5,
            }).to(loaderRef.current, {
                display: "none",
                duration: 0
            });
        }, loaderRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={loaderRef} className="fixed inset-0 z-[9999] flex h-screen w-full">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="stripe h-full w-full bg-black"></div>
            ))}
        </div>
    );
}
