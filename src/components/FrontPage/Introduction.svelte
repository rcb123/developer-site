<script>
	import Icon from '$components/Icon.svelte';
</script>

<div class="inset-0 mx-auto flex h-[89vh] max-w-6xl p-24 justify-center text-black">
	<div class="flex max-w-2xl flex-col gap-5 justify-center">
		<div class="h-32 w-32">
			<img src='/images/profile.jpg' alt="" class="rounded-full object-cover object-center" />
		</div>

		<h1 class="text-4xl font-bold tracking-tight text-black sm:text-5xl">
			Software Developer, USC Student, and part time traveler.
		</h1>
		<p class=" text-base text-zinc-500">
			As a Computer Science Business Administration major with a passion for fullstack web
			development and software engineering, I am constantly seeking new opportunities to grow and
			expand my skillset.<br />
			With a strong foundation in C++, Python, and JavaScript, I am confident in my ability to tackle
			any project that comes my way. I am always eager to learn and take on new challenges, and I believe
			that my combination of technical skills and business acumen make me a valuable asset to any team.<br
			/>
			In my spare time, you can find me tinkering with new technologies or working on personal projects
			to further hone my abilities.<br />
			I am excited to see where my career in the tech industry takes me and am eager to make a positive
			impact through my work.
		</p>

		<div class="flex gap-5 text-2xl">
			<Icon icon="github" />
			<Icon icon="linkedin" />
			<Icon icon="mail" />
		</div>
	</div>
</div>
