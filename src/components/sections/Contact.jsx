import React from 'react';
import ContactForm from '../ui/ContactForm';
import SocialLinks from '../ui/SocialLinks';
import ContactInfo from '../ui/ContactInfo';

export default function Contact() {
    return (
        <section id="contact" className="py-12 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--bg-cyan-500-10)] rounded-full blur-[120px] -z-10"></div>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-audiowide text-[var(--text-white)] mb-6 drop-shadow-[0_0_15px_rgba(0,0,0,0.08)]">
                    Let's Work Together
                </h2>
                <p className="text-[var(--text-gray-400)] text-lg md:text-xl mb-10 max-w-2xl mx-auto font-sans">
                    Open to collaborations or just want to say hello? Drop a message below and I'll get back to you soon
                </p>
                <ContactForm />
                <SocialLinks />
            </div>
        </section>
    );
}