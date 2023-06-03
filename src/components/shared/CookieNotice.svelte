<script lang="ts">
	import { browser } from '$app/environment';
	import Button from '$components/shared/Button.svelte';

	let cookieConsent = (browser && !!localStorage.getItem('cookieConsent')) || false;

	function handleAccept() {
		cookieConsent = true;
		browser && localStorage.setItem('cookieConsent', 'true');
	}
</script>

{#if browser && !cookieConsent}
	<div class="cookieNotice">
		<div class="inner-wrapper">
			<div class="content">
				<p>
					This website uses cookies for analytical purposes. By continuing to use this website you
					are indicating that you are happy with this.
				</p>
				<Button onClick={handleAccept}>Accept</Button>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.cookieNotice {
		background: var(--c-paper);
		box-shadow: 0px 4px var(--s-1-2) rgba(0, 0, 0, 0.25);
		padding: var(--s-2-4) 0;

		width: 100%;
		position: fixed;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		bottom: 0;
		z-index: 999;

		.content {
			display: flex;
			gap: var(--s-2-4);
			align-items: center;
			flex-direction: column;

			@media (min-width: 768px) {
				flex-direction: row;
			}
		}
	}
</style>
