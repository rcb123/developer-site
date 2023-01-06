<script>
	import ProjectCard from '$components/FrontPage/ProjectCard.svelte';

	let projects = [
		{
			name: 'Video to MP3 Converter',
			technologies: ['Python', 'Kubernetes', 'Docker', 'MongoDB', 'RabbitMQ'],
			duration: '1 month',
			description: 'A microservice-based video to MP3 converter.',
			image: 'project1'
		},
		{
			name: 'Sveltype',
			technologies: ['SvelteKit', 'TypeScript', 'CSS', 'HTML'],
			duration: '1 months',
			description: 'A typing game based on Monkeytype.',
			image: 'project2'
		},
		{
			name: 'Weather App',
			technologies: ['SvelteKit', 'TypeScript', 'CSS', 'HTML'],
			duration: '1 months',
			description: 'A weather app utilizing the OpenWeatherMap API',
			image: 'project3'
		},
		{
			name: 'Developer Portfolio',
			technologies: ['SvelteKit', 'TypeScript', 'JavaScript', 'CSS', 'HTML'],
			duration: '2 months',
			description:
				'My personal website! It showcases my skills and projects, as well as provides a little bit of information about me. I used SvelteKit, HTML, CSS, and JavaScript to create a responsive and visually appealing design."',
			image: 'project4'
		}
	];
</script>

<h2 class="text-center text-3xl font-bold">Portfolio</h2>
<h3 class="mb-4 text-center">See them in action on my Projects page</h3>
<div class="flex justify-center">
	<div class="ml-4 mr-4 mb-10 grid grid-cols-3 gap-4">
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
