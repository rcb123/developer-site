<script>
	import Header from '$root/components/Header.svelte';
	import '$root/app.css';

	import { inject } from '@vercel/analytics';
	inject();
</script>

<title>Reza Banankhah</title>
<Header />
<slot />
