<script>
	import Icon from '$components/Icon.svelte';
	import 'iconify-icon';
</script>

<div class="navbar h-[10vh] border-b bg-base-100">
	<div class="navbar-start">
		<a href="/" class="btn-ghost btn text-xl normal-case hover:bg-gray-200 hover:text-black">
			<iconify-icon icon="mdi:code-braces" class="mr-2 text-4xl" />
			Reza Banankhah
		</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal px-1">
			<li>
				<a href="/projects" class="btn-ghost btn hover:bg-gray-200 hover:text-black">
					Projects
					<svg
						class="fill-current"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
					>
				</a>
				<ul class="dropdown-content menu rounded-box menu-compact z-10 bg-base-100 p-2 shadow-md">
					<li>
						<a href="https://reza-sveltype.vercel.app/" class="hover:bg-gray-200 hover:text-black"
							>Sveltype</a
						>
					</li>
					<li>
						<a href="https://hur.vercel.app/" class="hover:bg-gray-200 hover:text-black"
							>Shortly</a
						>
					</li>
					<li>
						<a href="/projects/maze" class="hover:bg-gray-200 hover:text-black">Maze Solver</a>
					</li>
					<li>
						<a href="/projects/weather" class="hover:bg-gray-200 hover:text-black">Weather App</a>
					</li>
					<li>
						<a href="/projects/tictactoe" class="hover:bg-gray-200 hover:text-black">Tic Tac Toe</a>
					</li>
				</ul>
			</li>
			<li><a href="/resume" class="btn-ghost btn hover:bg-gray-200 hover:text-black">Resume</a></li>
			<li><a href="/about" class="btn-ghost btn hover:bg-gray-200 hover:text-black">About</a></li>
			<li>
				<a href="/contact" class="btn-ghost btn hover:bg-gray-200 hover:text-black">Contact</a>
			</li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="dropdown dropdown-end">
			<div
				class="flex flex-grow items-center justify-center gap-12 py-10 px-6 text-xl max-lg:hidden"
			>
				<Icon icon="github" />
				<Icon icon="linkedin" />
				<Icon icon="mail" />
				<!--
				<Icon icon='instagram' />
        		-->
			</div>
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn-ghost btn hover:bg-gray-200 hover:text-black lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow-md"
			>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<li><a href="/projects" class="hover:bg-gray-200">Projects</a></li>
				<li><a href="/resume" class="hover:bg-gray-200">Resume</a></li>
				<li><a href="/about" class="hover:bg-gray-200">About</a></li>
				<li><a href="/contact" class="hover:bg-gray-200">Contact</a></li>
			</ul>
		</div>
	</div>
</div>
