"use client";

import { useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Logs, X } from "lucide-react";

const sectionIds = ['home', 'about', 'projects', 'experience', 'contact'];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isResumePage = pathname === '/resume';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleSectionDetection = () => {
      const scrollY = window.scrollY;

      let current = 'home';
      const offset = 200;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = id;
        }
      }

      if (scrollY < 100) {
        current = 'home';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleSectionDetection, { passive: true });
    handleSectionDetection();

    return () => window.removeEventListener('scroll', handleSectionDetection);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    if (isResumePage) {
      return;
    }
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }, [isResumePage]);

  const getNavHref = useCallback((href) => {
    if (isResumePage) {
      // Convert #section to /#section for cross-page navigation
      return `/${href}`;
    }
    return href;
  }, [isResumePage]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 py-3">
        <nav
          className={`w-full max-w-5xl mx-auto transition-all duration-500 ${scrolled
            ? 'bg-white/70 backdrop-blur-xl border border-black/8 rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.06)] px-3 py-1.5'
            : 'px-2 py-2'
            }`}
        >
          <div className="flex items-center justify-between">
            <a
              href={isResumePage ? '/' : '#home'}
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group z-50"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-black/10 group-hover:border-black/25 transition-all">
                <Image
                  src="/image/profile.png"
                  alt="Fauzan Hadi"
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <div className="block">
                <p className="font-audiowide text-sm text-[#1a1a1a] leading-tight tracking-wide group-hover:text-[#6b6b6b] transition-colors">
                  Fauzan Hadi
                </p>
                <p className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#8b8b8b] max-w-[140px] sm:max-w-none leading-tight">
                  Software Engineer & UI/UX Enthusiast
                </p>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = !isResumePage && activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={getNavHref(link.href)}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative font-mono text-xs uppercase tracking-[0.15em] px-4 py-2 rounded-full transition-all duration-300 ${isActive
                      ? 'text-[#1a1a1a] bg-black/8 font-medium'
                      : 'text-[#8b8b8b] hover:text-[#1a1a1a] hover:bg-black/3'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#1a1a1a]"
                        style={{ animation: 'dotIn 0.3s ease-out' }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-[#1a1a1a] p-2 rounded-full hover:bg-black/5 transition-all focus:outline-none z-50 border border-black/10 bg-black/3"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Logs className="w-5 h-5" />
              )}
            </button>

            <Link
              href="/resume"
              className={`hidden lg:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] px-5 py-2.5 rounded-full transition-colors z-50 ${
                isResumePage
                  ? 'bg-[#1a1a1a] text-white hover:bg-[#333]'
                  : 'border border-black/20 text-[#1a1a1a] hover:bg-black/5'
              }`}
            >
              View Resume
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-40 backdrop-blur-xl transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        style={{
          backgroundColor: '#F8F9FA',
          backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')"
        }}
      >
        <div className="h-screen w-full flex items-center justify-center px-6 md:px-12">
          <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="hidden md:flex flex-col items-center gap-6 animate-fade-in">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-black/10 hover:border-black/20 transition-all">
                <Image
                  src="/image/profile.png"
                  alt="Fauzan Hadi"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <p className="font-audiowide text-xl text-[#1a1a1a] mb-1">Fauzan Hadi</p>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b8b8b]">
                  Software Engineer & UI/UX Enthusiast
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center h-full py-12">
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-audiowide text-[#1a1a1a] mb-2 animate-fade-in">
                  Navigation
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center space-y-1 md:space-y-2 mb-8 md:mb-12">
                {navLinks.map((link, index) => {
                  const isActive = !isResumePage && activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.name}
                      href={getNavHref(link.href)}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="group relative overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h3 className={`text-4xl md:text-5xl lg:text-6xl font-audiowide transition-all duration-300 tracking-tight uppercase relative pb-2 ${isActive
                        ? 'text-[#1a1a1a] border-b-[3px] border-[#1a1a1a]'
                        : 'text-[#4a4a4a] hover:text-[#1a1a1a]'
                        }`}>
                        {link.name}
                      </h3>
                    </a>
                  );
                })}
                <Link
                  href="/resume"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${navLinks.length * 100}ms` }}
                >
                  <h3 className={`text-4xl md:text-5xl lg:text-6xl font-audiowide transition-all duration-300 tracking-tight uppercase relative pb-2 ${
                    isResumePage
                      ? 'text-[#1a1a1a] border-b-[3px] border-[#1a1a1a]'
                      : 'text-[#4a4a4a] hover:text-[#1a1a1a]'
                  }`}>
                    Resume
                  </h3>
                </Link>
              </div>

              <div className="flex flex-col items-center md:hidden">
                <div className="w-20 h-20 mb-3 relative rounded-full overflow-hidden border-2 border-black/10">
                  <Image
                    src="/image/profile.png"
                    alt="Fauzan Hadi"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <p className="text-[#1a1a1a] text-sm font-audiowide tracking-wide">
                  Fauzan Hadi
                </p>
                <p className="text-[#8b8b8b] text-[10px] font-mono tracking-widest uppercase">
                  Software Developer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
                @keyframes dotIn {
                    from { opacity: 0; transform: translateX(-50%) scale(0); }
                    to { opacity: 1; transform: translateX(-50%) scale(1); }
                }
            `}</style>
    </>
  );
}