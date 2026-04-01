// Experience card container component
export default function ExperienceCard({ children, className = "" }) {
    return (
        <div className={`bg-black/3 backdrop-blur-md border border-black/8 rounded-2xl p-6 md:p-8 hover:bg-black/5 transition-all duration-300 hover:border-black/15 group ${className}`}>
            {children}
        </div>
    );
}
