import { NextResponse } from 'next/server';

const UMAMI_API = 'https://api.umami.is/v1';
const WEBSITE_CREATED_AT = new Date('2024-01-01').getTime();

export async function GET(request) {
    const websiteId = process.env.UMAMI_WEBSITE_ID;
    const token = process.env.UMAMI_TOKEN;

    if (!websiteId || !token) {
        return NextResponse.json(
            { error: 'Missing UMAMI_WEBSITE_ID or UMAMI_TOKEN in .env' },
            { status: 500 }
        );
    }

    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days') || '7', 10);

    const endAt = Date.now();
    const startAt = endAt - (days * 24 * 60 * 60 * 1000);

    try {
        const headers = { 
            'x-umami-api-key': token 
        };

        const [resPageviews, resStats] = await Promise.all([
            fetch(
                `${UMAMI_API}/websites/${websiteId}/pageviews?startAt=${startAt}&endAt=${endAt}&unit=day&timezone=Asia/Jakarta`,
                { headers, next: { revalidate: 60 } }
            ),
            fetch(
                `${UMAMI_API}/websites/${websiteId}/stats?startAt=${WEBSITE_CREATED_AT}&endAt=${endAt}`,
                { headers, next: { revalidate: 60 } }
            ),
        ]);

        console.log(`[Analytics] Status: PV ${resPageviews.status} | Stats ${resStats.status}`);

        if (!resPageviews.ok || !resStats.ok) {
            return NextResponse.json({
                pageviews: { pageviews: [] },
                stats: { pageviews: { value: 0 }, visitors: { value: 0 } },
                status: 'error'
            });
        }

        const [pageviewsData, statsData] = await Promise.all([
            resPageviews.json(),
            resStats.json(),
        ]);

        return NextResponse.json({ 
            pageviews: pageviewsData, 
            stats: statsData, 
            days 
        });
    } catch (err) {
        console.error('[Analytics] Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}