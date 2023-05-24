<script lang="ts">
	import { fly } from 'svelte/transition';

	export let letters: string[];
</script>

{#each letters as letter, index}
	<span
		in:fly={{ y: 100, duration: 1000, delay: 1000 + 100 * index }}
		class="z-30 inline-block"
	>
		{letter}&nbsp;
	</span>
{/each}
