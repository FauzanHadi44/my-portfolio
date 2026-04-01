// src/components/Button.jsx
import Link from "next/link";

export default function Button({
    href,
    children,
    variant = "primary",
    className = "",
    download = false
}) {
    const baseStyles = "px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all uppercase tracking-widest shadow-lg";

    const variants = {
        primary: "backdrop-blur-md border-[#c4b8a8] bg-[#e8e2db]/50 border-2 text-[#1a1a1a] hover:bg-[#ddd6cc]/50 hover:scale-105",
        secondary: "bg-[#e8e2db] text-[#1a1a1a] hover:bg-[#ddd6cc] hover:scale-105",
        work: "bg-[#1a1a1a] text-white hover:bg-[#333] hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.1)] font-audiowide",
        download: "bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white hover:scale-105 font-audiowide text-sm px-6 py-3"
    };

    if (download) {
        return (
            <a
                href={href}
                download
                className={`inline-block ${baseStyles} ${variants[variant]} ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}
