<script lang="ts">
	import { Shadow } from 'svelte-loading-spinners';
</script>

<div class="container">
	<Shadow size={30} color="#FFFFFF" />
	<slot />
</div>

<style lang="scss">
	.container {
		display: flex;
		gap: var(--s-3);
		align-items: center;
		font-size: var(--fs-h3);
		font-weight: var(--fw-bold);
		margin: var(--s-2);
		color: var(--c-white);
		text-align: center;
	}
</style>
