<script lang="ts">
	let name = '';
	let email = '';
	let message = '';

	function resetForm() {
		name = '';
		email = '';
		message = '';
	}

	function handleSubmit(event: { preventDefault: () => void }) {
		event.preventDefault();
		if (!valid) {
			return;
		}
		// send the form data to the server here
		alert('Form submitted successfully!');
		resetForm();
	}

	$: valid = name.trim() && email.trim() && message.trim();
</script>

<svelte:head>
	<title>Contact | Reza Banankhah</title>
</svelte:head>

<main class="container">
	<h1>Contact Me</h1>
	<p>
		Feel free to reach out to me if you have any questions or just want to connect. You can find me
		on LinkedIn and GitHub, or you can send me an email using the form below.
	</p>
	<form on:submit|preventDefault={handleSubmit}>
		<label for="name">Name:</label><br />
		<input type="text" id="name" bind:value={name} required /><br />

		<label for="email">Email:</label><br />
		<input type="email" id="email" bind:value={email} required /><br />

		<label for="message">Message:</label><br />
		<textarea id="message" bind:value={message} required /><br />

		<div class="form-actions">
			<button type="submit" disabled={!valid}>Send</button>
		</div>
	</form>
</main>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;
	}

	label {
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	input,
	textarea {
		font-size: 1.2rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 0.5rem;
	}

	textarea {
		height: 200px;
	}

	.form-actions {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 1rem;
	}

	button {
		font-size: 1.2rem;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 4px;
		background-color: #333;
		color: #fff;

		&:disabled {
			opacity: 0.5;
		}
	}
</style>
