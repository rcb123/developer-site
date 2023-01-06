<script>
	let experience = [
		{
			position: '',
			company: '',
			duration: '',
			responsibilities: ''
		},
		{
			position: '',
			company: '',
			duration: '',
			responsibilities: ''
		}
	];
</script>

<div class="grid grid-cols-3 gap-4">
	<h2 class="col-span-3 text-2xl font-bold">Experience</h2>
	{#each experience as exp}
		<div class="col-span-3 mb-4">
			<h3 class="text-xl font-bold">{exp.position} at {exp.company}</h3>
			<p class="text-lg">Duration: {exp.duration}</p>
			<p class="text-lg">Responsibilities: {exp.responsibilities}</p>
		</div>
	{/each}
</div>
