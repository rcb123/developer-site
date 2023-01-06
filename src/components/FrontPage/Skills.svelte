<script>
	let skills = ['C++', 'Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'React', 'SvelteKit'];
</script>

<h2 class="text-center text-3xl font-bold mb-2">Skills</h2>
<div class="flex justify-center">
	<div class="grid grid-cols-4 mb-10">
		{#each skills as skill}
			<div class="m-8 flex h-20 w-32 items-center justify-center rounded bg-gray-100">
				{skill}
			</div>
		{/each}
	</div>
</div>
