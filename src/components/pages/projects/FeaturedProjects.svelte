<script lang="ts">
	import content from '$content/projects.json';
	import Project from './Project.svelte';
</script>

<section class="with-gradient">
	<div class="inner-wrapper">
		<div class="projects">
			<div class="intro">
				<h1>{content.title}</h1>
				<p>{content.text}</p>
			</div>

			{#each content.projects as project}
				<Project {project} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.projects {
		display: grid;
		gap: var(--s-4-5);

		.intro {
			display: grid;
			gap: var(--s-2-4);
		}
	}
</style>
