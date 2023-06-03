<script lang="ts">
	import content from '$content/contact.json';
	import ContactForm from './ContactForm.svelte';
	import Marty from '$images/marty.jpg';
	import MartyDark from '$images/marty-dark.jpg';
	import HeroImage from '$components/shared/HeroImage.svelte';
</script>

<main class="with-gradient">
	<div class="inner-wrapper">
		<div class="contact">
			<div class="intro">
				<h1>{content.title}</h1>
				<p>{content.text}</p>
			</div>

			<div class="container">
				<ContactForm />
				<HeroImage image={Marty} darkImage={MartyDark} />
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	.contact {
		display: grid;
		gap: var(--s-4-5);
		width: 100%;

		.intro {
			display: grid;
			gap: var(--s-2-4);
		}
	}

	.container {
		display: flex;
		flex-direction: column;
		gap: var(--s-2-4);
		justify-content: space-between;
		align-items: center;

		@media (min-width: 768px) {
			flex-direction: row;
			align-items: flex-end;
		}
	}
</style>
