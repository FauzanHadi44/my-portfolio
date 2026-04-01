import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Instagram } from 'lucide-react';

export default function SocialLinks() {
    const socialLinks = [
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: Linkedin,
        },
        {
            name: 'GitHub',
            href: 'https://github.com',
            icon: Github,
        },
        {
            name: 'Instagram',
            href: 'https://instagram.com',
            icon: Instagram,
        },
    ];

    return (
        <div className="inline-flex flex-wrap justify-center gap-6 bg-[var(--bg-social-container)] backdrop-blur-md px-8 py-5 rounded-full border border-[var(--border-social-container)] hover:border-[var(--border-social-container-hover)] transition-colors">
            {socialLinks.map((social, index) => (
                <React.Fragment key={social.name}>
                    <Link
                        href={social.href}
                        className="flex items-center gap-2 text-[var(--text-social-link)] hover:text-[var(--text-social-link-hover)] transition-colors group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-mono hidden md:inline">{social.name}</span>
                    </Link>
                    {index < socialLinks.length - 1 && (
                        <div className="w-px h-5 bg-[var(--bg-social-divider)] hidden md:block"></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
