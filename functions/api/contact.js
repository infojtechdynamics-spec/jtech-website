import { EmailMessage } from 'cloudflare:email';

const TO_EMAIL = 'info@jtechdynamics.com';
const FROM_EMAIL = 'noreply@jtechdynamics.com';

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
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

function cleanHeader(value) {
    return String(value).replace(/[\r\n]+/g, ' ').trim();
}

function buildEmail({ name, email, subject, text, html }) {
    const boundary = `jtech-${crypto.randomUUID()}`;

    return [
        `From: J-Tech Dynamics Website <${FROM_EMAIL}>`,
        `To: ${TO_EMAIL}`,
        `Reply-To: ${cleanHeader(name)} <${cleanHeader(email)}>`,
        `Subject: ${cleanHeader(subject)}`,
        'MIME-Version: 1.0',
        `Content-Type: multipart/alternative; boundary="${boundary}"`,
        '',
        `--${boundary}`,
        'Content-Type: text/plain; charset="UTF-8"',
        'Content-Transfer-Encoding: 7bit',
        '',
        text,
        '',
        `--${boundary}`,
        'Content-Type: text/html; charset="UTF-8"',
        'Content-Transfer-Encoding: 7bit',
        '',
        html,
        '',
        `--${boundary}--`,
        ''
    ].join('\r\n');
}

export async function onRequestPost({ request, env }) {
    if (!env.EMAIL || typeof env.EMAIL.send !== 'function') {
        return jsonResponse({ error: 'Email binding is not configured.' }, 500);
    }

    let data;

    try {
        data = await request.json();
    } catch {
        return jsonResponse({ error: 'Invalid request body.' }, 400);
    }

    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const classification = String(data.classification || '').trim();
    const message = String(data.message || '').trim();
    const subject = String(data.subject || `J-Tech Dynamics Inquiry - ${classification}`).trim();

    if (!name || !email || !classification || !message) {
        return jsonResponse({ error: 'Please complete all required fields.' }, 400);
    }

    const text = [
        `Operator Name: ${name}`,
        `Secure Email: ${email}`,
        `Inquiry Classification: ${classification}`,
        '',
        'Message Payload:',
        message
    ].join('\n');

    const html = `
        <h2>New J-Tech Dynamics inquiry</h2>
        <p><strong>Operator Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Secure Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Inquiry Classification:</strong> ${escapeHtml(classification)}</p>
        <p><strong>Message Payload:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
    `;

    try {
        const rawMessage = buildEmail({ name, email, subject, text, html });
        await env.EMAIL.send(new EmailMessage(FROM_EMAIL, TO_EMAIL, rawMessage));

        return jsonResponse({ ok: true });
    } catch (error) {
        console.error('Contact form email failed:', error);
        return jsonResponse({ error: 'Email could not be sent.' }, 500);
    }
}

export function onRequestGet() {
    return jsonResponse({ error: 'Method not allowed.' }, 405);
}
