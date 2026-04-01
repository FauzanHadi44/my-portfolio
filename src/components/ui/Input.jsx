import React from 'react';

export default function Input({ type = 'text', name, placeholder, value, onChange, required = false, rows }) {
    const baseClasses = "w-full bg-[var(--bg-contact-input)] border border-[var(--border-contact-input)] rounded-xl px-5 py-4 text-[var(--text-white)] focus:outline-none focus:border-[var(--border-contact-input-focus)] focus:bg-[var(--bg-contact-input-focus)] transition-all placeholder:text-[var(--text-contact-placeholder)] font-mono";

    if (type === 'textarea') {
        return (
            <textarea
                name={name}
                placeholder={placeholder}
                required={required}
                rows={rows || 4}
                value={value}
                onChange={onChange}
                className={`${baseClasses} resize-none`}
            />
        );
    }

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            className={baseClasses}
        />
    );
}
