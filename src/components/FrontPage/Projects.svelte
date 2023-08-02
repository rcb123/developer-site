<script lang="ts">
	import 'iconify-icon';
	import RightProjectCard from './ProjectCards/RightProjectCard.svelte';
	import LeftProjectCard from './ProjectCards/LeftProjectCard.svelte';

	let projects = [
		{
			name: 'Sveltype',
			description: 'A typing game based on Monkeytype.',
			githubLink: 'https://github.com/rcb123/sveltype',
			demoLink: 'https://reza-sveltype.vercel.app/',
			image: '/images/sveltype.jpg'
		},
		{
			name: 'Shortly',
			description: 'A URL shortening service with CRUD functionality.',
			githubLink: 'https://github.com/rcb123/url-shortener',
			demoLink: 'https://hur.vercel.app',
			image: '/images/shortly.jpg'
		},
		{
			name: 'Sveltcord',
			description: 'A real-time chat app based on Discord.',
			githubLink: 'https://github.com/rcb123/sveltcord',
			demoLink: '/',
			image: '/images/sveltcord.jpg'
		},
		{
			name: 'Maze Solver',
			description: 'An ASCII BFS maze solver.',
			githubLink: 'https://github.com/rcb123/maze-solver-web',
			demoLink: '/projects/maze',
			image: '/images/maze.jpg'
		},
		{
			name: 'Tic Tac Toe',
			description: 'A resizable Tic Tac Toe game',
			githubLink: 'https://github.com/rcb123/nxn-tic-tac-toe',
			demoLink: '/projects/tictactoe',
			image: '/images/tictactoe.jpg'
		},
		{
			name: 'Video to MP3',
			description: 'A microservice-based video to MP3 converter.',
			githubLink: 'https://github.com/rcb123/video-mp3-converter',
			demoLink: '/',
			image: '/images/videomp3.jpg'
		}
	];
</script>

<div class="mx-auto flex max-w-6xl flex-col justify-center px-10 pb-10 sm:px-24">
	<h1
		class="z-40 mb-10 cursor-default text-[2rem] font-semibold leading-[3.5rem] sm:text-[3rem] sm:leading-[5rem] md:text-[4rem] md:leading-[5.5rem]"
	>
		Featured Projects
	</h1>

	<div class="z-30 space-y-[10vh]">
		{#each projects as { name, description, githubLink, demoLink, image }, index}
			{#if index % 2 === 0}
				<LeftProjectCard {name} {description} {githubLink} {demoLink} {image} />
			{:else}
				<RightProjectCard {name} {description} {githubLink} {demoLink} {image} />
			{/if}
		{/each}
	</div>
</div>
