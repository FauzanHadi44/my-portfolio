import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // 1. Validasi Input
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 });
    }

    // 2. Ambil Env Var
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    // 3. Cek apakah Env Var ada isinya (PENTING untuk debugging)
    if (!token || !chatId) {
      console.error("❌ ERROR: TELEGRAM_BOT_TOKEN atau TELEGRAM_CHAT_ID belum diset di .env.local");
      return NextResponse.json({ error: 'Konfigurasi Server Error' }, { status: 500 });
    }

    const text = `
🔔 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
📝 *Message:*
${message}
    `;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    // 4. Cek respon dari Telegram
    if (response.ok) {
      console.log("✅ Pesan terkirim ke Telegram!");
      return NextResponse.json({ success: true });
    } else {
      // Jika Telegram menolak (misal: token salah, chat not found)
      const errorData = await response.json();
      console.error("❌ Gagal kirim ke Telegram:", errorData); // Ini akan muncul di terminal kamu
      return NextResponse.json({ error: 'Gagal kirim ke Telegram', details: errorData }, { status: 500 });
    }

  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json({ error: 'Server Error' }, { status: 500 });
  }
}