"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, ArrowRight, X, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/data/projects";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAllWorks, setShowAllWorks] = useState(false);
    const [openedFromAllWorks, setOpenedFromAllWorks] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [pendingAction, setPendingAction] = useState(null);

    const [projectModalVisible, setProjectModalVisible] = useState(false);
    const [allWorksModalVisible, setAllWorksModalVisible] = useState(false);
    const [projectModalClosing, setProjectModalClosing] = useState(false);
    const [allWorksModalClosing, setAllWorksModalClosing] = useState(false);

    const isModalOpen = selectedProject || showAllWorks;

    useEffect(() => {
        if (isModalOpen || isLoading) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isModalOpen, isLoading]);

    useEffect(() => {
        if (selectedProject) {
            requestAnimationFrame(() => setProjectModalVisible(true));
        }
    }, [selectedProject]);

    useEffect(() => {
        if (showAllWorks) {
            requestAnimationFrame(() => setAllWorksModalVisible(true));
        }
    }, [showAllWorks]);

    const handleLoadingComplete = useCallback(() => {
        setIsLoading(false);
        if (pendingAction) {
            const action = pendingAction;
            setPendingAction(null);
            setTimeout(() => {
                action();
            }, 50);
        }
    }, [pendingAction]);

    const handleOpenProject = useCallback((project) => {
        setPendingAction(() => () => setSelectedProject(project));
        setIsLoading(true);
    }, []);

    const handleCloseProjectDetail = useCallback(() => {
        setProjectModalClosing(true);
        setTimeout(() => {
            setProjectModalClosing(false);
            setProjectModalVisible(false);
            setSelectedProject(null);
            if (openedFromAllWorks) {
                setOpenedFromAllWorks(false);
                setPendingAction(() => () => setShowAllWorks(true));
                setIsLoading(true);
            }
        }, 250);
    }, [openedFromAllWorks]);

    const handleOpenAllWorks = useCallback(() => {
        setPendingAction(() => () => setShowAllWorks(true));
        setIsLoading(true);
    }, []);

    const handleCloseAllWorks = useCallback(() => {
        setAllWorksModalClosing(true);
        setTimeout(() => {
            setAllWorksModalClosing(false);
            setAllWorksModalVisible(false);
            setShowAllWorks(false);
        }, 250);
    }, []);

    const handleOpenProjectFromAllWorks = useCallback((project) => {
        setAllWorksModalClosing(true);
        setTimeout(() => {
            setAllWorksModalClosing(false);
            setAllWorksModalVisible(false);
            setShowAllWorks(false);
            setOpenedFromAllWorks(true);
            setPendingAction(() => () => setSelectedProject(project));
            setIsLoading(true);
        }, 250);
    }, []);

    return (
        <section id="projects" className="py-16 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
                    <div>
                        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b8b8b] mb-3">Selected Works</p>
                        <h2 className="font-audiowide text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight">
                            Featured Projects
                        </h2>
                    </div>
                    <p className="text-[#8b8b8b] font-mono text-sm max-w-xs leading-relaxed italic text-right">
                        A collection of digital experiences crafted with precision, focus, and a deep understanding of user needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
                    {projectsData.slice(0, 4).map((project) => (
                        <div key={project.id} className="group cursor-pointer" onClick={() => handleOpenProject(project)}>
                            <div className="relative w-full overflow-hidden mb-5 aspect-[4/3]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="font-audiowide text-lg md:text-xl text-[#1a1a1a] group-hover:text-[#6b6b6b] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-[#8b8b8b] text-sm font-mono">
                                        {project.category}
                                    </p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-[#8b8b8b] group-hover:text-[#1a1a1a] transition-colors mt-1" />
                            </div>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#8b8b8b] border border-black/10 rounded-full px-3 py-1"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <button
                        onClick={handleOpenAllWorks}
                        className="group/btn flex items-center gap-2 font-mono text-sm uppercase tracking-[0.2em] text-[#1a1a1a] hover:text-[#6b6b6b] transition-colors"
                    >
                        Explore All Projects
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
            <LoadingScreen
                isVisible={isLoading}
                duration={800}
                onComplete={handleLoadingComplete}
            />
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={handleCloseProjectDetail}
                    style={{
                        opacity: projectModalVisible && !projectModalClosing ? 1 : 0,
                        transition: 'opacity 0.25s ease-out',
                    }}
                >
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        style={{
                            opacity: projectModalVisible && !projectModalClosing ? 1 : 0,
                            transition: 'opacity 0.25s ease-out',
                        }}
                    />
                    <div
                        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto overscroll-contain"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        style={{
                            transform: projectModalVisible && !projectModalClosing
                                ? 'scale(1) translateY(0)'
                                : 'scale(0.95) translateY(15px)',
                            opacity: projectModalVisible && !projectModalClosing ? 1 : 0,
                            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease-out',
                        }}
                    >
                        <button
                            onClick={handleCloseProjectDetail}
                            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 640px"
                                className="object-cover"
                            />
                        </div>
                        <div className="p-8">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="font-audiowide text-2xl md:text-3xl text-[#1a1a1a] mb-2">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-[#8b8b8b] font-mono text-sm">
                                        {selectedProject.category}
                                    </p>
                                </div>
                                {selectedProject.links.demo && selectedProject.links.demo !== "#" && (
                                    <Link
                                        href={selectedProject.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white font-mono text-sm px-6 py-3 rounded-full hover:bg-[#333] transition-colors shrink-0"
                                    >
                                        Visit Live Site
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                            <div className="w-full h-px bg-black/10 mb-6" />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b8b8b] mb-2">Overview</p>
                                    <p className="text-[#4a4a4a] text-sm leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b8b8b] mb-2">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech, idx) => (
                                            <span key={idx} className="text-[10px] font-mono uppercase tracking-[0.1em] text-[#6b6b6b] bg-[#F0F0F0] rounded-full px-3 py-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8b8b8b] mb-2">Links</p>
                                    <div className="flex flex-col gap-2">
                                        {selectedProject.links.github && (
                                            <Link href={selectedProject.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4a4a4a] text-sm hover:text-[#1a1a1a] transition-colors">
                                                <Github className="w-4 h-4" /> Source Code
                                            </Link>
                                        )}
                                        {selectedProject.links.demo && selectedProject.links.demo !== "#" && (
                                            <Link href={selectedProject.links.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4a4a4a] text-sm hover:text-[#1a1a1a] transition-colors">
                                                <ExternalLink className="w-4 h-4" /> Live Demo
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showAllWorks && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
                    onClick={handleCloseAllWorks}
                    style={{
                        opacity: allWorksModalVisible && !allWorksModalClosing ? 1 : 0,
                        transition: 'opacity 0.25s ease-out',
                    }}
                >
                    <div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                        style={{
                            opacity: allWorksModalVisible && !allWorksModalClosing ? 1 : 0,
                            transition: 'opacity 0.25s ease-out',
                        }}
                    />
                    <div
                        className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl max-h-[90vh] overflow-y-auto overscroll-contain"
                        onClick={(e) => e.stopPropagation()}
                        onWheel={(e) => e.stopPropagation()}
                        onTouchMove={(e) => e.stopPropagation()}
                        style={{
                            transform: allWorksModalVisible && !allWorksModalClosing
                                ? 'scale(1) translateY(0)'
                                : 'scale(0.95) translateY(15px)',
                            opacity: allWorksModalVisible && !allWorksModalClosing ? 1 : 0,
                            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease-out',
                        }}
                    >
                        <div className="p-8 md:p-10">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h3 className="font-audiowide text-3xl md:text-4xl text-[#1a1a1a] mb-1">
                                        All Works
                                    </h3>
                                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8b8b8b]">
                                        Archive • 2023—2025
                                    </p>
                                </div>
                                <button
                                    onClick={handleCloseAllWorks}
                                    className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                                {projectsData.map((project) => (
                                    <div
                                        key={project.id}
                                        className="group/item cursor-pointer"
                                        onClick={() => handleOpenProjectFromAllWorks(project)}
                                    >
                                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl mb-3 bg-[#F0F0F0]">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                sizes="(max-width: 768px) 50vw, 33vw"
                                                className="object-cover group-hover/item:scale-105 transition-transform duration-500 ease-out"
                                            />
                                        </div>
                                        <h4 className="font-audiowide text-sm text-[#1a1a1a] group-hover/item:text-[#6b6b6b] transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8b8b8b]">
                                            {project.category}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-black/10 pt-4">
                                <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-[#8b8b8b]">
                                    Fauzan • Software Engineer & UI/UX Enthusiast
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}