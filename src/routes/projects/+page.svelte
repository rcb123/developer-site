<script lang="ts">
	import ProjectCard from '$components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Projects | Reza Banankhah</title>
</svelte:head>

<h1 class="text-center text-3xl font-semibold">Projects</h1>

<main class="container">
	<div class="projects">
		<ProjectCard
			title="Video to MP3 Converter"
			description="A microservice-based video to MP3 converter using Kubernetes, Docker, MongoDB, RabbitMQ, and Python."
			image="project1"
			projectPage=""
			githubLink="https://github.com/rcb123/video-mp3-converter"
		/>
		<ProjectCard
			title="Sveltype"
			description="A simple typing game made using JavaScript and SvelteKit. Based on Monkeytype."
			image="project2"
			projectPage="/projects/sveltype"
			githubLink="https://github.com/rcb123/monkeytype-clone"
		/>
		<ProjectCard
			title="Weather App"
			description="A simple weather app using SvelteKit and the OpenWeatherMap API"
			image="project3"
			projectPage="/projects/weather"
			githubLink="https://github.com/rcb123/weather-app"
		/>
	</div>
</main>

<style>
	.projects {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 1rem;
		color: var(--background-color);
	}

	h1 {
		margin-top: 0.6rem;
	}
</style>
