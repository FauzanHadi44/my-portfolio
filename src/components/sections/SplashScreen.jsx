"use client";

import { useEffect, useState } from 'react';
import DecryptedText from '../ui/DecryptedText';

export default function SplashScreen() {
    const [isVisible, setIsVisible] = useState(true);
    const [isFading, setIsFading] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 4000;
        const startTime = Date.now();
        let animFrame;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const pct = Math.min((elapsed / duration) * 100, 100);
            const eased = 100 * (1 - Math.pow(1 - pct / 100, 3));
            setProgress(Math.round(eased));

            if (pct < 100) {
                animFrame = requestAnimationFrame(animate);
            }
        };

        animFrame = requestAnimationFrame(animate);

        const fadeTimer = setTimeout(() => {
            setIsFading(true);
        }, 4500);
        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 5200);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(hideTimer);
            if (animFrame) cancelAnimationFrame(animFrame);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-700 ${isFading ? 'opacity-0' : 'opacity-100'}`}
            style={{
                backgroundColor: '#F8F9FA',
                backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
            }}
        >
            <div className={`mb-6 transition-all duration-700 ${isFading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
                <h1 className="text-8xl md:text-9xl lg:text-[11rem] font-audiowide tracking-wider select-none">
                    <DecryptedText
                        text="FH"
                        animateOn="view"
                        speed={50}
                        maxIterations={90}
                        sequential={true}
                        revealDirection="center"
                        className="text-[#1a1a1a]"
                        encryptedClassName="text-[#1a1a1a]/50"
                    />
                </h1>
            </div>

            <div className={`text-center mb-10 transition-all duration-700 ${isFading ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                <p className="text-xl md:text-2xl font-audiowide tracking-wide text-[#1a1a1a] mb-1">
                    <DecryptedText
                        text="Fauzan Hadi"
                        animateOn="view"
                        speed={50}
                        maxIterations={90}
                        sequential={true}
                        revealDirection="start"
                        className="text-[#1a1a1a]"
                        encryptedClassName="text-[#1a1a1a]/40"
                    />
                </p>
                <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#8b8b8b]">
                    Software Engineer & UI/UX Enthusiast
                </p>
            </div>
            <div className={`w-40 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
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
