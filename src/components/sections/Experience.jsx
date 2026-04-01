"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, GraduationCap, Wrench, Building2, MapPin, FileDown } from 'lucide-react';
import { experienceData, educationData } from '@/data/experience';
import { skillsData } from '@/data/skills';

export default function Experience() {
  const coreSkills = skillsData.flatMap(category => category.items).slice(0, 30);

  return (
    <section id="experience" className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#8b8b8b] mb-3">Resume</p>
          <h2 className="font-audiowide text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-[#6b6b6b] leading-relaxed font-sans text-base max-w-lg">
            Passionate about building digital products. Specializing in front-end development, UI/UX design, and creating high-performance web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-black/10" />

              <div className="space-y-12">
                {experienceData.map((item) => (
                  <div key={item.id} className="relative pl-10">
                    <div className="absolute left-0 top-2 w-[16px] h-[16px] rounded-full bg-[#1a1a1a] border-[3px] border-[#faf8f5] shadow-[0_0_0_2px_rgba(0,0,0,0.1)]" />
                    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start mb-2 gap-1">
                      <h3 className="font-audiowide text-xl md:text-2xl text-[#1a1a1a] font-bold">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1a1a1a] text-white font-mono text-xs tracking-wide shrink-0">
                        {item.date}
                      </span>
                    </div>

                    {/* Company & Location */}
                    <div className="flex items-center gap-3 mb-5 text-[#6b6b6b] font-mono text-sm">
                      <span className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        {item.company}
                      </span>
                      <span className="text-black/20">•</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>

                    {/* Responsibilities Card */}
                    <div className="bg-[#F5F5F7] border border-black/5 rounded-2xl p-6 md:p-7 mb-4">
                      <ul className="space-y-4">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#8b8b8b] shrink-0 mt-0.5" />
                            <span className="text-[#4a4a4a] text-sm leading-relaxed">
                              {resp}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-10">
            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <GraduationCap className="w-5 h-5 text-[#8b8b8b]" />
                <h3 className="font-audiowide text-lg text-[#1a1a1a]">Education</h3>
              </div>
              <div className="bg-[#F5F5F7] border border-black/5 rounded-2xl p-6 mb-10">
                <h4 className="font-semibold text-[#1a1a1a] text-sm mb-1">
                  {educationData.degree}
                </h4>
                <p className="text-[#6b6b6b] text-sm font-mono mb-2">
                  {educationData.institution}
                </p>
                <p className="text-[#8b8b8b] text-xs font-mono">
                  {educationData.period}
                </p>
              </div>

              <div className="flex items-center gap-2.5 mb-5">
                <Wrench className="w-5 h-5 text-[#8b8b8b]" />
                <h3 className="font-audiowide text-lg text-[#1a1a1a]">Core Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {coreSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs font-mono text-[#4a4a4a] bg-[#F5F5F7] border border-black/8 px-4 py-2.5 rounded-xl hover:border-black/20 hover:text-[#1a1a1a] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 bg-[#1a1a1a] rounded-2xl p-8 md:p-10 text-center">
          <h3 className="font-audiowide text-2xl md:text-3xl text-white mb-3">
            Interested in working together?
          </h3>
          <p className="text-white/60 font-mono text-sm max-w-lg mx-auto mb-6 leading-relaxed">
            I am currently open to new opportunities as a Software Engineer and Frontend Developer. Let's connect and discuss how my skills in building modern web applications can bring value to your team.
          </p>
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 bg-white text-[#1a1a1a] font-mono text-sm px-6 py-3 rounded-full hover:bg-white/90 transition-colors"
          >
            <FileDown className="w-4 h-4" />
            Download Resume (PDF)
          </Link>
        </div>
      </div>
    </section>
  );
}