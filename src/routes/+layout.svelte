<script>
	import Header from '$components/Header.svelte';
	import "../app.css";
	import { inject } from '@vercel/analytics';
	inject();
</script>

<title>Reza Banankhah</title>
<Header />
<slot />