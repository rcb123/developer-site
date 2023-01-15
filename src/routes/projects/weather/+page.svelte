<script lang="ts">
	import { browser } from '$app/environment';

	// import all the icon assets
	import i01d from '$icons/01d.png';
	import i01n from '$icons/01n.png';
	import i02d from '$icons/02d.png';
	import i02n from '$icons/02n.png';
	import i03d from '$icons/03d.png';
	import i03n from '$icons/03n.png';
	import i04d from '$icons/04d.png';
	import i04n from '$icons/04n.png';
	import i09d from '$icons/09d.png';
	import i09n from '$icons/09n.png';
	import i10d from '$icons/10d.png';
	import i10n from '$icons/10n.png';
	import i11d from '$icons/11d.png';
	import i11n from '$icons/11n.png';
	import i13d from '$icons/13d.png';
	import i13n from '$icons/13n.png';
	import i50d from '$icons/50d.png';
	import i50n from '$icons/50n.png';
	import iunknown from '$icons/unknown.png';

	// import all the background assets
	import Clear from '$backgrounds/Clear.jpeg';
	import Clouds from '$backgrounds/Clouds.jpeg';
	import Drizzle from '$backgrounds/Drizzle.jpeg';
	import Fog from '$backgrounds/Fog.jpeg';
	import Mist from '$backgrounds/Mist.jpeg';
	import Rain from '$backgrounds/Rain.jpeg';

	// dummy variable to force asset packaging
	let dummy =
		i01d +
		i01n +
		i02d +
		i02n +
		i03d +
		i03n +
		i04d +
		i04n +
		i09d +
		i09n +
		i10d +
		i10n +
		i11d +
		i11n +
		i13d +
		i13n +
		i50d +
		i50n +
		iunknown +
		Clear +
		Clouds +
		Drizzle +
		Fog +
		Mist +
		Rain;

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
	let src = '';
	let bgImg = '';

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

	$: if (browser) {
		src = eval('i' + iconID);
	}
	$: if (browser) {
		bgImg = eval(weather);
	}
</script>

<div class="layout" style:background-image="url({bgImg})">
	<!-- Using dummy variable to force asset import -->
	<p style:position=absolute style:opacity=0>{dummy}</p>

	<nav>
		<img {src} alt={weather} />
		<h1 class="text">weather</h1>
	</nav>

	<main>
		<label>
			How to choose a location:
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
					<button type="submit">Get Weather</button>
					<button type="button" on:click={useLocation} style:margin-left="1rem"
						>Get Current Location</button
					>
				</form>
			{/if}
		</div>
	</main>
</div>

<div class="layout results">
	{#if temperature}
		<p>Temperature: {temperature}°F</p>
		<p>Feels Like: {feelsLike}°F</p>
		<p>Weather conditions: {weatherDesc}</p>
	{/if}
</div>

<style lang="scss">
	h1 {
		font-family: 'Lexend Deca', sans-serif;
		font-size: 5rem;
		color: var(--background-color);
		letter-spacing: 2px;

		&.text {
			margin-top: -30px;
		}
	}

	.layout {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr;
		align-items: center;
		padding: 2rem;

		background-position: center top;
		background-repeat: no-repeat;
		background-size: cover;
	}

	button {
		background-color: #0077c9;
		border: none;
		border-radius: 0.6rem;
		box-shadow: 3px 8px 4px rgba(0, 0, 0, 0.2), 6px 10px 20px rgba(0, 0, 0, 0.1);
		color: #f9fafb;
		padding: 16px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-family: 'Lexend Deca', sans-serif;
		font-size: 18px;
		margin: 1rem 0;

		background: linear-gradient(to bottom, #0077c9, #003399);
		cursor: pointer;

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
