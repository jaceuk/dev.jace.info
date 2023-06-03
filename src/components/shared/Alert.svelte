<script lang="ts">
	import { CheckCircleIcon } from '@indaco/svelte-iconoir/check-circle';
	import { WarningCircleIcon } from '@indaco/svelte-iconoir/warning-circle';

	export let type: string;
</script>

<div
	class="container"
	class:success={type === 'success'}
	class:error={type === 'error'}
	role={type === 'error' ? 'alert' : undefined}
>
	<div class="iconContainer">
		{#if type === 'success'}
			<CheckCircleIcon style="width:100%; height:100%;" />
		{/if}

		{#if type === 'error'}
			<WarningCircleIcon style="width:100%; height:100%;" />
		{/if}
	</div>
	<p class="textContainer"><slot /></p>
</div>

<style lang="scss">
	.container {
		display: flex;
		gap: var(--s-2);
		align-items: flex-start;
		padding: var(--s-2);
		color: var(--c-paper);
		border-radius: var(--s-1);
		font-size: var(--fs-nav);
		border: 1px solid black;

		&.success {
			background-color: var(--c-alert-success-bg);
			color: var(--c-alert-success-text);
			border-color: var(--c-alert-success-border);
		}

		&.error {
			background-color: var(--c-alert-error-bg);
			color: var(--c-alert-error-text);
			border-color: var(--c-alert-error-border);
		}

		.iconContainer {
			height: 40px;
			min-width: 40px;
		}

		.textContainer {
			min-height: 40px;
			display: flex;
			align-items: center;
		}
	}
</style>
