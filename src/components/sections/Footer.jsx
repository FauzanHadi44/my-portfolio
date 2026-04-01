import React from 'react';

export default function Footer() {
    return (
        <footer className="mt-10 pb-8">
            <div className="max-w-4xl mx-auto px-6">
                <div className="border-t border-[var(--border-footer)] pt-8 text-center text-[var(--text-footer)] text-sm font-mono">
                    <p>&copy; {new Date().getFullYear()} Fauzan Hadi.</p>
                </div>
            </div>
        </footer>
    );
}
