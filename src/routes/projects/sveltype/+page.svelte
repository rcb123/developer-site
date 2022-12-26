<script>
	import TypingGame from '../../../components/TypingGame.svelte';
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
	h1 {
		font-family: 'Lexend Deca', sans-serif;
		font-size: 2rem;
		color: var(--fg-200);
		letter-spacing: 2.5px;
	}

	.layout {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
		align-items: center;
		padding: 2rem;
	}
</style>
