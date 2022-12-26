<script lang="ts">
	import { onMount } from 'svelte';

	import project1 from '$images/project1.jpg';
	import project2 from '$images/project2.jpg';
	import project3 from '$images/project3.jpg';

	export let image = '';
	export let title = '';
	export let description = '';
	export let projectPage = '';
	export let githubLink = '';

	let dummy = project1 + project2 + project3;

	let src: string;

	let onClick: (context: any) => void;

	onClick = (context) => {
		if (context === 'project') {
			window.location.href = projectPage;
		}
		if (context === 'github') {
			window.open(githubLink, '_blank');
		}
	};

	onMount(() => {
		src = eval(image);
	});
</script>

<!-- Essentially, Svelte (or Vite in this case only wants to actually package assets that actually get used,
	so a dummy statement is used to trick it into importing the files properly.
	This is caused by the 'src = eval(image)' statement which the compiler doesn't realize uses all the images -->
<p style:position="absolute" style:opacity="0">{dummy}</p>
{#if src}
	<div class="project-card">
		<img {src} alt={title} />
		<div class="info">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
		{#if projectPage}
			<button class="cta" on:click={() => onClick('project')}> View Project in Action </button>
		{/if}
		<button class="cta" on:click={() => onClick('github')}> View Source Code </button>
	</div>
{/if}

<style>
	.project-card {
		background-color: #ffffff;
		border-radius: 0.5rem;
		box-shadow: 0 0.5rem 1rem var(--border-color);
		display: flex;
		flex-direction: column;
		margin: 1rem;
		max-width: 20rem;
		position: relative;
	}

	.project-card img {
		object-fit: contain;
		width: 100%;
		border-radius: 0.4rem;
	}

	.project-card .info {
		padding: 1rem;
		color: var(--background-color);
	}

	.project-card .info h2 {
		margin: 0;
		color: var(--background-color);
	}

	.project-card .info p {
		margin: 0.5rem 0;
		color: var(--background-color);
	}

	.project-card .cta {
		background-color: var(--background-color);
		border: none;
		border-radius: 0.6rem;
		color: #ffffff;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1rem;
		font-weight: bold;
		height: 2.5rem;
		margin: 0.5rem;
		width: 94%;
	}

	.project-card .cta:hover {
		background-color: var(--highlight-color);
	}
</style>
