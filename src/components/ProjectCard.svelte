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

<div class="relative m-4 flex max-w-xs flex-col rounded-lg bg-white drop-shadow-xl">
	<img src="./images/{image}" class="rounded-lg" alt={title} width="330" height="220" />
	<div class="m-0 p-4 text-black">
		<h2>{title}</h2>
		<p>{description}</p>
	</div>
	<div class="flex flex-col justify-end h-full w-full">
		{#if projectPage}
			<button class="btn-ghost btn normal-case text-black w-full" on:click={() => onClick('project')}>
				View Project in Action
			</button>
		{/if}
		{#if githubLink}
			<button class="btn-ghost btn normal-case text-black w-full" on:click={() => onClick('github')}>
				View Source Code
			</button>
		{/if}
	</div>
</div>