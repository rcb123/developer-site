<script>
	import ProjectCard from '$components/FrontPage/ProjectCard.svelte';

	let projects = [
		{
			name: 'Sveltype',
			technologies: ['SvelteKit', 'TypeScript'],
			duration: '2 months',
			description: 'A typing game based on Monkeytype.',
			image: 'sveltype.jpg'
		},
		{
			name: 'Shortly',
			technologies: ['SvelteKit', 'TypeScript', 'Postgresql'],
			duration: '1 months',
			description: 'A URL shortening service.',
			image: 'urlshort.jpg'
		},
		{
			name: 'Sveltcord',
			technologies: ['SvelteKit', 'TypeScript', 'MongoDB'],
			duration: '1 months',
			description: 'A real-time chat app based on Discord.',
			image: 'sveltcord.jpg'
		},
		{
			name: 'Maze Solver',
			technologies: ['Svelte', 'TypeScript'],
			duration: '1 months',
			description: 'An ASCII BFS maze solver.',
			image: 'maze.jpg'
		},
		{
			name: 'NxN Tic Tac Toe',
			technologies: ['Svelte', 'TypeScript'],
			duration: '1 months',
			description: 'A resizable Tic Tac Toe game',
			image: 'tictactoe.jpg'
		},
		{
			name: 'Video to MP3 Converter',
			technologies: ['Python', 'Kubernetes', 'Docker', 'MongoDB', 'RabbitMQ'],
			duration: '1 month',
			description: 'A microservice-based video to MP3 converter.',
			image: 'videomp3.jpg'
		},
		// {
		// 	name: 'Weather App',
		// 	technologies: ['SvelteKit', 'TypeScript'],
		// 	duration: '1 months',
		// 	description: 'A weather app utilizing the OpenWeatherMap API',
		// 	image: 'weather.jpg'
		// }
		// {
		// 	name: 'Developer Portfolio',
		// 	technologies: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'HTML'],
		// 	duration: '2 months',
		// 	description:
		// 		'My personal website! It showcases my skills and projects, as well as provides a little bit of information about me. I used SvelteKit, HTML, CSS, and JavaScript to create a responsive and visually appealing design.',
		// 	image: 'portfolio.jpg'
		// }
	];
</script>

<div class="mx-auto mt-4 flex max-w-[22rem] sm:max-w-4xl flex-col">
	<h2 class="mb-3 text-4xl font-bold sm:mb-2 max-sm:text-center">My Projects</h2>
	<div class="mb-3 sm:mb-2">
		<a href="/projects" class="underline">See them in action</a>
	</div>
</div>

<div class="mx-auto flex max-w-4xl justify-center max-sm:max-w-[23rem]">
	<div class="mb-10 grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:gap-5">
		{#each projects as project}
			<ProjectCard
				name={project.name}
				technologies={project.technologies}
				duration={project.duration}
				description={project.description}
				image={project.image}
			/>
		{/each}
	</div>
</div>
<!-- 
<div class="wrapper">
	<div class="box1 bg-red-400">One</div>
	<div class="box2 bg-blue-400">Two</div>
	<div class="box3 bg-green-400">Three</div>
	<div class="box4 bg-slate-400">Four</div>
</div>

<style lang="scss">
	.wrapper {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: 200px;
	}

	.box1 {
		grid-column-start: 1;
		grid-column-end: 3;
		grid-row-start: 1;
		grid-row-end: 2;
	}

	.box2 {
		grid-column-start: 3;
		grid-column-end: 4;
		grid-row-start: 1;
		grid-row-end: 2;
	}

	.box3 {
		grid-column-start: 1;
		grid-column-end: 2;
		grid-row-start: 2;
		grid-row-end: 3;
	}

	.box4 {
		grid-column-start: 2;
		grid-column-end: 4;
		grid-row-start: 2;
		grid-row-end: 3;
	}
</style> -->
