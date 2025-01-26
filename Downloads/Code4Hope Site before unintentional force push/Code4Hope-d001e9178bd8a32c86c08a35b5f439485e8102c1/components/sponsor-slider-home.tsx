"use client";

import React, { useEffect, useRef } from "react";


export default function SponsorMarquee() {
    const marqueeRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        const cloneSponsors = () => {
            if (marquee.children.length < sponsors.length * 3) {
                const originalItems = Array.from(marquee.children);
                originalItems.forEach((item) => {
                    const clone = item.cloneNode(true);
                    marquee.appendChild(clone);
                });
            }
        };

        cloneSponsors();

        let animationFrameId;
        let scrollAmount = 0;

        const scrollMarquee = () => {
            scrollAmount += 1;
            if (scrollAmount >= marquee.scrollWidth / 2) {
                scrollAmount = 0;
            }
            marquee.style.transform = `translateX(-${scrollAmount}px)`;
            animationFrameId = requestAnimationFrame(scrollMarquee);
        };

        animationFrameId = requestAnimationFrame(scrollMarquee);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="relative py-8 overflow-hidden h-full">
            <div
                ref={marqueeRef}
                className="flex items-center whitespace-nowrap"
                style={{ willChange: "transform" }}
            >
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 px-8"
                        style={{ width: "300px" }}
                    >
                        <a
                            href={sponsor.devpostLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="w-full h-full object-contain mb-4"
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
