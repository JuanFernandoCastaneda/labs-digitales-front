<script lang="ts">
	import type { Icon } from '$lib/models/icon';
	export let height = 30;
	export let icon: Icon;
	export let width = 30;
</script>

{#if icon !== undefined}
	<svg {height} viewBox={icon.viewBox} {width}>
		<path d={icon.d} />
	</svg>
{/if}
