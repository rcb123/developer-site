<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$components/Icon.svelte';
	import 'iconify-icon';

	let handleNavToggle: () => void;

	onMount(() => {
		const nav = document.querySelector('nav');
		if (nav) {
			handleNavToggle = () => {
				nav.dataset.transitionable = 'true';

				nav.dataset.toggled = nav.dataset.toggled === 'true' ? 'false' : 'true';
			};
			window.matchMedia('(max-width: 800px)').onchange = (e) => {
				nav.dataset.transitionable = 'false';

				nav.dataset.toggled = 'false';
			};
		}
	});
</script>

<header>
	<nav data-toggled="false" data-transitionable="false">
		<div id="nav-logo-section" class="nav-section">
			<a href="/">
				<iconify-icon icon="mdi:code-braces" />
				<p>Reza Banankhah</p>
			</a>
		</div>
		<div id="nav-mobile-section">
			<div id="nav-link-section" class="nav-section">
				<a href="/projects" on:click={handleNavToggle}>Projects</a>
				<a href="/resume" on:click={handleNavToggle}>Resume</a>
				<a href="/about" on:click={handleNavToggle}>About</a>
			</div>
			<div id="nav-social-section" class="nav-section">
				<Icon icon="github" />
				<Icon icon="linkedin" />
				<Icon icon="mail" />
				<!--
				<Icon icon='instagram' />
        		-->
			</div>
			<!-- This page should really just be merged with my about page -->
			<div id="nav-contact-section" class="nav-section">
				<a href="/contact" on:click={handleNavToggle}>Contact</a>
			</div>
		</div>
		<button id="nav-toggle-button" type="button" on:click={handleNavToggle}>
			<span>Menu</span>
			<iconify-icon icon="mdi:menu" />
		</button>
	</nav>
</header>

<style>
	nav {
		display: flex;
		width: 100%;
		border-bottom: 1px solid var(--border-color);
	}

	nav .nav-section {
		padding: 2.5rem 2rem;
		display: flex;
		gap: 1rem;
		border-left: 1px solid var(--border-color);
		align-items: center;
		justify-content: center;
	}

	#nav-mobile-section {
		display: flex;
		flex-basis: calc(100% * (2 / 3));
		z-index: 2;
	}

	#nav-toggle-button {
		align-items: center;
		background-color: transparent;
		border: none;
		border-left: 1px solid var(--border-color);
		color: white;
		cursor: pointer;
		display: none;
		gap: 1rem;
		height: 100%;
		justify-content: center;
		outline: none;
		padding: 1.7rem 3rem;
		padding-top: 1.5rem;
		position: relative;
		z-index: 3;
	}

	#nav-toggle-button:hover,
	#nav-toggle-button:hover > span {
		color: var(--highlight-color);
	}

	#nav-toggle-button > span,
	#nav-toggle-button > iconify-icon {
		display: inline-block;
		height: 1rem;
		line-height: 1rem;
	}

	#nav-social-section,
	#nav-contact-section {
		flex-grow: 1;
	}

	#nav-logo-section {
		flex-basis: calc(100% / 3);
		justify-content: flex-start;
		z-index: 5;
	}

	#nav-logo-section > a > iconify-icon,
	#nav-logo-section > a > p {
		display: inline-block;
	}

	#nav-logo-section > a {
		display: flex;
		align-items: center;
	}

	#nav-logo-section > a > iconify-icon {
		font-size: 2.5rem;
	}

	#nav-logo-section > a > p {
		margin-left: 1rem;
		font-size: 1.5rem;
	}

	#nav-link-section {
		flex-basis: 50%;
		gap: 6rem;
	}

	#nav-social-section {
		gap: 3rem;
	}

	@media screen and (max-width: 1043px) {
		#nav-logo-section > a > p {
			position: absolute;
			opacity: 0;
			font-size: 0;
		}
	}
</style>
