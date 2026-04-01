export default function Badge({ children, variant = "default", className = "" }) {
    const variants = {
        default: "text-xs font-mono text-[#4a4a4a] bg-black/3 px-3 py-1.5 rounded-md border border-black/8 hover:bg-black/6 transition-colors cursor-default",
        primary: "text-xs font-mono text-[#4a4a4a] bg-[#f5f0eb] px-3 py-1.5 rounded-md border border-black/8 hover:border-black/20 hover:text-[#1a1a1a] transition-all cursor-default",
        date: "inline-block px-3 py-1.5 rounded-full bg-black/5 text-sm font-mono text-[#4a4a4a] border border-black/8",
        hero: "relative inline-flex items-center gap-3 font-mono text-xl md:text-2xl text-[#1a1a1a] backdrop-blur-md px-6 py-3 rounded-xl border-2 border-[#c4b8a8] bg-[#e8e2db]/50 shadow-lg"
    };

    return (
        <span className={`${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}
