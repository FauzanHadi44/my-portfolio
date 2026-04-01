import { CardContainer, CardBody, CardItem } from "./3d-card";

// Project card container component with 3D effects
export default function ProjectCard({ children, className = "" }) {
    return (
        <CardContainer containerClassName="py-4">
            <CardBody className={`group relative bg-black/3 border border-black/8 rounded-2xl overflow-hidden hover:border-black/15 transition-all duration-500 h-auto w-full ${className}`}>
                {children}
            </CardBody>
        </CardContainer>
    );
}
