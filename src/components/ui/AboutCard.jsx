// About section card container component
export default function AboutCard({ children, variant = "default", className = "" }) {
    const variants = {
        default: "bg-black/3 border border-black/8 rounded-3xl p-8 hover:bg-black/5 transition-colors",
        status: "bg-gradient-to-br from-green-50 to-[#faf8f5] border border-black/8 rounded-3xl p-8 flex flex-col gap-6 group hover:border-green-500/30 transition-all",
        focus: "bg-[#1a1a1a] text-white rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative group"
    };

    return (
        <div className={`${variants[variant]} ${className}`}>
            {children}
        </div>
    );
}
