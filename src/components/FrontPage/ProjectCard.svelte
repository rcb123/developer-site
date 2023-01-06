<script lang="ts">
	import { onMount } from 'svelte';

	import project1 from '$images/project1.jpg';
	import project2 from '$images/project2.jpg';
	import project3 from '$images/project3.jpg';
	import project4 from '$images/project4.jpg';

	export let name = '';
	export let technologies: any;
	export let duration = '';
	export let description = '';
	export let image = '';

	let dummy = project1 + project2 + project3 + project4;

	let src: string;

	onMount(() => {
		src = eval(image);
	});
</script>

<!-- Essentially, Svelte (or Vite in this case only) wants to actually package assets that actually get used,
	so a dummy statement is used to trick it into importing the files properly.
	This is caused by the 'src = eval(image)' statement which the compiler doesn't realize uses all the images -->
<p style:position="absolute" style:opacity="0">{dummy}</p>
{#if src}
	<div class="max-w-sm overflow-hidden rounded shadow-lg">
		<img class="w-full" {src} alt={name} />
		<div class="px-6 py-4">
			<div class="mb-2 text-xl font-bold">{name}</div>
			<p class="mb-1 text-sm font-light">Duration: {duration}</p>
			<p class="text-base text-gray-700">{description}</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			{#each technologies as technology}
				<span
					class="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
					>{technology}</span
				>
			{/each}
		</div>
	</div>
{/if}
