import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const formBody = await request.json();
	const { name, email, message } = formBody;

	let transporter;

	if (import.meta.env.VITE_SMTP_SECURE === 'true') {
		transporter = nodemailer.createTransport({
			host: import.meta.env.VITE_SMTP_HOST,
			port: import.meta.env.VITE_SMTP_PORT,
			auth: {
				user: import.meta.env.VITE_SMTP_USER,
				pass: import.meta.env.VITE_SMTP_PASS
			},
			secure: import.meta.env.VITE_SMTP_SECURE
		});
	} else {
		transporter = nodemailer.createTransport({
			host: import.meta.env.VITE_SMTP_HOST,
			port: import.meta.env.VITE_SMTP_PORT,
			auth: {
				user: import.meta.env.VITE_SMTP_USER,
				pass: import.meta.env.VITE_SMTP_PASS
			}
		});
	}

	try {
		await transporter.sendMail({
			from: email,
			to: 'info@jace.info',
			subject: `JACE.INFO contact form submission from ${name}`,
			html: `<p>You have a contact form submission</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Message: </strong> ${message}</p>
      `
		});
		return json({ status: 200 });
	} catch (error) {
		return json({ status: 500 });
	}
}
