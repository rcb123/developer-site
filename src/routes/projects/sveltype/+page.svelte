<script>
	import TypingGame from '$components/TypingGame.svelte';
</script>

<div class="layout">
	<nav>
		<h1>🔥 sveltype</h1>
	</nav>

	<main>
		<TypingGame />
	</main>
</div>

<style lang="scss">
	/* lexend-deca-regular - latin */
	@font-face {
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
		src: local(''), url('$static/fonts/lexend-deca-v17-latin/lexend-deca-v17-latin-regular.woff2') format('woff2'),
			url('$static/fonts/lexend-deca-v17-latin/lexend-deca-v17-latin-regular.woff') format('woff');
	}

	h1 {
		font-family: 'Lexend Deca', sans-serif;
		font-size: 2rem;
		margin-top: 16.5rem;
		color: var(--fg-200);
		letter-spacing: 2.5px;
	}

	.layout {
		background-color: var(--background-color);
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
		align-items: center;
		padding: 2rem;
	}
</style>
