<script lang="ts">
	import { themeValue } from '$lib/stores';

	export let image: string;
	export let darkImage: string;

	let heroImage: string;

	$: $themeValue, setThemeImage();

	function setThemeImage() {
		$themeValue === 'light' ? (heroImage = image) : (heroImage = darkImage);
	}
</script>

<div class="image">
	<img src={heroImage} alt="" />
</div>

<style lang="scss">
	.image {
		width: 100%;
		max-width: 520px;
		position: relative;
		aspect-ratio: 1;
		border-radius: var(--s-2-4);
		overflow: hidden;

		@media (min-width: 768px) {
			order: 2;
		}
	}
</style>
