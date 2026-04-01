import React from 'react';
import { Instagram, Linkedin, Github, Mail, MessageCircle } from 'lucide-react';

export default function ContactInfo() {
    const contactItems = [
        {
            icon: <Mail className="w-6 h-6" />,
            label: 'Email',
            value: 'fauzanhadi@example.com',
            href: 'mailto:fauzanhadi@example.com',
            color: 'hover:text-red-500'
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            label: 'WhatsApp',
            value: '+62 812-3456-7890',
            href: 'https://wa.me/6281234567890',
            color: 'hover:text-green-500'
        },
        {
            icon: <Instagram className="w-6 h-6" />,
            label: 'Instagram',
            value: '@fauzanhadi',
            href: 'https://instagram.com/fauzanhadi',
            color: 'hover:text-pink-500'
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: 'LinkedIn',
            value: 'Fauzan Hadi',
            href: 'https://linkedin.com/in/fauzanhadi',
            color: 'hover:text-blue-500'
        },
        {
            icon: <Github className="w-6 h-6" />,
            label: 'GitHub',
            value: '@fauzanhadi',
            href: 'https://github.com/fauzanhadi',
            color: 'hover:text-[#1a1a1a]'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {contactItems.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-lg border border-black/8 bg-black/3 backdrop-blur-sm transition-all duration-300 hover:border-black/15 hover:bg-black/5 ${item.color}`}
                >
                    <div className="flex-shrink-0 text-[#6b6b6b] group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs text-[#8b8b8b] font-mono uppercase tracking-wider mb-1">
                            {item.label}
                        </p>
                        <p className="text-sm text-[#1a1a1a] font-mono truncate">
                            {item.value}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    );
}
