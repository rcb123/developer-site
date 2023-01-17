<script lang="ts">
	export let name = '';
	export let technologies: any;
	export let duration = '';
	export let description = '';
	export let image = '';
</script>

<div class="max-w-sm overflow-hidden rounded shadow-lg">
	<img class="w-full" src="/images/{image}" alt={name} />
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
