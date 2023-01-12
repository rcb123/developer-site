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
			image="videomp3"
			projectPage=""
			githubLink="https://github.com/rcb123/video-mp3-converter"
		/>
		<ProjectCard
			title="Sveltype"
			description="A typing game made using JavaScript and SvelteKit. Based on Monkeytype."
			image="sveltype"
			projectPage="https://reza-sveltype.vercel.app/"
			githubLink="https://github.com/rcb123/sveltype"
		/>
		<ProjectCard
			title="Sveltcord"
			description="A chat app made using TypeScript, TailwindCSS, MongoDB, and SvelteKit. Based on Discord. In active development"
			image="sveltcord"
			projectPage=""
			githubLink="https://github.com/rcb123/sveltcord"
		/>
		<ProjectCard
			title="Weather App"
			description="A weather app using SvelteKit and the OpenWeatherMap API"
			image="weather"
			projectPage="/projects/weather"
			githubLink="https://github.com/rcb123/weather-app"
		/>
		<ProjectCard
			title="Developer Portfolio"
			description="My personal website! It showcases my skills and projects, as well as provides a little bit of information about me. I used SvelteKit, HTML, CSS, and JavaScript to create a responsive and visually appealing design."
			image="portfolio"
			projectPage="/"
			githubLink="https://github.com/rcb123/developer-site"
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
