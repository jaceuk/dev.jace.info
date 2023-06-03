import axios from 'axios';

interface IProps {
	request: Request;
}

export async function POST({ request }: IProps) {
	const { gRecaptchaToken } = await request.json();

	if (!gRecaptchaToken) return new Response(null, { status: 400 });

	const captchaURL = 'https://www.google.com/recaptcha/api/siteverify';

	try {
		const response = await axios({
			url: captchaURL,
			method: 'POST',
			// reCaptcha demands x-www-form-urlencoded requests
			headers: {
				ContentType: 'application/x-www-form-urlencoded; charset=utf-8'
			},
			params: {
				secret: import.meta.env.VITE_RECAPTCHA_SECRET_KEY,
				response: gRecaptchaToken
			}
		});

		const data = response.data;

		if (data.success && data.score > 0.5) {
			return new Response(null, { status: 200 });
		} else {
			return new Response(null, { status: 400 });
		}
	} catch (error) {
		return new Response(null, { status: 500 });
	}
}
