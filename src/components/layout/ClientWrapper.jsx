"use client";

import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import SplashScreen from "../sections/SplashScreen";

const MESSAGES = [
    "Eits! Maaf ya, nggak bisa~ 😄",
    "Hahaha, mau ngapain coba? 👀",
    "Yah ketangkep deh! 🙈",
    "Hmm, curious ya? Tapi nggak boleh! 🚫",
    "Nggak ada yang bisa liat daleman sini wkwk 😂",
];

function BlockedToast({ show }) {
    const [visible, setVisible] = useState(false);
    const [msg, setMsg] = useState(MESSAGES[0]);

    useEffect(() => {
        if (show > 0) {
            setMsg(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
            setVisible(true);
            const t = setTimeout(() => setVisible(false), 2800);
            return () => clearTimeout(t);
        }
    }, [show]);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '32px',
                left: '50%',
                transform: visible
                    ? 'translateX(-50%) translateY(0) scale(1)'
                    : 'translateX(-50%) translateY(20px) scale(0.9)',
                opacity: visible ? 1 : 0,
                transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
                zIndex: 99999,
                pointerEvents: 'none',
            }}
        >
            <div
                style={{
                    background: 'rgba(250, 248, 245, 0.92)',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    borderRadius: '16px',
                    padding: '14px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    animation: visible ? 'toastShake 0.4s ease' : 'none',
                    whiteSpace: 'nowrap',
                }}
            >
                <span style={{ fontSize: '20px' }}>🚫</span>
                <span
                    style={{
                        color: '#1a1a1a',
                        fontSize: '13px',
                        fontFamily: 'monospace',
                        fontWeight: '600',
                        letterSpacing: '0.02em',
                    }}
                >
                    {msg}
                </span>
            </div>
            <style>{`
                @keyframes toastShake {
                    0%   { transform: rotate(0deg); }
                    20%  { transform: rotate(-3deg); }
                    40%  { transform: rotate(3deg); }
                    60%  { transform: rotate(-2deg); }
                    80%  { transform: rotate(2deg); }
                    100% { transform: rotate(0deg); }
                }
            `}</style>
        </div>
    );
}

export default function ClientWrapper({ children }) {
    const [toastCount, setToastCount] = useState(0);

    const showToast = useCallback(() => {
        setToastCount(c => c + 1);
    }, []);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.05,
            duration: 1.5,
            smoothWheel: true,
            wheelMultiplier: 1.2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 1) Blokir keyboard shortcuts + tampilkan toast
        const blockKeys = (e) => {
            const blockedKeys = [
                { key: 'F12' },
                { key: 'I', ctrlKey: true, shiftKey: true },
                { key: 'J', ctrlKey: true, shiftKey: true },
                { key: 'C', ctrlKey: true, shiftKey: true },
                { key: 'U', ctrlKey: true },
                { key: 'S', ctrlKey: true },
                { key: 'A', ctrlKey: true },
            ];
            const match = blockedKeys.some(b =>
                b.key === e.key &&
                (b.ctrlKey === undefined || b.ctrlKey === e.ctrlKey) &&
                (b.shiftKey === undefined || b.shiftKey === e.shiftKey)
            );
            if (match) {
                e.preventDefault();
                e.stopPropagation();
                showToast();
                return false;
            }
        };

        // 2) Blokir klik kanan + tampilkan toast
        const blockContextMenu = (e) => {
            e.preventDefault();
            showToast();
            return false;
        };

        // 3) Deteksi DevTools — jika terbuka, blank page
        let devtoolsOpen = false;
        const detectDevTools = () => {
            const threshold = 160;
            const widthDiff = window.outerWidth - window.innerWidth > threshold;
            const heightDiff = window.outerHeight - window.innerHeight > threshold;
            if (widthDiff || heightDiff) {
                if (!devtoolsOpen) {
                    devtoolsOpen = true;
                    document.body.innerHTML = '';
                    window.location.replace('about:blank');
                }
            } else {
                devtoolsOpen = false;
            }
        };

        // 4) Override console
        const noop = () => {};
        ['log','warn','error','info','debug','table','dir'].forEach(m => {
            console[m] = noop;
        });

        document.addEventListener('keydown', blockKeys);
        document.addEventListener('contextmenu', blockContextMenu);
        const devToolsTimer = setInterval(detectDevTools, 1000);

        return () => {
            lenis.destroy();
            document.removeEventListener('keydown', blockKeys);
            document.removeEventListener('contextmenu', blockContextMenu);
            clearInterval(devToolsTimer);
        };
    }, [showToast]);

    return (
        <>
            <SplashScreen />
            {children}
            <BlockedToast show={toastCount} />
        </>
    );
}