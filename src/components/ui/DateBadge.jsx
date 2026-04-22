export default function DateBadge({ children, className = "" }) {
    return (
        <span className={`inline-block px-4 py-2 rounded-full bg-black/5 text-sm font-mono text-[#4a4a4a] border border-black/8 ${className}`}>
            {children}
        </span>
    );
}
