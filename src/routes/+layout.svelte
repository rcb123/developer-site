<script>
	import Header from '$components/Header.svelte';
	import { inject } from '@vercel/analytics';

	inject();
</script>

<Header />
<slot />
