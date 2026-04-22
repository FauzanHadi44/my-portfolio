export default function TechCard({ children, className = "" }) {
    return (
        <div className={`bg-black/3 border border-black/8 rounded-2xl p-6 hover:bg-black/5 hover:border-black/15 transition-all duration-300 group ${className}`}>
            {children}
        </div>
    );
}
