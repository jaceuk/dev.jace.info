<script lang="ts">
	export let scores: number[];
	const scoreAreas = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];
</script>

<div class="container">
	{#each scores as score, index}
		<div class="scoreContainer">
			<div
				class="circle"
				class:average={score < 90}
				class:good={score >= 90}
				style="background-image: conic-gradient(var(--c-{score < 90
					? 'lighthouseAverage'
					: 'lighthouseGood'}) {score}%, transparent 10%)"
			>
				<div class="number">{score}</div>
			</div>
			<div class="type">{scoreAreas[index]}</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		gap: var(--s-1);
		text-align: center;
		width: fit-content;
		margin: 0 auto;
	}

	.scoreContainer {
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: var(--s-1-2);
	}

	.circle {
		border-radius: 50%;
		padding: 3px;
		width: 56px;
		height: 56px;

		@media (min-width: 768px) {
			padding: 4px;
			width: 78px;
			height: 78px;
		}

		.number {
			font-size: var(--fs-body);
			width: fit-content;
			margin: 0 auto;
			padding: var(--s-2);
			border-radius: 50%;
			aspect-ratio: 1/1;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
			height: 50px;

			@media (min-width: 768px) {
				width: 70px;
				height: 70px;
			}
		}

		&.good {
			background-color: var(--c-lighthouseGoodPale);

			.number {
				color: var(--c-lighthouseGoodDark);
				background-color: var(--c-lighthouseGoodPale);
			}
		}

		&.average {
			background-color: var(--c-lighthouseAveragePale);

			.number {
				color: var(--c-lighthouseAverageDark);
				background-color: var(--c-lighthouseAveragePale);
			}
		}
	}

	.type {
		text-align: center;
		font-size: var(--fs-caption);
	}
</style>
