import { EmailMessage } from 'cloudflare:email';

const TO_EMAIL = 'info@jtechdynamics.com';
const FROM_EMAIL = 'noreply@jtechdynamics.com';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    });
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

export async function onRequestPost({ request, env }) {
    if (!env.EMAIL || typeof env.EMAIL.send !== 'function') {
        return json({ error: 'Email notifications are not configured yet.' }, 500);
    }

    let data;
    try {
        data = await request.json();
    } catch {
        return json({ error: 'Invalid request body.' }, 400);
    }

    const email = String(data.email || '').trim().toLowerCase();
    if (!EMAIL_PATTERN.test(email) || email.length > 254) {
        return json({ error: 'Please enter a valid email address.' }, 400);
    }

    const text = `New product-progress update request\n\nEmail: ${email}`;
    const html = `<h2>New product-progress update request</h2><p><strong>Email:</strong> ${escapeHtml(email)}</p>`;
    const rawMessage = [
        `From: J-Tech Dynamics Website <${FROM_EMAIL}>`,
        `To: ${TO_EMAIL}`,
        `Reply-To: ${email}`,
        'Subject: J-Tech product progress update request',
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="jtech-newsletter"',
        '', '--jtech-newsletter', 'Content-Type: text/plain; charset="UTF-8"', '', text,
        '', '--jtech-newsletter', 'Content-Type: text/html; charset="UTF-8"', '', html,
        '', '--jtech-newsletter--', ''
    ].join('\r\n');

    try {
        await env.EMAIL.send(new EmailMessage(FROM_EMAIL, TO_EMAIL, rawMessage));
        return json({ ok: true, message: 'You are on the product progress update list.' });
    } catch (error) {
        console.error('Newsletter email failed:', error);
        return json({ error: 'Unable to save your email. Please try again.' }, 500);
    }
}

export function onRequestGet() {
    return json({ error: 'Method not allowed.' }, 405);
}
