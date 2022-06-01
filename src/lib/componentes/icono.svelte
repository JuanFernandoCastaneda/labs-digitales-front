<script lang="ts">
	import type { Icono } from '$lib/modelos/icono';
	export let height = 30;
	export let icono: Icono;
	export let width = 30;
</script>

{#if icono !== undefined}
	<svg {height} viewBox={icono.viewBox} {width}>
		<path d={icono.d} />
	</svg>
{/if}
