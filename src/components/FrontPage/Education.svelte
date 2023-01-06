<script>
	let education = [
		{
			degree: "Bachelor's Degree in Computer Science Business Administration",
			major: 'Computer Science Business Administration',
			school: 'University of Southern California',
			graduationYear: '2025'
		}
	];
</script>

<div class="grid grid-cols-3 gap-4">
	<h2 class="col-span-3 text-2xl font-bold">Education</h2>
	{#each education as edu}
		<div class="col-span-3 mb-4">
			<h3 class="text-xl font-bold">{edu.degree}</h3>
			<p class="text-lg">Major: {edu.major}</p>
			<p class="text-lg">School: {edu.school}</p>
			<p class="text-lg">Graduation year: {edu.graduationYear}</p>
		</div>
	{/each}
</div>
