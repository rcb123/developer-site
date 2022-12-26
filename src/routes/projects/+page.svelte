<script lang="ts">
	import ProjectCard from '../../components/ProjectCard.svelte';

	import { projects as projectsStore } from '../../stores/store';

	let projects: {
		title: string;
		description: string;
		image: string;
		projectPage: string;
		githubLink: string;
	}[];

	projectsStore.subscribe((value) => {
		projects = value;
	});
</script>

<svelte:head>
	<title>Projects | Reza Banankhah</title>
</svelte:head>

<main class="container">
	<h1>Projects</h1>
	<div class="projects">
		{#each projects as project}
			<ProjectCard
				title={project.title}
				description={project.description}
				image={project.image}
				projectPage={project.projectPage}
				githubLink={project.githubLink}
			/>
		{/each}
	</div>
</main>

<style>
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
		color: var(--background-color);
	}
</style>
