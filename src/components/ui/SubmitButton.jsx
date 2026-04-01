import React from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function SubmitButton({ status = 'idle', disabled = false }) {
    const getButtonClasses = () => {
        const baseClasses = "w-full py-4 rounded-xl font-audiowide tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg";

        if (status === 'success') {
            return `${baseClasses} bg-[var(--bg-contact-button-success)] text-[var(--text-contact-button-white)] cursor-default`;
        }
        if (status === 'error') {
            return `${baseClasses} bg-[var(--bg-contact-button-error)] text-[var(--text-contact-button-white)]`;
        }
        return `${baseClasses} bg-[var(--bg-contact-button)] text-[var(--text-contact-button)] hover:scale-[1.02] hover:shadow-[var(--shadow-contact-button)]`;
    };

    const getButtonContent = () => {
        if (status === 'sending') {
            return (
                <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                </>
            );
        }
        if (status === 'success') {
            return 'Message Sent! ✅';
        }
        if (status === 'error') {
            return 'Failed. Try Again.';
        }
        return (
            <>
                Send Message <Send className="w-4 h-4" />
            </>
        );
    };

    return (
        <button
            type="submit"
            disabled={disabled || status === 'sending' || status === 'success'}
            className={getButtonClasses()}
        >
            {getButtonContent()}
        </button>
    );
}
