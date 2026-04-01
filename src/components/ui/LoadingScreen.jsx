"use client";

import { useState, useEffect } from 'react';

export default function LoadingScreen({ isVisible, duration = 1500, onComplete }) {
    const [progress, setProgress] = useState(0);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        if (!isVisible) {
            setProgress(0);
            setIsFading(false);
            return;
        }

        const startTime = Date.now();
        let animFrame;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const pct = Math.min((elapsed / duration) * 100, 100);

            // Ease-out curve for more natural feel
            const eased = 100 * (1 - Math.pow(1 - pct / 100, 3));
            setProgress(Math.round(eased));

            if (pct < 100) {
                animFrame = requestAnimationFrame(animate);
            } else {
                setIsFading(true);
                setTimeout(() => {
                    onComplete?.();
                }, 400);
            }
        };

        animFrame = requestAnimationFrame(animate);

        return () => {
            if (animFrame) cancelAnimationFrame(animFrame);
        };
    }, [isVisible, duration, onComplete]);

    if (!isVisible && !isFading) return null;

    return (
        <div
            className={`fixed inset-0 z-[60] flex flex-col items-center justify-center transition-opacity duration-400 ${isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
            style={{
                backgroundColor: '#F8F9FA',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
            }}
        >
            <div className={`mb-6 transition-all duration-500 ${isFading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                <h1 className="font-audiowide text-7xl md:text-8xl lg:text-9xl text-[#1a1a1a] tracking-wider select-none">
                    FH
                </h1>
            </div>

            <div className={`text-center mb-10 transition-all duration-500 delay-75 ${isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                <p className="font-audiowide text-lg md:text-xl text-[#1a1a1a] tracking-wide mb-1">
                    Fauzan Hadi
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#8b8b8b]">
                    Software Engineer
                </p>
            </div>

            <div className={`w-40 transition-all duration-500 delay-100 ${isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                <div className="w-full h-[3px] bg-black/5 rounded-full overflow-hidden mb-3">
                    <div
                        className="h-full rounded-full transition-all duration-100 ease-out"
                        style={{
                            width: `${progress}%`,
                            background: '#1a1a1a',
                        }}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#8b8b8b]">
                        Loading
                    </span>
                    <span className="font-mono text-[10px] text-[#8b8b8b]">
                        {progress}%
                    </span>
                </div>
            </div>
        </div>
    );
}
