<script>
	import profile from '$static/images/profile.jpg';
</script>

<svelte:head>
	<title>About | Reza Banankhah</title>
</svelte:head>

<h1 class="text-center text-3xl font-semibold">About Me</h1>

<section class="about">
	<div class="image">
		<img src={profile} alt="Reza Banankhah" />
	</div>
	<div class="content">
		<p>
			Hi, I'm Reza! I am a Sophomore computer science student at the University of Southern
			California, where I am constantly pushing myself to learn new things and improve my skills as
			a developer. I am passionate about using technology to solve problems and make a positive
			impact in the world.
		</p>
		<p>
			In my free time, you can find me working on personal projects, hiking, or hanging out with
			friends. I am always looking for new opportunities to grow and learn, and I am excited to see
			where my career as a developer takes me.
		</p>
		<!--
			Connect with me on LinkedIn to learn more about my professional experience and skills, as well as my goals and aspirations as a developer.
			View my open source projects and contributions on GitHub to get a sense of my coding style and abilities.
		-->
	</div>
</section>

<style lang="scss">
	h1 {
		margin-top: 3rem;
	}

	.about {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem;
		padding-top: 2rem;

		.image {
			width: 30%;
			height: fit-content;
			max-width: 400px;
			max-height: 400px;
			border-radius: 50%;
			overflow: hidden;
		}

		.image img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.content {
			width: 60%;
		}

		.content h1 {
			margin-bottom: 1rem;
		}

		.content p {
			margin-bottom: 1.5rem;
		}
	}
</style>
