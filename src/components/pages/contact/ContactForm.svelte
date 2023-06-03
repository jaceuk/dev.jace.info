<script lang="ts">
	import Overlay from '$components/shared/Overlay.svelte';
	import Alert from '$components/shared/Alert.svelte';
	import Button from '$components/shared/Button.svelte';
	import Loader from '$components/shared/Loader.svelte';
	import Card from '$components/shared/Card.svelte';

	let name: string;
	let email: string;
	let message: string;

	let processing = false;
	let response: { status: number };
	let outcomeStatusCode: number | undefined;

	async function checkRecaptcha(token: string) {
		try {
			const response = await fetch('/api/verify', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					gRecaptchaToken: token
				})
			});
			return response;
		} catch (error) {
			console.log(error);
		}
	}

	async function handleSubmit() {
		processing = true;

		window.grecaptcha.ready(() => {
			window.grecaptcha
				.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: 'contactSubmit' })
				.then(async (token: string) => {
					const response = await checkRecaptcha(token);

					if (response && response.status === 200) {
						await sendEmail();
					} else {
						outcomeStatusCode = response?.status;
					}
					processing = false;
				});
		});
	}

	async function sendEmail() {
		if (name && email && message) {
			try {
				const submit = await fetch('/api/contact', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name,
						email,
						message
					})
				});

				response = await submit.json();

				if (response.status === 200) {
					outcomeStatusCode = 200;
					name = '';
					email = '';
					message = '';
				} else {
					outcomeStatusCode = 500;
				}
			} catch (error) {
				outcomeStatusCode = 500;
				console.log('error');
			}
		}
	}
</script>

<svelte:head>
	<title>Jason Newington - Contact</title>
	<script
		src="https://www.google.com/recaptcha/api.js?render={import.meta.env.VITE_RECAPTCHA_SITE_KEY}"
		async
		defer
	></script>
</svelte:head>

<div class="formContainer">
	<Card>
		{#if processing}
			<Overlay><Loader>Sending your message</Loader></Overlay>
		{/if}

		{#if outcomeStatusCode === 200}
			<Alert type="success">Your message was sent successfully.</Alert>
		{/if}

		{#if outcomeStatusCode === 400}
			<Alert type="error">ReCAPTCHA failed. Please try again.</Alert>
		{/if}

		{#if outcomeStatusCode === 500}
			<Alert type="error"
				>There was a problem sending your message, please try again. If the problem perists please
				email info@jace.info.
			</Alert>
		{/if}
		<h2 class="h3">Enquiry form</h2>

		<form on:submit|preventDefault={handleSubmit} class="form">
			<div class="row">
				<label for="name" class="label">
					Your name <span class="required">(required)</span>
				</label>
				<input id="name" type="text" class="input" bind:value={name} required />
			</div>

			<div class="row">
				<label for="email" class="label">
					Your email address <span class="required">(required)</span>
				</label>
				<input id="email" type="email" class="input" bind:value={email} required />
			</div>

			<div class="row">
				<label for="message" class="label">
					Your message <span class="required">(required)</span>
				</label>
				<textarea id="message" class="input" bind:value={message} rows={5} required />
			</div>

			<Button>Send your message</Button>
		</form>
	</Card>
</div>

<style lang="scss">
	.formContainer {
		max-width: 750px;
		min-width: 100%;
		width: 100%;

		@media (min-width: 768px) {
			min-width: 450px;
		}

		p {
			flex-grow: 1;
		}
	}

	.form {
		display: grid;
		gap: var(--s-4);
	}

	.row {
		display: grid;
		gap: var(--s-1);
	}

	.label {
		display: block;
		font-weight: var(--fw-bold);
	}

	.input {
		width: 100%;
		padding: var(--s-2);
		border-radius: var(--s-0);
		border: 1px solid var(--c-text);
		background: var(--c-input-bg);
	}

	.required {
		color: var(--c-accent);
		font-weight: var(--fw-regular);
		font-size: var(--fs-caption);
	}
</style>
