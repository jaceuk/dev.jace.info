<script lang="ts">
	import content from '$content/hero.json';
	import Spock from '$images/spock.jpg';
	import SpockDark from '$images/spock-dark.jpg';
	import HeroImage from '$components/shared/HeroImage.svelte';
</script>

<section class="with-gradient">
	<div class="inner-wrapper">
		<div class="hero">
			<HeroImage image={Spock} darkImage={SpockDark} />

			<div>
				<h1 class="hero">{content.title}</h1>
				<div class="subtitle">{content.subtitle}</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.hero {
		display: flex;
		flex-direction: column;
		gap: var(--s-2-4);
		justify-content: space-between;

		@media (min-width: 768px) {
			flex-direction: row;
		}

		h1 {
			margin: var(--s-1-2) 0;
		}
	}
</style>
