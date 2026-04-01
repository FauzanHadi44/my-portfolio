import Link from "next/link";
import { FileDown, Briefcase, Layers, Zap, Accessibility, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export default function About() {
    return (
        <section id="about" className="py-16 px-6 max-w-7xl mx-auto">
            <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b8b8b] mb-3">About Me</p>
                <h2 className="font-audiowide text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight">
                    Beyond the Code
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                <div className="lg:col-span-2 bg-[#EDEEF0] border border-black/5 rounded-3xl p-8 md:p-10">
                    <h3 className="font-audiowide text-2xl md:text-3xl text-[#1a1a1a] mb-4">
                        I'm Fauzan
                    </h3>
                    <p className="text-[#4a4a4a] leading-relaxed font-sans text-base md:text-lg mb-6 max-w-xl">
                        A Software Engineer & UI/UX Enthusiast. I specialize in bridging the gap between robust engineering and intuitive, user-centric design. Focused on building high-performance web applications with clean code and transforming complex designs into seamless digital experiences.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <Button href="/resume" variant="work" className="!text-sm !px-6 !py-3">
                            <span className="flex items-center gap-2">
                                <FileDown className="w-4 h-4" />
                                Download Resume (PDF)
                            </span>
                        </Button>
                        <Button href="#projects" variant="download" className="!text-sm !px-6 !py-3">
                            View Work
                        </Button>
                    </div>
                </div>

                <div className="bg-[#EDEEF0] border border-black/5 rounded-3xl p-8 flex flex-col justify-between group hover:border-green-500/20 transition-all">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b8b8b] mb-2">Availability</p>
                        <div className="flex items-center gap-3">
                            <h3 className="font-audiowide text-xl md:text-2xl text-[#1a1a1a]">Open for Work</h3>
                            <div className="relative">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                            </div>
                        </div>
                    </div>
                    <p className="text-[#8b8b8b] font-mono text-sm leading-relaxed mt-6">
                        Currently seeking new opportunities to build impactful web interfaces and solve complex problems.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-[#EDEEF0] border border-black/5 rounded-3xl p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b8b8b] mb-6">Core Focus</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <Layers className="w-5 h-5 text-[#6b6b6b]" />
                            <span className="font-semibold text-[#1a1a1a] text-sm">Full-stack Web Architecture</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-5 h-5 text-[#6b6b6b]" />
                            <span className="font-semibold text-[#1a1a1a] text-sm">UI/UX Design & Prototyping</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Accessibility className="w-5 h-5 text-[#6b6b6b]" />
                            <span className="font-semibold text-[#1a1a1a] text-sm">Scalable Design Systems</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-[#6b6b6b]" />
                            <span className="font-semibold text-[#1a1a1a] text-sm">Web Performance Optimization</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-[#EDEEF0] border border-black/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="font-audiowide text-6xl md:text-7xl font-black text-[#1a1a1a] mb-2 tracking-tight">
                        10+
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b8b8b]">
                        Projects Completed
                    </p>
                </div>

                <div className="bg-[#EDEEF0] border border-black/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                    <h3 className="font-audiowide text-6xl md:text-7xl font-black text-[#1a1a1a] mb-2 tracking-tight">
                        02+
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b8b8b]">
                        Years Experience
                    </p>
                </div>
            </div>
        </section>
    );
}