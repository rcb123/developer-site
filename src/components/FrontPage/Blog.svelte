<script>
	let posts = [
		{
			title: '5 Tips for Debugging Your Code',
			date: 'January 1, 2022',
			content:
				"Debugging your code can be frustrating, but with these tips, you'll be able to find and fix issues more efficiently..."
		},
		{
			title: 'Why You Should Learn a Functional Programming Language',
			date: 'March 15, 2022',
			content:
				'Functional programming languages offer a number of benefits, including improved code readability and easier debugging...'
		}
	];
</script>

<div class="grid grid-cols-3 gap-4">
	<h2 class="col-span-3 text-2xl font-bold">Blog</h2>
	{#each posts as post}
		<div class="col-span-3 mb-4">
			<h3 class="text-xl font-bold">{post.title}</h3>
			<p class="text-lg">{post.date}</p>
			<p class="text-lg">{post.content}</p>
		</div>
	{/each}
</div>
