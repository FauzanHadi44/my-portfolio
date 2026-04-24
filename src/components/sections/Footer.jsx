"use client";

import React, { useEffect, useState, useCallback } from 'react';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PERIODS = [
    { label: '7D', days: 7 },
    { label: '14D', days: 14 },
    { label: '30D', days: 30 },
];

export default function Footer() {
    const [chartData, setChartData] = useState([]);
    const [totalViews, setTotalViews] = useState(0);
    const [activePeriod, setActivePeriod] = useState(7);
    const [isLoading, setIsLoading] = useState(true);

    const loadData = useCallback(async (days) => {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/analytics?days=${days}`);
            if (!res.ok) throw new Error('Failed to fetch');

            const result = await res.json();

            const pvArray = result.pageviews?.pageviews;
            if (Array.isArray(pvArray)) {
                const formatted = pvArray.map(item => ({
                    date: new Date(item.x).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }),
                    views: item.y || 0
                }));
                setChartData(formatted);
            }

            const sv = result.stats?.pageviews;
            setTotalViews(typeof sv === 'number' ? sv : (sv?.value || 0));
        } catch (error) {
            console.error("Footer Analytics Error:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadData(activePeriod);
    }, [activePeriod, loadData]);

    return (
        <footer className="mt-20 pb-12 border-t border-[var(--border-footer)] pt-12">
            <div className="max-w-4xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                    
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[10px] font-mono tracking-[0.3em] uppercase opacity-50">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Audience Overview
                        </div>
                        <div className="flex items-baseline gap-2">
                            <span className={`text-4xl font-bold transition-all duration-500 ${isLoading ? 'opacity-20 blur-sm' : 'opacity-100'}`}>
                                {totalViews.toLocaleString()}
                            </span>
                            <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Total Views</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex justify-end gap-2">
                            {PERIODS.map((p) => (
                                <button
                                    key={p.days}
                                    onClick={() => setActivePeriod(p.days)}
                                    className={`text-[9px] font-mono px-2 py-0.5 rounded border transition-all ${
                                        activePeriod === p.days 
                                        ? 'border-green-500/50 text-green-500 bg-green-500/5' 
                                        : 'border-white/5 opacity-40 hover:opacity-100'
                                    }`}
                                >
                                    {p.label}
                                </button>
                            ))}
                        </div>

                        <div className="h-16 w-full opacity-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData}>
                                    <Tooltip 
                                        content={({ active, payload }) => (
                                            active && payload ? (
                                                <div
                                                    style={{
                                                        background: 'rgba(250, 248, 245, 0.95)',
                                                        border: '1px solid rgba(0,0,0,0.12)',
                                                        borderRadius: '8px',
                                                        padding: '6px 10px',
                                                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                                                        backdropFilter: 'blur(8px)',
                                                        fontSize: '10px',
                                                        fontFamily: 'monospace',
                                                        color: '#1a1a1a',
                                                        fontWeight: '600',
                                                    }}
                                                >
                                                    {payload[0].value} views
                                                </div>
                                            ) : null
                                        )}
                                    />
                                    <Line 
                                        type="stepAfter" 
                                        dataKey="views" 
                                        stroke="#22c55e" 
                                        strokeWidth={1.5} 
                                        dot={false} 
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="flex justify-between text-[8px] font-mono opacity-20 uppercase tracking-[0.2em]">
                            <span>{activePeriod} Days Ago</span>
                            <span>Today</span>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center text-[var(--text-footer)] text-[10px] font-mono opacity-40 uppercase tracking-[0.3em]">
                    &copy; {new Date().getFullYear()} Fauzan Hadi &bull; Built with precision
                </div>
            </div>
        </footer>
    );
}