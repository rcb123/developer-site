<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	import AnimatedLetters from '../AnimatedLetters.svelte';
	import 'iconify-icon';
	import { backInOut, cubicIn, cubicInOut } from 'svelte/easing';

	const phrases = [
		'Hey, click me!',
		'Do it again',
		'Yes, go on',
		"Don't know why I created this",
		'Anyway...',
		"Drop me an email if you'd like",
		'...',
		'Still playing with this? 😂',
		'You can stop now.',
		'Seriously.',
		"Check out the website now, for goodness' sake!",
		"I promise I won't bite",
		'Are you having fun yet?',
		'Clicking like a pro!',
		"You're amazing at clicking",
		'Clickception!',
		"You're persistent, I'll give you that",
		"You've got the magic click",
		'Keep clicking, good things will happen',
		'If you click this 100 times, a unicorn will appear',
		"You're just one click away from greatness",
		"Click me if you're awesome",
		'Clickity-click!',
		'You must have strong fingers',
		'The button that keeps on giving',
		"You're getting closer to world domination, one click at a time",
		'Did you find the hidden message yet?',
		"You're my favorite clicker",
		"Congratulations, you're officially addicted to clicking"
	];

	const title = ['Hello!', "I'm", 'Reza'];

	const body = ["I'm", 'developing', 'Creative', '&', 'Interactive', 'webapps', '🚀'];

	let currentIndex = 0;

	let tooltipVisible = false;

	let visible = false;

	function handleClick() {
		if (!tooltipVisible) {
			tooltipVisible = true;
			return;
		}
		if (currentIndex === phrases.length - 1) {
			return;
		} else {
			currentIndex = (currentIndex + 1) % phrases.length;
		}
	}

	function showTooltip() {
		tooltipVisible = true;
	}

	function hideTooltip() {
		tooltipVisible = false;
	}

	onMount(() => (visible = true));
	onDestroy(() => (visible = false));
</script>

<section class="inset-0 mx-auto flex h-[90vh] max-w-6xl justify-center p-10 text-black sm:p-24">
	{#if visible}
		<div class="flex flex-col justify-center gap-5">
			<div class="flex items-center justify-between" in:fade={{ duration: 700 }}>
				<div class="relative w-fit">
					<img
						src="/images/profile.jpg"
						alt=""
						on:click={handleClick}
						on:keydown
						on:mouseenter={showTooltip}
						on:mouseleave={hideTooltip}
						class="!z-10 h-24 w-24 cursor-pointer rounded-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm sm:h-32 sm:w-32"
					/>
					{#if tooltipVisible}
						<span
							class="absolute top-[50%] left-[125%] z-[1] w-32 -translate-y-1/2 rounded-md bg-gray-700 p-2 text-center text-sm text-white"
							transition:fade={{ duration: 300, easing: cubicInOut }}>{phrases[currentIndex]}</span
						>
					{/if}
				</div>
				<div class="flex items-center justify-between space-x-2">
					<div class="h-0.5 w-4 bg-black sm:w-8 md:w-10" />
					<p
						class="text-sm font-medium capitalize text-black transition-colors duration-300 ease-in-out hover:text-blue-600 md:text-lg xl:text-xl"
					>
						Available for internship
					</p>
				</div>
			</div>

			<h1 class="text-3xl text-black sm:text-5xl">
				<AnimatedLetters letters={title} />
			</h1>

			<p class="text-xl sm:text-3xl">
				<AnimatedLetters letters={body} />
			</p>

			<p class="text-sm text-zinc-500 sm:text-base" in:fade={{ duration: 700 }}>
				As a Computer Science Business Administration major with a passion for full-stack web
				development and software engineering, I thrive on opportunities to grow and expand my
				skillset.
				<br /><br />
				With expertise in C++, Python, and JavaScript, I confidently tackle projects of any scale. My
				insatiable thirst for knowledge drives me to embrace new challenges, and I possess a unique blend
				of technical proficiency and business acumen that adds value to any team.
			</p>

			<div class="z-10 my-14 flex w-full items-center justify-between">

				<a href="https://github.com/rcb123" target="_blank" rel="noreferrer">
					<span
						class="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-blue-700/70 md:h-[4.8rem] md:w-[4.8rem] lg:h-[5.2rem] lg:w-[5.2rem] xl:h-[5.6rem] xl:w-[5.6rem] 2xl:h-[6rem] 2xl:w-[6rem]"
						in:scale={{ duration: 500, delay: 500, easing: backInOut }}
					>
						<span
							class="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-700/90 md:h-[3.8rem] md:w-[3.8rem] lg:h-[4.2rem] lg:w-[4.2rem] xl:h-[4.6rem] xl:w-[4.6rem] 2xl:h-[5rem] 2xl:w-[5rem]"
							in:scale={{ duration: 500, delay: 1000, easing: backInOut }}
						>
							<iconify-icon
								icon="mdi:github"
								class="flex items-center justify-center text-center text-base text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
								in:fade={{ duration: 400, delay: 1400, easing: cubicIn }}
							/>
						</span>
					</span>
				</a>

				<a href="https://www.linkedin.com/in/rbanankhah/" target="_blank" rel="noreferrer">
					<span
						class="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-blue-700/70 md:h-[4.8rem] md:w-[4.8rem] lg:h-[5.2rem] lg:w-[5.2rem] xl:h-[5.6rem] xl:w-[5.6rem] 2xl:h-[6rem] 2xl:w-[6rem]"
						in:scale={{ duration: 500, delay: 500, easing: backInOut }}
					>
						<span
							class="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-700/90 md:h-[3.8rem] md:w-[3.8rem] lg:h-[4.2rem] lg:w-[4.2rem] xl:h-[4.6rem] xl:w-[4.6rem] 2xl:h-[5rem] 2xl:w-[5rem]"
							in:scale={{ duration: 500, delay: 1000, easing: backInOut }}
						>
							<iconify-icon
								icon="mdi:linkedin"
								class="flex items-center justify-center text-center text-base text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
								in:fade={{ duration: 400, delay: 1400, easing: cubicIn }}
							/>
						</span>
					</span>
				</a>

				<a href="mailto:rbanankhah@gmail.com">
					<span
						class="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-blue-700/70 md:h-[4.8rem] md:w-[4.8rem] lg:h-[5.2rem] lg:w-[5.2rem] xl:h-[5.6rem] xl:w-[5.6rem] 2xl:h-[6rem] 2xl:w-[6rem]"
						in:scale={{ duration: 500, delay: 500, easing: backInOut }}
					>
						<span
							class="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-blue-700/90 md:h-[3.8rem] md:w-[3.8rem] lg:h-[4.2rem] lg:w-[4.2rem] xl:h-[4.6rem] xl:w-[4.6rem] 2xl:h-[5rem] 2xl:w-[5rem]"
							in:scale={{ duration: 500, delay: 1000, easing: backInOut }}
						>
							<iconify-icon
								icon="mdi:email"
								class="flex items-center justify-center text-center text-base text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
								in:fade={{ duration: 400, delay: 1400, easing: cubicIn }}
							/>
						</span>
					</span>
				</a>
				
			</div>
		</div>
	{/if}
</section>
