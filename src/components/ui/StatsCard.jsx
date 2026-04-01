export default function StatsCard({ children, className = "" }) {
    return (
        <div className={`md:col-span-2 bg-black/3 border border-black/8 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 hover:bg-black/5 transition-colors ${className}`}>
            {children}
        </div>
    );
}
