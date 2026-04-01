"use client";

import React, { useState } from 'react';
import Input from './Input';
import SubmitButton from './SubmitButton';

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="max-w-md mx-auto mb-12 relative z-10">
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />

                <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />

                <Input
                    type="textarea"
                    name="message"
                    placeholder="Write your message here..."
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                />

                <SubmitButton status={status} />
            </form>
        </div>
    );
}
