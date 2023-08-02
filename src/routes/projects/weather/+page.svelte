<script lang="ts">
	type Choice = 'coordinates' | 'city' | 'zipcode';

	let lat = '';
	let lng = '';
	let city = '';
	let state = '';
	let zipcode = '';
	let selected: Choice = 'coordinates';
	let temperature = '';
	let feelsLike = '';
	let weather = 'Clear';
	let weatherDesc = '';
	let iconID = '01d';

	async function getWeather() {
		const response = await fetch(`/api/weather?lat=${lat}&lng=${lng}`);
		const data = await response.json();
		temperature = data.main.temp;
		feelsLike = data.main.feels_like;
		weather = data.weather[0].main;
		weatherDesc = data.weather[0].description;
		iconID = data.weather[0].icon;
	}

	function getCurrentCoordinates() {
		return new Promise((resolve, reject) => {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					resolve({
						lat: position.coords.latitude,
						lng: position.coords.longitude
					});
				},
				(error) => {
					reject(error);
				}
			);
		});
	}

	async function getCityCoordinates() {
		const response = await fetch(`/api/geocoding/city?city=${city}&state=${state}`);
		const data = await response.json();
		lat = data[0].lat;
		lng = data[0].lon;
		getWeather();
	}

	async function getZipcodeCoordinates() {
		const response = await fetch(`/api/geocoding/zipcode?zip=${zipcode}`);
		const data = await response.json();
		lat = data.lat;
		lng = data.lon;
		city = data.name;
		getWeather();
	}

	async function useLocation() {
		try {
			const coordinates = await getCurrentCoordinates();
			console.log(coordinates);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<section class="inset-0 mx-auto flex justify-center w-[100vw] h-[93vh]">
	<div
		class="card shadow-2xl shadow-gray-600 w-[80vw] h-fit my-auto p-8 bg-cover"
		style:background-image="url(../images/weather/backgrounds/{weather}.jpeg)"
	>
		<nav>
			<img src="../images/weather/icons/{iconID}.png" alt={weather} />
			<h1 class="mt-[-1rem] mb-8 text-7xl tracking-wider text-base-100">weather</h1>
		</nav>

		<main>
			<label class="flex flex-row">
				<p class="pr-1">Location Selection:</p>
				<select bind:value={selected}>
					<option value="coordinates"> By latitude and longitude </option>
					<option value="city"> By city and state </option>
					<option value="zipcode"> By zipcode </option>
				</select>
			</label>

			<div class="weather">
				{#if selected === 'coordinates'}
					<form on:submit|preventDefault={getWeather}>
						<label>
							Latitude: <br />
							<input type="text" bind:value={lat} required />
						</label>
						<br />
						<label>
							Longitude: <br />
							<input type="text" bind:value={lng} required />
						</label>
						<br />
						<button type="submit">Get Weather</button>
						<button type="button" on:click={useLocation} style:margin-left="1rem"
							>Get Current Location</button
						>
					</form>
				{:else if selected === 'city'}
					<form on:submit|preventDefault={getCityCoordinates}>
						<label>
							City: <br />
							<input type="text" bind:value={city} required />
						</label>
						<br />
						<label>
							State: <br />
							<input type="text" bind:value={state} required />
						</label>
						<br />
						<button type="submit">Get Weather</button>
						<button type="button" on:click={useLocation} style:margin-left="1rem"
							>Get Current Location</button
						>
					</form>
				{:else if selected === 'zipcode'}
					<form on:submit|preventDefault={getZipcodeCoordinates}>
						<label>
							Zipcode: <br />
							<input type="text" bind:value={zipcode} style:margin-bottom="5.64rem" required />
						</label>
						<br />
						<button type="submit" class="bg-gradient-to-r from-cyan-500 to-blue-500"
							>Get Weather</button
						>
						<button
							type="button"
							on:click={useLocation}
							style:margin-left="1rem"
							class="bg-gradient-to-r from-cyan-500 to-blue-500">Get Current Location</button
						>
					</form>
				{/if}
			</div>
			<div class="h-full items-center p-8">
				{#if temperature}
					<p>Temperature: {temperature}°F</p>
					<p>Feels Like: {feelsLike}°F</p>
					<p>Weather conditions: {weatherDesc}</p>
				{/if}
			</div>
		</main>
	</div>
</section>

<style lang="scss">
	button {
		border: none;
		border-radius: 0.6rem;
		box-shadow: 3px 8px 4px rgba(0, 0, 0, 0.2), 6px 10px 20px rgba(0, 0, 0, 0.1);
		color: #f9fafb;
		padding: 16px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 18px;
		margin: 1rem 0;

		--tw-gradient-from: #06b6d4;
		--tw-gradient-to: rgb(6 182 212 / 0);
		background: linear-gradient(to bottom, var(--tw-gradient-from), var(--tw-gradient-to));

		&:hover {
			background-color: #006699;
		}
	}

	form label {
		display: block;
		margin-top: 0.4rem;
	}

	form input[type='text'] {
		border: 2px solid #f9fafb;
		border-radius: 0.4rem;
		font-size: 16px;
		padding: 8px 12px;
		width: 95%;
		margin-top: 0.5rem;

		&:focus,
		&:hover {
			border-color: #0077c9;
			outline: none;
		}
	}

	select {
		padding: 0.35em;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 12px;

		&:hover,
		&:focus {
			border-color: #006699;
			outline: 0;
		}
	}
</style>
