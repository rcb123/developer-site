<script lang="ts">
	export let name = '';
	export let description = '';
	export let githubLink = '';
	export let demoLink = '';
	export let image = '';
</script>

<div
	class="container flex flex-col-reverse items-start lg:flex-row lg:items-center lg:justify-between lg:space-x-[5vw]"
>
	<div class="space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-4">
		<h1
			class=" mt-5 cursor-default text-2xl font-bold sm:text-3xl lg:mt-0 lg:text-4xl 2xl:text-5xl"
		>
			<div class="m-0 flex items-center overflow-hidden lg:h-[52px] 2xl:h-[60px]">
				<div>{name}</div>
			</div>
		</h1>
		<p class="cursor-default text-sm font-normal sm:text-xl xl:text-2xl 2xl:text-3xl">
			{description}
		</p>
		<div class="flex items-center justify-start space-x-6">
			{#if githubLink !== '/' && githubLink !== ''}
				<div>
					<a href={githubLink} target="_blank" rel="noreferrer">
						<iconify-icon
							icon="mdi:github"
							height="none"
							width="none"
							class="h-5 w-5 transition duration-200 ease-in-out hover:-translate-y-1 sm:h-7 sm:w-7 lg:h-8 lg:w-8 2xl:h-9 2xl:w-9"
						/>
					</a>
				</div>
			{/if}
			{#if demoLink !== '/' && demoLink !== ''}
				<div>
					<!-- Live Demo Button -->
					<a href={demoLink} target="_blank">
						<iconify-icon
							icon="mdi:arrow-right"
							height="none"
							width="none"
							class="h-5 w-5 transition duration-200 ease-in-out hover:-translate-y-1 sm:h-7 sm:w-7 lg:h-8 lg:w-8 2xl:h-9 2xl:w-9"
						/>
					</a>
				</div>
			{/if}
		</div>
	</div>

	<div
		class="relative h-[250px] w-full overflow-hidden sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px]"
	>
		<img
			src={image}
			alt="project"
			class="absolute h-full w-full object-contain will-change-transform"
		/>
		<div class="absolute left-0 top-0 h-full w-full" />
	</div>
</div>
