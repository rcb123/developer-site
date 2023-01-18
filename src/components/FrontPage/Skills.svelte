<script>
	import 'iconify-icon';

	let skills = [
		{
			name: 'HTML5',
			icon: 'mdi:language-html5'
		},
		{
			name: 'CSS3',
			icon: 'mdi:language-css3'
		},
		{
			name: 'TailwindCSS',
			icon: 'mdi:tailwind'
		},
		{
			name: 'TypeScript',
			icon: 'mdi:language-typescript'
		},
		{
			name: 'Svelte',
			icon: 'carbon:logo-svelte'
		},
		{
			name: 'Python',
			icon: 'mdi:language-python'
		},
		{
			name: 'React',
			icon: 'mdi:react'
		},
		{
			name: 'GitHub',
			icon: 'mdi:github'
		},
	];
</script>

<div class="mx-auto mb-10 flex max-w-4xl flex-col">
	<h2 class="my-4 text-4xl font-bold">My Toolkit 💻</h2>
	<div class="flex flex-col justify-center">
		<div class="grid grid-cols-4">
			{#each skills as skill}
				<div class="mx-4 my-8 flex h-20 w-32 flex-col items-center justify-center rounded text-2xl">
					<span class="text-5xl">
						<iconify-icon icon={skill.icon} />
					</span>
					{skill.name}
				</div>
			{/each}
		</div>
		<!-- <ul class="mx-auto mt-5 mb-14 flex list-disc flex-wrap justify-center">
			{#each skills as skill}
				<li class="flex w-20 list-none flex-col flex-wrap items-center p-5 text-3xl">
					<iconify-icon icon={skill.icon} />
					{skill.name}
				</li>
			{/each}
		</ul> -->
	</div>
</div>
