<script lang="ts">
	import { browser } from '$app/environment';
	import { themeValue } from '$lib/stores';
	import { HalfMoonIcon } from '@indaco/svelte-iconoir/half-moon';
	import { SunLightIcon } from '@indaco/svelte-iconoir/sun-light';

	let theme: string;

	if (browser) {
		theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		$themeValue = theme;
	}

	function handleThemeToggle() {
		theme = theme === 'dark' ? 'light' : 'dark';
		if (browser) {
			document.documentElement.setAttribute('data-theme', theme);
			localStorage.setItem('theme', theme);
		}
		$themeValue = theme;
	}
</script>

<button aria-label="Toggle dark/light mode" on:click={handleThemeToggle}>
	{#if theme === 'light'}
		<HalfMoonIcon style="width:27px; height:27px;" />
	{:else}
		<SunLightIcon style="width:27px; height:27px; color: white" />
	{/if}
</button>

<style lang="scss">
	button {
		border: none;
		background: none;
		padding: 0;
		display: flex;
		padding: var(--s-1-2);

		.icon {
			fill: red;
			width: 27px;
			height: 27px;
		}
	}
</style>
