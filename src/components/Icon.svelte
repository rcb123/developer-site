<script lang="ts">
    import 'iconify-icon';
	export let icon = '';
</script>

{#if icon === 'github'}
    <a href="https://github.com/rcb123" target="_blank" rel="noreferrer">
        <iconify-icon icon="mdi:github" />
    </a>
{:else if icon === 'linkedin'}
    <a href="https://www.linkedin.com/in/rbanankhah/" target="_blank" rel="noreferrer">
        <iconify-icon icon="mdi:linkedin" />
    </a>
{:else if icon === 'instagram'}
    <a href="https://www.instagram.com/reza_banankhah/" target="_blank" rel="noreferrer">
        <iconify-icon icon="mdi:instagram" />
    </a>
{:else if icon === 'mail'}
    <a href="mailto:banankha@usc.edu">
        <iconify-icon icon="mdi:email" />
    </a>
{/if}