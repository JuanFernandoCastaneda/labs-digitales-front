<script lang="ts" context="module">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({
		fetch,
		params
	}: LoadInput): Promise<LoadOutput<Record<string, Maquina>>> {
		const peticion = await fetch(`${import.meta.env.VITE_BACKEND_URL}/maquinas/${params.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		return {
			props: {
				maquina: await peticion.json()
			}
		};
	}
</script>

<script lang="ts">
	import RayosX from '$lib/componentes/practica/rayos_x.svelte';
	import type { Maquina } from '$lib/modelos/maquina';

	export let maquina: Maquina;
</script>

{#if maquina.nombre === 'Rayos x'}
	<RayosX {maquina} />
{/if}
