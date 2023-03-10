<script lang="ts">
	import ProjectCard from '$components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>Projects | Reza Banankhah</title>
</svelte:head>

<h1 class="text-center max-sm:text-2xl md:text-3xl font-semibold mt-4 sm:mt-12">Projects</h1>

<main class="flex items-center justify-center">
	<div class="projects grid gap-0 sm:gap-4 text-white grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
		<ProjectCard
			title="Sveltype"
			description="A typing game made using JavaScript and SvelteKit. Based on Monkeytype."
			image="sveltype.jpg"
			projectPage="https://reza-sveltype.vercel.app/"
			githubLink="https://github.com/rcb123/sveltype"
		/>
		<ProjectCard
			title="URL Shortener"
			description="A URL shortening service made using TypeScript, SvelteKit, Prisma, and MongoDB. Functional but not production ready."
			image="shortly.jpg"
			projectPage=""
			githubLink="https://github.com/rcb123/url-shortener"
		/>
		<ProjectCard
			title="Sveltcord"
			description="A chat app made using TypeScript, TailwindCSS, MongoDB, and SvelteKit. Based on Discord. In active development"
			image="sveltcord.jpg"
			projectPage=""
			githubLink="https://github.com/rcb123/sveltcord"
		/>
		<ProjectCard
			title="Video to MP3 Converter"
			description="A microservice-based video to MP3 converter using Kubernetes, Docker, MongoDB, RabbitMQ, and Python."
			image="videomp3.jpg"
			projectPage=""
			githubLink="https://github.com/rcb123/video-mp3-converter"
		/>
		<ProjectCard
			title="Clicking"
			description="A website that matches movie lovers with other people with similar tastes. Made for HackSC 2023, not fully functional."
			image="sveltcord.jpg"
			projectPage="https://clicking.vercel.app"
			githubLink="https://github.com/rcb123/HackSC-Clicking"
		/>
		<ProjectCard
			title="Maze Solver"
			description="An ASCII based maze solver. Originally made using C++ and then adapted to TypeScript."
			image="maze.jpg"
			projectPage="/projects/maze"
			githubLink="https://github.com/rcb123/maze-solver-web"
		/>
		<ProjectCard
			title="Weather App"
			description="A weather app using SvelteKit and the OpenWeatherMap API"
			image="weather.jpg"
			projectPage="/projects/weather"
			githubLink="https://github.com/rcb123/weather-app"
		/>
		<ProjectCard
			title="Tic Tac Toe"
			description="A NxN tic tac toe game written in TypeScript"
			image="tictactoe.jpg"
			projectPage="/projects/tictactoe"
			githubLink="https://github.com/rcb123/nxn-tic-tac-toe"
		/>
		<ProjectCard
			title="Developer Portfolio"
			description="My personal website! It showcases my skills and projects, as well as provides a little bit of information about me. I used SvelteKit, HTML, CSS, and JavaScript to create a responsive and visually appealing design."
			image="portfolio.jpg"
			projectPage="/"
			githubLink="https://github.com/rcb123/developer-site"
		/>
	</div>
</main>