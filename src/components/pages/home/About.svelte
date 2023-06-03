<script type="ts">
	import SkillIcons from './SkillIcons.svelte';
	import content from '$content/about.json';
	import Card from '$components/shared/Card.svelte';
</script>

<section class="with-gradient">
	<div class="inner-wrapper">
		<div class="about">
			<div class="intro">
				<h2>{content.title}</h2>
				<p>{content.text}</p>
			</div>
			<div class="sections">
				{#each content.sections as section}
					<Card>
						<h3>{section.title}</h3>

						{#each section.text as paragraph}
							<p>{paragraph}</p>
						{/each}

						{#if section.icons === 'skills'}
							<SkillIcons />
						{/if}
					</Card>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.about {
		display: grid;
		gap: var(--s-4-5);

		.intro {
			display: grid;
			gap: var(--s-2-4);
		}

		.sections {
			display: grid;
			gap: var(--s-4-5);

			@media (min-width: 768px) {
				grid-template-columns: 1fr 1fr;
				align-items: start;
			}

			.section {
				display: grid;
				gap: var(--s-2-4);
				width: 100%;
			}
		}

		.skills {
			display: grid;
			gap: var(--s-2-4);
			grid-template-columns: 1fr 1fr;
			justify-content: center;
			align-items: center;

			.image {
				width: 100%;

				img {
					margin: 0 auto;
					border-radius: 0.8rem;
					overflow: hidden;
				}
			}
		}
	}
</style>
