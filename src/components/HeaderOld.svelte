<script lang="ts">
	import Icon from '$components/Icon.svelte';
	import 'iconify-icon';
</script>

<header>
	<nav class="flex h-1/5 w-full border-b border-b-black">
		<div
			id="nav-logo-section"
			class="w-1/5] flex items-center justify-start border-l border-l-black py-10 px-8"
		>
			<a href="/" class="flex items-center">
				<iconify-icon icon="mdi:code-braces" class="inline-block text-4xl" />
				<p class="ml-4 inline-block text-2xl">Reza Banankhah</p>
			</a>
		</div>
		<div class="flex basis-2/3">
			<div class="flex items-center justify-center border-l border-l-black py-10 px-4">
				<a href="/projects" class="px-8">Projects</a>
				<a href="/resume" class="px-8">Resume</a>
				<a href="/about" class="px-8">About</a>
			</div>
			<div
				class="flex flex-grow items-center justify-center gap-12 border-l border-l-black py-10 px-8"
			>
				<Icon icon="github" />
				<Icon icon="linkedin" />
				<Icon icon="mail" />
				<!--
				<Icon icon='instagram' />
        		-->
			</div>
			<div
				class="flex flex-grow items-center justify-center gap-4 border-l border-l-black py-10 px-8"
			>
				<a href="/contact">Contact</a>
			</div>
		</div>
		<button
			type="button"
			class="relative hidden h-full cursor-pointer items-center justify-center gap-4 border-l border-none border-l-black bg-transparent py-7 px-12 text-white outline-none hover:text-[var(--highlight-color)]"
		>
			<span class="inline-block h-4 leading-4 hover:text-[var(--highlight-color)]">Menu</span>
			<iconify-icon icon="mdi:menu" class="inline-block h-4 leading-4" />
		</button>
	</nav>
</header>

<style>
	@media screen and (max-width: 1043px) {
		#nav-logo-section > a > p {
			display: none;
		}
	}
</style>
