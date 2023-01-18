<script lang="ts">
	import Icon from "$components/Icon.svelte";
</script>

<svelte:head>
	<title>Contact | Reza Banankhah</title>
</svelte:head>

<section>
	<div class="content">
		<h1 class="text-2xl sm:text-3xl">Contact Me</h1>
		<p class="text-lg">
			Thank you for visiting my developer website! <br><br>
			As a college student seeking internship opportunities, 
			I am always looking to connect with potential employers 
			and learn more about the industry. If you have any open 
			internship positions or would like to discuss a potential 
			project, I'd love to hear from you. You can reach me via 
			email or through my social media profiles.
		</p>
	</div>

	<div class="links">
		<Icon icon='mail'/>
		<Icon icon='linkedin'/>
		<Icon icon='github'/>
		<Icon icon='instagram'/>
	</div>
</section>

<style lang="scss">
	.content {
		text-align: center;

		h1 {
			
			margin-top: 3rem;
			margin-bottom: 3rem;
		}

		p {
			text-align: justify;
			width: 60%;
			margin-left: 20%;
		}
	}

	.links {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-grow: 1;
		padding-top: 2rem;

		width: 50%;
		margin-left: 25%;

		font-size: 2rem;
	}
</style>
