import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 — Page Not Found | Fauzan Hadi",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <p
        className="font-audiowide text-[clamp(6rem,25vw,18rem)] font-black leading-none select-none pointer-events-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px rgba(255,255,255,0.08)",
        }}
      >
        404
      </p>

      <div className="-mt-8 md:-mt-16 z-10">
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/40 mb-4">
          Error · Page Not Found
        </p>
        <h1 className="font-audiowide text-3xl md:text-5xl text-white font-black mb-4 tracking-tight">
          Lost in the void.
        </h1>
        <p className="text-white/50 font-mono text-sm max-w-sm mx-auto leading-relaxed mb-10">
          The page you{"'"}re looking for doesn{"'"}t exist or has been moved. Let{"'"}s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] font-mono text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
