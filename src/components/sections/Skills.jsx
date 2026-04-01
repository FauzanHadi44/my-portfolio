import { skillsData } from "@/data/skills";
import Badge from "@/components/ui/Badge";
import TechCard from "@/components/ui/TechCard";

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] -z-10"></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-audiowide text-4xl md:text-6xl text-[#1a1a1a] mb-4">
            Technical <span className="text-[#6b6b6b]">Stack</span>
          </h2>
          <p className="text-[#6b6b6b] font-mono text-lg">
            The technologies I use to build scalable and robust applications.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsData.map((category, index) => (
          <TechCard key={index}>
            <h3 className="font-audiowide text-xl text-[#1a1a1a] mb-2 group-hover:text-[#6b6b6b] transition-colors">
              {category.title}
            </h3>

            <p className="text-xs text-[#8b8b8b] font-mono mb-6 border-b border-black/5 pb-4">
              {category.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((tech, idx) => (
                <Badge key={idx} variant="primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </TechCard>
        ))}
      </div>
    </section>
  );
}