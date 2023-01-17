<script lang="ts">
	export let image = '';
	export let title = '';
	export let description = '';
	export let projectPage = '';
	export let githubLink = '';

	let onClick: (context: any) => void;

	onClick = (context) => {
		if (context === 'project') {
			window.location.href = projectPage;
		}
		if (context === 'github') {
			window.open(githubLink, '_blank');
		}
	};
</script>

<div class="project-card">
	<img src="./images/{image}.jpg" alt={title} width="330" height="220" />
	<div class="info">
		<h2>{title}</h2>
		<p>{description}</p>
	</div>
	{#if projectPage}
		<button class="cta" on:click={() => onClick('project')}> View Project in Action </button>
	{/if}
	{#if githubLink}
		<button class="cta" on:click={() => onClick('github')}> View Source Code </button>
	{/if}
</div>

<style>
	.project-card {
		background-color: var(--text-color);
		border-radius: 0.5rem;
		box-shadow: 0 0.2rem 0.4rem 0.2rem var(--border-color);
		display: flex;
		flex-direction: column;
		margin: 1rem;
		max-width: 20rem;
		position: relative;
	}

	.project-card img {
		border-radius: 0.4rem;
	}

	.project-card .info {
		padding: 1rem;
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
		color: var(--text-color);
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
