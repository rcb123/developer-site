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

<div class="w-full px-10 pb-10 sm:px-28 md:px-32 lg:px-36 xl:px-44">
	<h1
		class="2xl:leading[10rem] z-40 mb-20 cursor-default text-[3.5rem] font-semibold leading-[3.5rem] sm:text-[5.2rem] sm:leading-[5.5rem] md:text-[6.4rem] md:leading-[6rem] lg:mb-32 lg:text-[7.5rem] lg:leading-[7rem] xl:text-[9.2rem] xl:leading-[9rem] 2xl:text-[10.8rem]"
	>
		Featured Projects
	</h1>

	<div class="z-30 space-y-32 sm:space-y-40 xl:space-y-[35vh]">
		{#each projects as { name, description, githubLink, demoLink, image }, index}
			{#if index % 2 === 0}
				<RightProjectCard {name} {description} {githubLink} {demoLink} {image} />
			{:else}
				<LeftProjectCard {name} {description} {githubLink} {demoLink} {image} />
			{/if}
		{/each}
	</div>
</div>
