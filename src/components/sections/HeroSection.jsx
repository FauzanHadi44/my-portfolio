// src/components/HeroSection.jsx
import Link from "next/link";
import Badge from "../ui/Badge";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="home" className="flex flex-col items-center text-center justify-center min-h-[100vh] px-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <div className="relative w-[70vw] max-w-[600px] aspect-square"
                    style={{
                        maskImage: 'radial-gradient(circle, black 30%, transparent 75%)',
                        WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 75%)',
                    }}
                >
                    <Image
                        src="/image/profile.png"
                        alt=""
                        fill
                        className="object-cover opacity-15 grayscale-[30%]"
                        priority
                        aria-hidden="true"
                    />
                </div>
            </div>
            <div className="z-10 flex flex-col items-center mt-20">
                <h1 className="text-4xl md:text-6xl font-audiowide mb-4 tracking-wider text-[#1a1a1a] leading-tight">
                    Hello, I'm
                </h1>
                <h2 className="font-audiowide text-6xl md:text-8xl lg:text-9xl mb-6 text-[#1a1a1a] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
                    Fauzan
                </h2>

                <Badge variant="hero" className="mb-14">
                    <span className="font-bold text-2xl">&lt;</span>
                    <span className="font-semibold tracking-wide">Software Engineer & UI/UX Enthusiast</span>
                    <span className="font-bold text-2xl">/&gt;</span>
                </Badge>
            </div>
        </section >
    );
}